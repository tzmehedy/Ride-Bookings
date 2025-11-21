"use client"

import { useId, useState } from "react"

import { Switch } from "@/components/ui/switch"

import { toast } from "sonner"
import { useUpdateOnlineStatusMutation } from "@/redux/features/drivers/driver.api"

export default function ActiveInactiveToggler() {
  const id = useId()
  const [checked, setChecked] = useState<boolean>(false)
  const [updateOnlineStatus] = useUpdateOnlineStatusMutation()

  const toggleSwitch = async(value: boolean) => {
    setChecked(value)
    
    try {
      const result = await updateOnlineStatus({online_status: value === true ? "Active" : "InActive"}).unwrap()
    
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
        
        onCheckedChange={(value)=>toggleSwitch(value===true? true: false)}
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
