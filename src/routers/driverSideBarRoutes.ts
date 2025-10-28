import EarningHistory from "@/pages/DriverPage/EarningHistory";
import type { ISidebarItems } from "@/types";

export const driverSideBarRoutes: ISidebarItems[] = [
  {
    title: "Dashboard",
    items: [
      {
        title: "Earnings",
        url: "/driver/earning-history",
        component: EarningHistory
      },
    ],
  },
]