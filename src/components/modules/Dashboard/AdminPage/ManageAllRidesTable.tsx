import Loader from "@/components/layouts/Loader";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { cn } from "@/lib/utils";
import { useGetAllRidesForAdminQuery } from "@/redux/features/admin/admin.api";
import { useSearchParams } from "react-router";
import SearchAndFilterForAllRidesForAdmin from "./SearchAndFilterForAllRidesForAdmin";



export default function ManageAllRidesTable() {

    const [searchParams] = useSearchParams()

    const searchTerm = searchParams.get("searchTerm")
    const ride_status = searchParams.get("ride_status")
    const date = searchParams.get("date")

    console.log(searchTerm)

    const query = {
        searchTerm,
        ride_status,
        date
    }

    const { data, isLoading } = useGetAllRidesForAdminQuery(query)

    const ridesInfo = data?.data

    

    if (isLoading) return <Loader />



    return (
        <>
        <div>
            <SearchAndFilterForAllRidesForAdmin />
        </div>
            <Table className="">
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[100px]">Pick-Up</TableHead>
                        <TableHead>Destination</TableHead>
                        <TableHead>Distance</TableHead>
                        <TableHead className="">Price</TableHead>
                        <TableHead className="">Ride Status</TableHead>
                        <TableHead className="">Ride Date</TableHead>
                        <TableHead className="">Rider Name</TableHead>
                        <TableHead className="">Rider Email</TableHead>
                        <TableHead className="">Driver Name</TableHead>
                        <TableHead className="">Driver Email</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {ridesInfo?.map((rideInfo, index) => (
                        <TableRow key={index}>
                            <TableCell className="">{rideInfo.pickup_address}</TableCell>
                            <TableCell>{rideInfo.destination_address}</TableCell>
                            <TableCell>{rideInfo.distance} km</TableCell>
                            <TableCell className="text-end">{rideInfo.price} /=</TableCell>
                            <TableCell className={cn({
                                "text-green-500 font-bold": rideInfo.ride_status === "Accepted",
                                "text-cyan-500 font-bold": rideInfo.ride_status === "Picked_Up",
                                "text-blue-800 font-bold": rideInfo.ride_status === "In_Transit",
                                "text-green-600 font-bold": rideInfo.ride_status === "Completed",
                                "text-red-600 font-bold": rideInfo.ride_status === "Canceled",
                            })}>{rideInfo.ride_status}
                            </TableCell>

                            <TableCell className="">{rideInfo?.createdAt ? new Date(rideInfo.createdAt).toLocaleString().split(",")[0] : ""}</TableCell>

                            <TableCell>{rideInfo.user.name}</TableCell>
                            <TableCell>{rideInfo.user.email}</TableCell>
                            <TableCell>{rideInfo?.driver?.userId?.name}</TableCell>
                            <TableCell>{rideInfo?.driver?.userId?.email}</TableCell>

                        </TableRow>
                    ))}

                    {
                        ridesInfo?.length === 0 && <TableRow>
                            <TableCell className="text-center text-muted-foreground" colSpan={10} >No Data found.</TableCell>
                        </TableRow>
                    }
                </TableBody>
                {/* <RideDetailsModal defaultValueIndex={defaultValueIndex} rideData={selectedRideInfo} open={open} setOpen={setOpen} /> */}
            </Table>

        </>
    )
}
