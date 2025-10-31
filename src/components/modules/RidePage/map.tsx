import React, { useEffect, useState } from "react";
import L, { Map as LeafletMap, Polyline } from "leaflet";
import "leaflet/dist/leaflet.css";
import axios from "axios";
import config from "@/config";

import { getDistanceFromLatLonInKm } from "@/utilis/getDistanceFromLongLat";
import RideRequestModal from "./RideRequestModal";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";


interface Location {
    lat: number;
    lon: number;
}

interface IModeldata {
    pickup: string,
    destination: string;
    distance: number;
    price: number

}



export const Map: React.FC = () => {
    const [map, setMap] = useState<LeafletMap | null>(null);
    const [start, setStart] = useState<Location | null>(null);
    const [end, setEnd] = useState<Location | null>(null);
    const [routeLine, setRouteLine] = useState<Polyline | null>(null);
    const [open, setOpen] = useState(false)
    const [modalData, setModalData] = useState<IModeldata>({ pickup: "", destination: "", distance: 0, price: 0 })

    // Initialize Leaflet map
    useEffect(() => {
        const leafletMap = L.map("map").setView([23.8103, 90.4125], 7);
        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
            attribution: "&copy; OpenStreetMap contributors",
        }).addTo(leafletMap);
        setMap(leafletMap);

        return () => {
            leafletMap.remove();
        };
    }, []);

    // Search location using Mapbox Geocoding API
    const searchLocation = async (query: string, type: "start" | "end") => {
        if (!map || !query) return;

        try {
            const res = await axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
                query
            )}.json`,
                {
                    params: {
                        access_token: config.mapboxToken,
                        limit: 1,
                    },
                }
            );

            if (res.data.features.length > 0) {
                const feature = res.data.features[0];
                const [lon, lat] = feature.center;

                const newMarker = L.marker([lat, lon]).addTo(map);
                newMarker.bindPopup(`${type === "start" ? "Start" : "End"}: ${query}`).openPopup();
                // setMarkers((prev) => [...prev, newMarker]);

                if (type === "start") {
                    setStart({ lat, lon });
                } else {
                    setEnd({ lat, lon });
                }

                // Draw line when both are selected
                if (start && type === "end") {
                    if (routeLine) {
                        map.removeLayer(routeLine);
                    }

                    const line = L.polyline(
                        [
                            [start.lat, start.lon],
                            [lat, lon],
                        ],
                        { color: "blue", weight: 4 }
                    ).addTo(map);

                    setRouteLine(line);
                    map.fitBounds(line.getBounds());
                }
            } else {
                alert("Location not found!");
            }
        } catch (error) {
            console.error("Mapbox geocoding error:", error);
        }
    };



    const onSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault()
        const form = e.target
        const pickup = form.pickup.value
        const destination = form.destination.value



        try {
            const distance = await Number(getDistanceFromLatLonInKm(start?.lat as number, start?.lon as number, end?.lat as number, end?.lon as number).toFixed(2))

            const data = {
                pickup,
                destination,
                distance,
                price: distance * 100
            }

            setModalData(data)
            setOpen(true)

            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error: any) {
            toast.error(error.message)

        }

    }





    return (
        <div className="relative">
            <div className="m-2 lg:m-0">
                <form onSubmit={onSubmit}>
                    <div className="flex flex-col md:flex-row gap-4">
                        <div className="flex flex-col gap-2 mb-5">
                            <label>Enter Your Pick Up Point</label>
                            <input onBlurCapture={(e) => searchLocation(e.target.value, "start")} placeholder="Pick-Up" className="border-2 border-primary px-3 py-2 rounded-lg" type="text" name="pickup" id="" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label>Enter Your Destination</label>
                            <input onBlurCapture={(e) => searchLocation(e.target.value, "end")} placeholder="Destination" className="border-2 border-primary px-3 py-2 rounded-lg" type="text" name="destination" id="" />
                        </div>
                    </div>
                    <div><Button type="submit">Search</Button></div>
                </form>

                <div className="py-5">
                    <RideRequestModal open={open} setOpen={setOpen} modalData={modalData} />
                </div>


            </div >

            <div id="map" className="z-10" style={{ height: "500px", width: "100%" }}>

            </div>


        </div >
    );
};

