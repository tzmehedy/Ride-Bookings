
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

import { useEffect } from "react";
import { useSearchParams } from "react-router";
import { FcClearFilters } from "react-icons/fc";
import Datepicker from "./Datepicker";


export default function SearchAndFilterForAllRidesForAdmin() {
    const [searchParams, setSearchParams] = useSearchParams()


    const searchTerm = searchParams.get("searchTerm") || ""
    const ride_status = searchParams.get("ride_status") || ""

    useEffect(() => {
        if (searchParams.toString() !== "") {
            setSearchParams({})
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    // console.log(`${date?.getFullYear()}-${date?.getMonth()}-${date?.getDay()}`)



    const handelSearchChange = (value: string) => {
        const params = new URLSearchParams(searchParams)
        params.set("searchTerm", value)
        if (value === "") {
            params.delete("searchTerm")
        }
        setSearchParams(params)
    }

    const handelRideStatusChange = (ride_status: string) => {
        const params = new URLSearchParams(searchParams)
        params.set("ride_status", ride_status)
        setSearchParams(params)
    }

    const handelClearSearchAndFilter = () => {
        const params = new URLSearchParams(searchParams)
        params.delete("searchTerm")
        params.delete("ride_status")
        params.delete("date")
        setSearchParams(params)
    }

    return (
        <>
            <div className="flex justify-end mb-5">
                <Button onClick={handelClearSearchAndFilter} variant="outline" className="text-muted-foreground border border-primary">
                    <FcClearFilters className="" />
                    Clear Search & Filter
                </Button>
            </div>

            <div className="mb-12 flex flex-col md:flex-row md:justify-center md:items-center gap-5">
                <div>
                    <Input value={searchTerm} onChange={(e) => handelSearchChange(e.target.value)} placeholder="Search" />
                </div>
                <div>
                    <Select value={ride_status} onValueChange={(value) => handelRideStatusChange(value)} >
                        <SelectTrigger className="w-[100%]">
                            <SelectValue placeholder="Ride Status" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="Requested">Requested</SelectItem>
                            <SelectItem value="Accepted">Accepted</SelectItem>
                            <SelectItem value="Picked_Up">Picked_Up</SelectItem>
                            <SelectItem value="In_Transit">In_Transit</SelectItem>
                            <SelectItem value="Completed">Completed</SelectItem>
                            <SelectItem value="Canceled">Canceled</SelectItem>
                        </SelectContent>
                    </Select>

                </div>

                <div>
                    <Datepicker/>
                </div>

            </div>
        </>
    )
}
