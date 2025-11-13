import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import type { IRide } from "@/types"
import { type Dispatch, type SetStateAction } from "react"
import RideStatusTimeline from "./RideStatusTimeline"

interface IRideModalProps{
  open: boolean,
  setOpen: Dispatch<SetStateAction<boolean>>,
  rideData: IRide | null,
  defaultValueIndex: number
}



export default function RideDetailsModal({ open, setOpen, rideData, defaultValueIndex }:IRideModalProps ) {

  
  return (
    <Dialog open={open} onOpenChange={setOpen}>

      <DialogContent className="flex flex-col gap-0 p-0 sm:max-h-[min(640px,80vh)] sm:max-w-lg [&>button:last-child]:top-3.5">
        <DialogHeader className="contents space-y-0 text-left">
          <DialogTitle className="border-b px-6 py-4 text-base">
            Your Ride Details Information
          </DialogTitle>
          <div className="overflow-y-auto">
            <DialogDescription asChild>
              <div className="px-6 py-4">
                <div className="space-y-1">
                  <RideStatusTimeline defaultValueIndex={defaultValueIndex} />
                </div>
                <div className="space-y-4 [&_strong]:font-semibold [&_strong]:text-foreground flex justify-between items-center gap-4 p-5 mt-3">
                  <div>
                    
                    <div className="space-y-1">
                      <p>
                        <strong>Pick Up Point</strong>
                      </p>
                      <p>
                        {rideData?.pickup_address}
                      </p>
                    </div>
                    <div className="space-y-1">
                      <p>
                        <strong>Destination</strong>
                      </p>
                      <p>
                        {rideData?.destination_address}
                      </p>
                    </div>
                    <div className="space-y-1">
                      <p>
                        <strong>Total Distance</strong>
                      </p>
                      <p>
                        {rideData?.distance}
                      </p>
                    </div>
                    <div className="space-y-1">
                      <p>
                        <strong>Price</strong>
                      </p>
                      <p>
                        {rideData?.price}
                      </p>
                    </div>
                  </div>

                  <div>
                    <p><strong>Driver Info</strong></p>
                    <div>{rideData?.driver? <pre>
                      <p>Name: {rideData?.driver?.userId?.name}</p>
                      <p>Email: {rideData?.driver?.userId?.email}</p>
                      <p>Email: {rideData?.driver?.userId?.phone}</p>
                      <p><strong>Vehicle Info</strong></p>
                      <p>Brand: {rideData?.driver?.vehicle_info?.brand_name}</p>
                      <p>Model: {rideData?.driver?.vehicle_info?.model}</p>
                      <p>Vehicle No: {rideData?.driver?.vehicle_info?.vehicle_number}</p>

                    </pre> : "No Driver Info Found"}</div>
                  </div>

                  
                </div>
              </div>
            </DialogDescription>
            <DialogFooter className="px-6 pb-6 sm:justify-start">
              <DialogClose asChild>
                <Button type="button">Okay</Button>
              </DialogClose>
            </DialogFooter>
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}
