import type { Dispatch, SetStateAction } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { DialogDescription } from "@radix-ui/react-dialog"
import { ridesApi, useRequestRideMutation } from "@/redux/features/rides/rides.api"
import { toast } from "sonner"
import { useNavigate } from "react-router"
import { useAppDispatch } from "@/redux/hook"


interface RideRequestModalProps {
  open: boolean,
  setOpen: Dispatch<SetStateAction<boolean>>,
  modalData: {
    pickup: string,
    destination: string,
    distance: number,
    price: number
  }
}

export default function RideRequestModal({ open, setOpen, modalData }: RideRequestModalProps) {

  const [ requestRide ] = useRequestRideMutation()
  const dispatch = useAppDispatch()
  const navigate = useNavigate()



  const handelRideRequest = async (e: React.ChangeEvent<HTMLFormElement>) => {
    const toastId = toast.loading("Process your ride request. Please wait...")
    e.preventDefault()
    const form = e.target
    const paymentMethod = form.paymentMethod.value

    const rideRequestInfo = {
      pickup_address: modalData.pickup,
      destination_address: modalData.destination,
      distance: modalData.distance,
      price: modalData.price,
      paymentMethod
    }

    try {
      
      const result = await requestRide(rideRequestInfo).unwrap()
      
      if(result?.success){
        toast.success("The Ride Request successfully requested", { id: toastId })
        setOpen(false)
        dispatch(ridesApi.util.resetApiState())
        navigate("/rider/ride-history")
      }
      
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      toast.error(error?.data.message, {id: toastId})
      setOpen(false)
    }
    

  }
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Please check before ride</DialogTitle>
        </DialogHeader>
        <DialogDescription />
        <div className="">
          <div className="space-y-3">
            <p className="text-muted-foreground">Pick Up: <span className="text-foreground">{modalData.pickup}</span></p>
            <p className="text-muted-foreground">Destination: <span className="text-foreground">{modalData.destination}</span></p>
          </div>
          <div className="space-y-3">
            <p className="text-muted-foreground">Distance: <span className="text-foreground">{modalData.distance}</span></p>
            <p className="text-muted-foreground">Price: <span className="text-foreground">{modalData.price}/= BDT</span> </p>
          </div>
          <div>
            <form onSubmit={handelRideRequest} id="paymentMethodForm">
              <div className="flex flex-col space-y-2">
                <label htmlFor="paymentMethod">Select Payment Method</label>
                <select name="paymentMethod" required>
                  <option value="Cash">Cash</option>
                  <option value="Online">Online Payment</option>
                </select>
              </div>
            </form>

          </div>
          <div className="mt-3">
            <Button form="paymentMethodForm" className=" cursor-pointer">Request Ride</Button>
          </div>
        </div>
      </DialogContent>
    </Dialog >
  )
}
