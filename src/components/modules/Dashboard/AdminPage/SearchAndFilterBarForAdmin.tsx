
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

import { useEffect } from "react";

import { useSearchParams } from "react-router";

import { FcClearFilters } from "react-icons/fc";


export default function SearchAndFilterBarAdmin() {
    const [searchParams, setSearchParams] = useSearchParams()


    const searchTerm = searchParams.get("searchTerm") || ""
    const role = searchParams.get("role") || ""
    const blockedStatus = searchParams.get("blocked_status") || ""

   

    useEffect(() => {
        if (searchParams.toString() !== "") {
            setSearchParams({})
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    // console.log(`${date?.getFullYear()}-${date?.getMonth()}-${date?.getDay()}`)



    const handelSearchChange = (value: string) => {
        const params = new URLSearchParams(searchParams)
        params.set("searchTerm", value)
        if (value === "") {
            params.delete("searchTerm")
        }
        setSearchParams(params)
    }

    const handelRoleChange = (role: string) => {
        const params = new URLSearchParams(searchParams)
        params.set("role", role)
        setSearchParams(params)
    }

    const handelIsBlockedFilter = (blocked_status: string) => {
        const params = new URLSearchParams(searchParams)
        params.set("blocked_status", blocked_status)
        setSearchParams(params)
    }

    const handelClearSearchAndFilter = () =>{
        const params = new URLSearchParams(searchParams)
        params.delete("searchTerm")
        params.delete("role")
        params.delete("blocked_status")
        setSearchParams(params)
    }

    return (
        <>
            <div className="flex justify-end mb-5">
                <Button onClick={handelClearSearchAndFilter} variant="outline" className="text-muted-foreground border border-primary">
                    <FcClearFilters className="" /> 
                    Clear Search & Filter
                </Button>
            </div>

            <div className="mb-12 flex flex-col md:flex-row md:justify-center md:items-center gap-5">
                <div>
                    <Input value={searchTerm} onChange={(e) => handelSearchChange(e.target.value)} placeholder="Search by name, email, phone" />
                </div>
                <div>
                    <Select value={role} onValueChange={(value) => handelRoleChange(value)} >
                        <SelectTrigger className="w-[100%]">
                            <SelectValue placeholder="Role" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="DRIVER">Driver</SelectItem>
                            <SelectItem value="RIDER">Rider</SelectItem>
                        </SelectContent>
                    </Select>

                </div>
                <div>

                    <Select value={blockedStatus} onValueChange={(value) => handelIsBlockedFilter(value)}>
                        <SelectTrigger className="w-[100%]">
                            <SelectValue placeholder="Select" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="true">Blocked</SelectItem>
                            <SelectItem value="false">Not Blocked</SelectItem>
                        </SelectContent>
                    </Select>

                </div>

            </div>
        </>
    )
}
