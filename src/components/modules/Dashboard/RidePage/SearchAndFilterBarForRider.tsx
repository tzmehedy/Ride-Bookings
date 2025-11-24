
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

import  { useEffect, useState } from "react";

import { useSearchParams } from "react-router";


export default function SearchAndFilterBarRider() {

    const [searchTerm, setSearchTerm] = useState<string>("")

    const [sortByDate, setSortByDate] = useState<string>("")
    const [rideStatus, setRideStatus] = useState<string>("")
    const [searchParams, setSearchParams] = useSearchParams()

    


    useEffect(()=>{
        if(searchParams.toString() !== ""){
            setSearchParams({})
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    // console.log(`${date?.getFullYear()}-${date?.getMonth()}-${date?.getDay()}`)

    
    
    const handelSearchChange= (value: string) =>{
        const params = new URLSearchParams(searchParams)
        params.set("searchTerm", value)
        if(value===""){
            params.delete("searchTerm")
        }
        setSearchParams(params)
        setSearchTerm(value)
    }

    const handelSortChange = (sortByDate: string) =>{
        const params = new URLSearchParams(searchParams)
        params.set("sortByDate", sortByDate)
        setSearchParams(params)
        setSortByDate(sortByDate)
    }

    const handelRideStatusFilter = (rideStatus: string) =>{
        const params = new URLSearchParams(searchParams)
        params.set("ride-status", rideStatus)
        setSearchParams(params)
        setRideStatus(rideStatus)
    }

    
    

  return (
    <div className="mb-12 flex flex-col md:flex-row md:justify-center md:items-center gap-5">
        <div>
              <Input defaultValue={searchTerm} onChange={(e) => handelSearchChange(e.target.value)} placeholder="Search" />
        </div>
        <div>
              <Select defaultValue={sortByDate} onValueChange={(value) => handelSortChange(value)} >
                  <SelectTrigger className="w-[100%]">
                      <SelectValue placeholder="Order By Date" />
                  </SelectTrigger>
                  <SelectContent>
                      <SelectItem value="asc">Ascending</SelectItem>
                      <SelectItem value="dsc">Descending</SelectItem>
                  </SelectContent>
              </Select>
              
        </div>
        <div>

              <Select defaultValue={rideStatus} onValueChange={(value) => handelRideStatusFilter(value)} >
                  <SelectTrigger className="w-[100%]">
                      <SelectValue placeholder="Select Ride Status" />
                  </SelectTrigger>
                  <SelectContent>
                      <SelectItem value="Requested">Requested</SelectItem>
                      <SelectItem value="Accepted">Accepted</SelectItem>
                      <SelectItem value="Picked_Up">Picked_Up</SelectItem>
                      <SelectItem value="In_Transit">In_Transit</SelectItem>
                      <SelectItem value="Completed">Completed</SelectItem>
                      <SelectItem value="Canceled">Canceled</SelectItem>
                  </SelectContent>
              </Select>

        </div>
    </div>
  )
}
