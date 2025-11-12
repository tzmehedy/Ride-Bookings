import Loader from "@/components/layouts/Loader";
import { useGetDriverInfoQuery } from "@/redux/features/drivers/driver.api";
import type { ComponentType } from "react";
import { Navigate } from "react-router";


export const withApprove = (Component: ComponentType) =>{

    return function ApproveWrapper(){
        const {data: driverInfo, isLoading} = useGetDriverInfoQuery(undefined)

        if(isLoading) return <Loader/>

        if(!isLoading && driverInfo?.data.approval_status !== "Accept"){
            return <Navigate to="/unauthorized"/>
        }
        
        return <Component/>
    }


}