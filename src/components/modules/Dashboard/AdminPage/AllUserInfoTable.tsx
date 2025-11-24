import Loader from "@/components/layouts/Loader";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useBlockedUnBlockedAUserMutation, useGetAllUserInfoQuery } from "@/redux/features/admin/admin.api";
import { GoBlocked } from "react-icons/go";
import { toast } from "sonner";


export default function AllUserInfoTable() {
    const { data, isLoading } = useGetAllUserInfoQuery(undefined)
    const [blockedUnBlockedAUser] = useBlockedUnBlockedAUserMutation()
    const usersInfo = data?.data

    const handelBlockedOrUnblocked = async(id: string, blockStatus: boolean) => {
        const toastId = toast.loading("Updating...")

        try {
            const result = await blockedUnBlockedAUser({ userId: id, blockStatus }).unwrap()

            if(result?.data?.isBlocked){
                toast.success("The user is blocked", { id: toastId })
            }

            if(!result?.data?.isBlocked){
                toast.success("The user is unblocked", { id: toastId })
            }
            
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error: any) {
            toast.error(error?.message, { id: toastId })
        }
    }



    if (isLoading) return <Loader />
    return (
        <Table>
            <TableHeader>
                <TableRow className="text-center">
                    <TableHead className="">#</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Phone</TableHead>
                    <TableHead>Role</TableHead>
                    <TableHead className="">Is Blocked</TableHead>
                    <TableHead className="">Action</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {
                    usersInfo?.map((userInfo, index) => <TableRow key={index}>
                        <TableCell className="">{index + 1}</TableCell>
                        <TableCell>{userInfo?.name}</TableCell>
                        <TableCell>{userInfo?.email}</TableCell>
                        <TableCell>{userInfo?.phone}</TableCell>
                        <TableCell>{userInfo?.role}</TableCell>
                        <TableCell className="">{userInfo?.isBlocked ? "Blocked" : "Not Block"}</TableCell>
                        <TableCell>
                            <Button onClick={()=>handelBlockedOrUnblocked(userInfo?._id, !userInfo?.isBlocked)} variant="outline" className="border border-destructive cursor-pointer" title="Block The User">
                                <GoBlocked className="text-destructive" />
                            </Button>
                        </TableCell>
                    </TableRow>)
                }

                {
                    usersInfo?.length === 0 && <TableRow>
                        <TableCell>No Users have at this moment</TableCell>
                    </TableRow>
                }



            </TableBody>
        </Table>
    )
}
