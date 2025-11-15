import { Button } from "@/components/ui/button"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { useGetAllRidesQuery } from "@/redux/features/rides/rides.api"
import { LoaderCircleIcon } from "lucide-react"
import { useState } from "react"
import RideDetailsModal from "./RideDetailsModal"
import type { IRide } from "@/types"
import { RideTimelineItems } from "@/constants/ride"


export function MyRideTable() {
    const { data, isLoading } = useGetAllRidesQuery(null)
    const ridesInfo = data?.data
    const [open, setOpen] = useState(false)
    const [selectedRideInfo, setSelectedRideInfo] = useState<IRide | null>(null)
    const [defaultValueIndex, setDefaultValueIndex] = useState(0)

    console.log(ridesInfo)

    if (isLoading) {
        return <div className="h-100vh flex justify-center items-center">
            <LoaderCircleIcon className="text-primary" />
        </div>
    }

    const handleShowDetails = (rideInfo: IRide) => {
        RideTimelineItems.map((item)=>{
            if(item.title === rideInfo.ride_status){
                setDefaultValueIndex(item.id)
            }
        })
        setSelectedRideInfo(rideInfo)
        setOpen(true)
    }
    return (
        <Table>

            <TableHeader>
                <TableRow>
                    <TableHead className="w-[100px]">#</TableHead>
                    <TableHead className="w-[100px]">Pick-Up</TableHead>
                    <TableHead>Destination</TableHead>
                    <TableHead>Distance</TableHead>
                    <TableHead className="">Price</TableHead>
                    <TableHead className="">Ride Status</TableHead>
                    <TableHead className="">Payment Method</TableHead>
                    <TableHead className="">Payment Status</TableHead>
                    <TableHead className="text-center">Action</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {ridesInfo?.map((rideInfo, index) => (
                    <TableRow key={index}>
                        <TableCell className="font-medium">{index + 1}</TableCell>
                        <TableCell className="">{rideInfo.pickup_address}</TableCell>
                        <TableCell>{rideInfo.destination_address}</TableCell>
                        <TableCell>{rideInfo.distance} km</TableCell>
                        <TableCell className="">{rideInfo.price} Tk.</TableCell>
                        <TableCell className="">{rideInfo.ride_status}</TableCell>
                        <TableCell className="">{rideInfo.paymentMethod}</TableCell>
                        <TableCell className="">{rideInfo?.payment ? rideInfo?.payment.paymentStatus:"No data"}</TableCell>
                        <TableCell className="space-x-2">
                            <Button onClick={() => handleShowDetails(rideInfo)} className="cursor-pointer">See Details</Button>

                            <Button disabled={rideInfo.paymentMethod === "Cash" || rideInfo.ride_status !== "Completed"} variant="outline" className="cursor-pointer border border-primary">💵Pay</Button>
                            </TableCell>
                        
                    </TableRow>
                ))}
            </TableBody>
            <RideDetailsModal defaultValueIndex={defaultValueIndex} rideData={selectedRideInfo} open={open} setOpen={setOpen} />
        </Table>
    )
}
