
import RideHistory from "@/pages/RiderPage/RideHistory";
import type { ISidebarItems } from "@/types";

export const riderSideBarRoutes: ISidebarItems[] = [
  {
    title: "Dashboard",
    items: [
      {
        title: "History",
        url: "/rider/ride-history",
        component: RideHistory
      },
    ],
  }
]