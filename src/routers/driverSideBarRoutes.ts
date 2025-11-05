import ApplicationStatus from "@/pages/DriverPage/ApplicationStatus";
import DriverApplication from "@/pages/DriverPage/DriverApplication";
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

  {
    title: "Manage Your Account",
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
  }
]