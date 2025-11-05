import Loader from "@/components/layouts/Loader";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useRequestedDriversQuery } from "@/redux/features/drivers/driver.api";


export default function RequestDriverTable() {

    const { data, isLoading } = useRequestedDriversQuery(null)
    const allRequestedDrivers = data?.data
    

    if (isLoading) return <Loader />

    const handelApproveAndReject = (id: string, status: string) =>{
        console.log(id, status)
    }
    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead className="">Name</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Vehicle Info</TableHead>
                    <TableHead className="">Status</TableHead>
                    <TableHead className="text-center">Action</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {allRequestedDrivers?.map((requestDriver) => (
                    <TableRow key={requestDriver._id}>
                        <TableCell className="font-medium">{requestDriver?.userId.name}</TableCell>
                        <TableCell>{requestDriver?.userId.email}</TableCell>
                        <TableCell>
                            <ul>
                                <li>{requestDriver?.vehicle_info.brand_name}</li>
                                <li>{requestDriver?.vehicle_info.model}</li>
                                <li>{requestDriver?.vehicle_info.vehicle_number}</li>
                            </ul>
                        </TableCell>
                        <TableCell className="">{requestDriver?.approval_status}</TableCell>

                        <TableCell className=" space-x-3">
                            <Button onClick={() => handelApproveAndReject(requestDriver?._id,"Accept")}  className="cursor-pointer">Accept</Button>
                            <Button onClick={() => handelApproveAndReject(requestDriver?._id, "Reject")} variant="destructive" className="cursor-pointer">Reject</Button>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}
