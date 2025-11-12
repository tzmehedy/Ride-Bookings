import { Role } from "@/constants/role";
import { adminSideBarRoutes } from "@/routers/adminSideBarRoutes";
import { driverSideBarRoutes } from "@/routers/driverSideBarRoutes";
import { riderSideBarRoutes } from "@/routers/riderSideBarRoutes";
import type { TRole } from "@/types";
import { getApproveDriverSidebar } from "./getApproveDriversSidebar";


export const getSidebarItems = (userRole: TRole, approveStatus: string| null) =>{
    switch (userRole) {
        case Role.ADMIN:
            return [...adminSideBarRoutes]
        case Role.RIDER:
            return [...riderSideBarRoutes]
        case Role.DRIVER:
            return [...driverSideBarRoutes, ...getApproveDriverSidebar(approveStatus)];
        default :
            return []
            
    }

}