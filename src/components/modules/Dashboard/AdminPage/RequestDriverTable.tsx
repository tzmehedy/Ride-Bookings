import Loader from "@/components/layouts/Loader";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { driversApi, useApproveDriverMutation, useRequestedDriversQuery } from "@/redux/features/drivers/driver.api";
import { useAppDispatch } from "@/redux/hook";
import { toast } from "sonner";


export default function RequestDriverTable() {
    
    const { data, isLoading } = useRequestedDriversQuery(null)
    const [approveDriver] = useApproveDriverMutation()
    const dispatch = useAppDispatch()
    const allRequestedDrivers = data?.data
    

    if (isLoading) return <Loader />

    const handelApproveAndReject = async(id: string, status: string) =>{
        
        try {
            const result = await approveDriver({id, status})
            if(result?.data && status === "Accept"){
                toast.success("The driver is approve for driving")
                dispatch(driversApi.util.resetApiState())
            }
            if(result?.data && status === "Reject"){
                toast.success("The driver is reject for driving")
                dispatch(driversApi.util.resetApiState())
            }
            
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error: any) {
            toast.error(error?.message)
        }
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
                { allRequestedDrivers?.map((requestDriver) => (

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
                {
                    allRequestedDrivers?.length === 0 && <TableRow>
                        <TableCell colSpan={5} className="text-center text-muted-foreground">There is no application at this moment</TableCell>
                    </TableRow> 
                }
            </TableBody>
        </Table>
    )
}
