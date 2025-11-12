import { useGetUserInfoQuery } from "@/redux/features/auth/auth.api";

import type { TRole } from "@/types";
import { LoaderCircleIcon } from "lucide-react";
import type { ComponentType } from "react";
import { Navigate } from "react-router";

export const withAuth = (Component: ComponentType, requiredRole?: TRole) => {
    return function AuthWrapper() {
        const { data: userInfo, isLoading: userLoading } = useGetUserInfoQuery(undefined)

        if (userLoading) {
            return <div className="h-screen flex justify-center items-center">
                <LoaderCircleIcon className="text-primary" />
            </div>
        }


        if (!userLoading && !userInfo?.data.email) {
            return <Navigate to="/login" />
        }

        if (requiredRole && !userLoading && requiredRole !== userInfo?.data?.role) {
            return <Navigate to="/unauthorized" />
            
        }

        return <Component />
    }

}