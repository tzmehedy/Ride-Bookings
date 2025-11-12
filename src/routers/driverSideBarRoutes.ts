import ApplicationStatus from "@/pages/Dashboard/DriverPage/ApplicationStatus";
import DriverApplication from "@/pages/Dashboard/DriverPage/DriverApplication";
import EarningHistory from "@/pages/Dashboard/DriverPage/EarningHistory";
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

  {
    title: "Manage Account",
    items: [
      {
        title: "Application For Driver",
        url: "/driver/application-for-driver",
        component: DriverApplication
      },
      {
        title: "Application Status",
        url: "/driver/application-status",
        component: ApplicationStatus
      },
    ],
  },
]