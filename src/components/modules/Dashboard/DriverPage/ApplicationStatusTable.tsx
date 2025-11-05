import Loader from "@/components/layouts/Loader";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { cn } from "@/lib/utils";
import { useGetDriverInfoQuery } from "@/redux/features/drivers/driver.api";


export default function ApplicationStatusTable() {
    const {data: driverInfo, isLoading} = useGetDriverInfoQuery(undefined)
    if(isLoading) return <Loader/>

  return (
      <Table>
          <TableHeader>
              <TableRow>
                  <TableHead className="">Name</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Vehicle Info</TableHead>
                  <TableHead className="">Status</TableHead>
              </TableRow>
          </TableHeader>
          <TableBody>
              {
                  driverInfo?.data ? <TableRow>
                      <TableCell className="font-medium">{driverInfo?.data.userId.name}</TableCell>
                      <TableCell>{driverInfo?.data.userId.email}</TableCell>
                      <TableCell>
                          <ul>
                              <li>Brand Name: {driverInfo?.data.vehicle_info.brand_name}</li>
                              <li>Model: {driverInfo?.data.vehicle_info.model}</li>
                              <li>Vehicle Number: {driverInfo?.data.vehicle_info.vehicle_number}</li>
                          </ul>
                      </TableCell>
                      <TableCell className={cn("font-bold", {
                          "text-yellow-500": driverInfo?.data.approval_status === "Pending",
                          "text-green-500": driverInfo?.data.approval_status === "Accept",
                          "text-red-500": driverInfo?.data.approval_status === "Reject",

                      })}>{driverInfo?.data.approval_status}</TableCell>
                  </TableRow> : <TableRow className="">
                    <TableCell colSpan={4} className="text-center text-muted-foreground text-md pt-5">You have no application for drive.</TableCell>
                  </TableRow>
              } 
          </TableBody>
      </Table>
  )
}
