import { Role } from "@/constants/role";
import { adminSideBarRoutes } from "@/routers/adminSideBarRoutes";
import { driverSideBarRoutes } from "@/routers/driverSideBarRoutes";
import { riderSideBarRoutes } from "@/routers/riderSideBarRoutes";
import type { TRole } from "@/types";

export const getSidebarItems = (userRole: TRole) =>{
    switch (userRole) {
        case Role.ADMIN:
            return [...adminSideBarRoutes]
        case Role.RIDER:
            return [...riderSideBarRoutes]
        case Role.DRIVER:
            return [...driverSideBarRoutes];
        default :
            return []
            
    }

}