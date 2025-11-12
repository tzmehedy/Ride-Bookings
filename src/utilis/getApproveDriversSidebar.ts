import { approveDriverRoutes } from "@/routers/approveDriverRoutes"


export const getApproveDriverSidebar = (approveStatus: string | null) => {

    if (approveStatus === "Accept") return approveDriverRoutes

    return []
}