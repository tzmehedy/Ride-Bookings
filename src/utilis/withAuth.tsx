import Loader from "@/components/layouts/Loader";
import { useGetUserInfoQuery } from "@/redux/features/auth/auth.api";

import type { TRole } from "@/types";
import type { ComponentType } from "react";
import { Navigate } from "react-router";

export const withAuth = (Component: ComponentType, requiredRole?: TRole) => {
    return function AuthWrapper() {
        const { data: userInfo, isLoading: userLoading } = useGetUserInfoQuery(undefined)

        if (userLoading) {
            return <Loader/>
        }


        if (!userLoading && !userInfo?.data?.email) {
            return <Navigate to="/login" />
        }

        if (requiredRole && !userLoading && requiredRole !== userInfo?.data?.role) {
            return <Navigate to="/unauthorized" />
            
        }

        if (!userLoading && userInfo?.data?.isBlocked){
            return <Navigate to="/block"/>
        }

        return <Component />
    }

}