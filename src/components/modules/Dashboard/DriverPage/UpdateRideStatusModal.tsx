
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import type { Dispatch, SetStateAction } from "react"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { useForm } from "react-hook-form"
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { driversApi, useUpdateRidesStatusMutation } from "@/redux/features/drivers/driver.api"
import { toast } from "sonner"
import { useAppDispatch } from "@/redux/hook"
import { ridesApi } from "@/redux/features/rides/rides.api"
import RideLogo from "@/assets/icons/logo/RideLogo"

interface IUpdateStatusModalProps{
  open: boolean,
  setOpen: Dispatch<SetStateAction<boolean>>,
  rideId: string
}

const rideStatusSchema = z.object({
  status: z.string()
})

export default function UpdateRideStatusModal({ open, setOpen, rideId }: IUpdateStatusModalProps) {
 
  const [updateRidesStatus] = useUpdateRidesStatusMutation()
  const dispatch = useAppDispatch()
  const form = useForm<z.infer<typeof rideStatusSchema>>({
    resolver: zodResolver(rideStatusSchema),
    defaultValues: {
      status: ""
    }
  })

  const onSubmit = async(value: z.infer<typeof rideStatusSchema>) =>{
    const toastId = toast.loading("Updating! Please wait.")
    try {
      
      const result = await updateRidesStatus({rideId, status:value}).unwrap()
      

      if(result.success){
        toast.success(result.message, { id: toastId })
        setOpen(false)
        dispatch(driversApi.util.resetApiState())
        dispatch(ridesApi.util.resetApiState())

      }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      toast.error(error?.message, {id:toastId})
    }

  }
  return (
    <Dialog open={open} onOpenChange={setOpen}>

      <DialogContent>
        <div className="mb-2 flex flex-col items-center gap-2">
          <div
            className="flex size-11 shrink-0 items-center justify-center rounded-full border"
            aria-hidden="true"
          >
           <RideLogo/>
          </div>
          <DialogHeader>
            <DialogTitle className="sm:text-center">
              Update Ride Status
            </DialogTitle>
          </DialogHeader>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="status"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Select Status</FormLabel>
                  <FormControl>

                    <Select onValueChange={field.onChange} value={field.value}>
                      <SelectTrigger className="w-[100%]">
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent> 
                        <SelectGroup>
                          <SelectItem value="Picked_Up">Picked_Up</SelectItem>
                          <SelectItem value="In_Transit">In_Transit</SelectItem>
                          <SelectItem value="Completed">Completed</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Update Status</Button>
          </form>
        </Form>

        <p className="text-center text-xs text-muted-foreground">
          By subscribing you agree to our{" "}
          <a className="underline hover:no-underline" href="#">
            Privacy Policy
          </a>
          .
        </p>
      </DialogContent>
    </Dialog>
  )
}
