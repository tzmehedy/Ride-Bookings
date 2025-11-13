import Loader from '@/components/layouts/Loader'
import { Button } from '@/components/ui/button'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { driversApi, useAcceptRideMutation, useGetRequestedRidesQuery } from '@/redux/features/drivers/driver.api'
import { useAppDispatch } from '@/redux/hook'
import { useNavigate } from 'react-router'
import { toast } from 'sonner'


export default function ShowRequestedRidesTable() {
  const { data, isLoading } = useGetRequestedRidesQuery(null)
  const [acceptRide] = useAcceptRideMutation()
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const getRequestedRides = data?.data

  if (isLoading) return <Loader />

  

  const handelAcceptRide = async (id: string) => {
    const toastId = toast.loading("Processing. Please wait...")

    try {
      const result = await acceptRide(id).unwrap()
      
      if (result.success) {
        toast.success("You accepted the ride.", { id: toastId })
        dispatch(driversApi.util.resetApiState())
        navigate("/driver/all-rides")
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      
      toast.error(error.data.message, { id: toastId })
    }
  }

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
          getRequestedRides?.map((ride, index) => <TableRow key={index}>
            <TableCell className="">{ride.pickup_address}</TableCell>
            <TableCell>{ride.destination_address}</TableCell>
            <TableCell>{ride.distance}</TableCell>
            <TableCell className="text-right">{ride.price}</TableCell>
            <TableCell className="text-orange-500 font-bold">{ride.ride_status}</TableCell>
            <TableCell className="">{ride.user.name}</TableCell>
            <TableCell className="">{ride.user.phone}</TableCell>
            <TableCell className="">
              <Button onClick={() => handelAcceptRide(ride._id)}>Accept</Button>
            </TableCell>
          </TableRow>)
        }

      </TableBody>
    </Table>
  )
}
