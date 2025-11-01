
import MyRideHistory from "@/pages/RiderPage/MyRideHistory";
import type { ISidebarItems } from "@/types";

export const riderSideBarRoutes: ISidebarItems[] = [
  {
    title: "Dashboard",
    items: [
      {
        title: "My Rides History",
        url: "/rider/ride-history",
        component: MyRideHistory
      }
    ],
  }
]