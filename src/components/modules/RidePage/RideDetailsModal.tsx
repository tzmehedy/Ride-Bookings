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
                <div className="space-y-4 [&_strong]:font-semibold [&_strong]:text-foreground">
                  <div className="space-y-1">
                    <RideStatusTimeline defaultValueIndex={defaultValueIndex}/>
                  </div>
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
                      <strong>Password Reset Process</strong>
                    </p>
                    <p>
                      Users can reset their password through the account
                      settings page. Click &quot;Forgot Password&quot; and
                      follow the email verification steps to regain account
                      access quickly and securely.
                    </p>
                  </div>
                  <div className="space-y-1">
                    <p>
                      <strong>Service Pricing Tiers</strong>
                    </p>
                    <p>
                      We offer three primary subscription levels designed to
                      meet diverse user needs: Basic (free with limited
                      features), Professional (monthly fee with comprehensive
                      access), and Enterprise (custom pricing with full platform
                      capabilities).
                    </p>
                  </div>
                  <div className="space-y-1">
                    <p>
                      <strong>Technical Support Channels</strong>
                    </p>
                    <p>
                      Customer support is accessible through multiple
                      communication methods including email support, live chat
                      during business hours, an integrated support ticket
                      system, and phone support specifically for
                      enterprise-level customers.
                    </p>
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
