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

export function MyRideTable() {
    const { data, isLoading } = useGetAllRidesQuery(null)
    const ridesInfo = data?.data

    
    

    if (isLoading) {
        return <div className="h-100vh flex justify-center items-center">
            <LoaderCircleIcon className="text-primary" />
        </div>
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
                    <TableHead className="">Action</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {ridesInfo?.map((rideInfo, index) => (
                    <TableRow key={index}>
                        <TableCell className="font-medium">{index+1}</TableCell>
                        <TableCell className="">{rideInfo.pickup_address}</TableCell>
                        <TableCell>{rideInfo.destination_address}</TableCell>
                        <TableCell>{rideInfo.distance} km</TableCell>
                        <TableCell className="">{rideInfo.price} Tk.</TableCell>
                        <TableCell className="">{rideInfo.ride_status}</TableCell>
                        <TableCell className=""><Button className="cursor-pointer" title="See Details">See Details</Button></TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}
