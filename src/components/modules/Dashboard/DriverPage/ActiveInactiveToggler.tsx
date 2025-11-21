"use client"

import { useId, useState } from "react"

import { Switch } from "@/components/ui/switch"

import { toast } from "sonner"
import { useGetDriverInfoQuery, useUpdateOnlineStatusMutation } from "@/redux/features/drivers/driver.api"
import Loader from "@/components/layouts/Loader"

export default function ActiveInactiveToggler() {
  
  const {data, isLoading} = useGetDriverInfoQuery(null)

  if(isLoading) <Loader/>

  const driverInfo = data?.data

  const id = useId()



  const [checked, setChecked] = useState("")


  const [updateOnlineStatus] = useUpdateOnlineStatusMutation()

  

  const toggleSwitch = async(value: string) => {
    setChecked(value)
    
    try {
      const result = await updateOnlineStatus({online_status: value}).unwrap()
    
      if(result.data.online_status === "Active"){
        toast.success("You are in Active mode")
      }
      else{
        toast.warning("You are in Inactive mode")
      }
      
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      toast.error(error?.message)
    }


  }

  return (
    <div
      className="group inline-flex items-center gap-2"
      data-state={checked ? "checked" : "unchecked"}
    >
      <span
        id={`${id}-off`}
        className="flex-1 text-primary cursor-pointer text-right text-sm font-bold group-data-[state=checked]:text-muted-foreground "
        aria-controls={id}
      >
        Inactive
      </span>
      <Switch
        id={id}
        checked={driverInfo?.online_status === "Active" ? true : false}
        onCheckedChange={(value)=>toggleSwitch(value === true? "Active": "InActive")}
        aria-labelledby={`${id}-off ${id}-on`}
      />
      <span
        id={`${id}-on`}
        className="flex-1 text-primary cursor-pointer text-left text-sm font-bold group-data-[state=unchecked]:text-muted-foreground"
        aria-controls={id}
      >
        Active
      </span>
    </div>
  )
}
