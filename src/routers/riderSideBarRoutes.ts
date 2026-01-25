
import MyRideHistory from "@/pages/Dashboard/RiderPage/MyRideHistory";
import UpdateProfile from "@/pages/Dashboard/RiderPage/UpdateProfile";
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
  },
  {
    title: "Profile Management",
    items: [
      {
        title: "Profile",
        url: "/rider/update-profile",
        component: UpdateProfile
      }
    ],
  }
]