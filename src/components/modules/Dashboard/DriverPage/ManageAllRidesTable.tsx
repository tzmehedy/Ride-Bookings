import Loader from "@/components/layouts/Loader";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { cn } from "@/lib/utils";
import { useGetMyAllRidesQuery } from "@/redux/features/drivers/driver.api";



export default function ManageAllRidesTable() {
    const { data, isLoading } = useGetMyAllRidesQuery(null)
    if (isLoading) return <Loader />
    const allRides = data?.data?.rideId
    console.log(allRides)
    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead className="">Pick Up</TableHead>
                    <TableHead>Destination</TableHead>
                    <TableHead>Distance</TableHead>
                    <TableHead className="text-right">Price</TableHead>
                    <TableHead className="">Ride Status</TableHead>
                    <TableHead className="">Rider Name</TableHead>
                    <TableHead className="">Rider Phone</TableHead>
                    <TableHead className="">Payment Method</TableHead>
                    <TableHead className="text-center">Action</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {
                    allRides?.map((ride, index) => <TableRow key={index}>
                        <TableCell className="">{ride.pickup_address}</TableCell>
                        <TableCell>{ride.destination_address}</TableCell>
                        <TableCell>{ride.distance}</TableCell>
                        <TableCell className="text-right">{ride.price}</TableCell>
                        <TableCell className={cn({
                            "text-green-500 font-bold": ride.ride_status === "Accepted",
                            "text-cyan-500 font-bold": ride.ride_status === "Picked_Up",
                            "text-blue-800 font-bold": ride.ride_status === "In_Transit",
                            "text-green-600 font-bold": ride.ride_status === "Completed",
                            "text-red-600 font-bold": ride.ride_status === "Canceled",
                        })}>{ride.ride_status}</TableCell>
                        <TableCell className="">{ride.user.name}</TableCell>
                        <TableCell className="">{ride.user.phone}</TableCell>
                        <TableCell className="">{ride.paymentMethod}</TableCell>
                        <TableCell className="">
                            <Button>Update Ride Status</Button>
                        </TableCell>
                    </TableRow>)
                }

            </TableBody>
        </Table>
    )
}
