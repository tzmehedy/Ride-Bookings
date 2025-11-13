import Loader from '@/components/layouts/Loader'
import { Button } from '@/components/ui/button'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { useGetRequestedRidesQuery } from '@/redux/features/drivers/driver.api'


export default function ShowRequestedRidesTable() {
    const {data, isLoading} = useGetRequestedRidesQuery(null)
    const getRequestedRides = data?.data

    if(isLoading) return <Loader/>

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
                  <TableHead className="">Action</TableHead>
              </TableRow>
          </TableHeader>
          <TableBody>
            {
                  getRequestedRides?.map((ride) => <TableRow>
                      <TableCell className="">{ride.pickup_address}</TableCell>
                      <TableCell>{ride.destination_address}</TableCell>
                      <TableCell>{ride.distance}</TableCell>
                      <TableCell className="text-right">{ride.price}</TableCell>
                      <TableCell className="text-orange-500 font-bold">{ride.ride_status}</TableCell>
                      <TableCell className="">{ride.user.name}</TableCell>
                      <TableCell className="">{ride.user.phone}</TableCell>
                      <TableCell className="">
                        <Button>Accept</Button>
                      </TableCell>
                  </TableRow>)
            }
              
          </TableBody>
      </Table>
  )
}
