import Analytics from "@/pages/Dashboard/AdminPage/Analytics";
import ManageUser from "@/pages/Dashboard/AdminPage/ManageUser";
import ApproveDriver from "@/pages/Dashboard/AdminPage/ApproveDriver";
import type { ISidebarItems } from "@/types";
import ManageAllRidesForAdmin from "@/pages/Dashboard/AdminPage/ManageAllRidesForAdmin";
import UpdateProfileInfo from "@/pages/Dashboard/AdminPage/UpdateProfileInfo";

export const adminSideBarRoutes: ISidebarItems[] = [
  {
    title: "Dashboard",
    items: [
      {
        title: "Analytics",
        url: "/admin/analytics",
        component: Analytics
      },
    ],
  },
  {
    title: "Management",
    items: [
      {
        title: "Manage User",
        url: "/admin/manage-user",
        component: ManageUser
      },
      {
        title: "Manage All Rides",
        url: "/admin/all-rides",
        component: ManageAllRidesForAdmin

      },
      {
        title: "Drivers Application",
        url: "/admin/drivers-application",
        component: ApproveDriver
      },
    ],
  },
  {
    title: "Manage Profile",
    items: [
      {
        title: "Profile",
        url: "/admin/update-profile",
        component: UpdateProfileInfo
      },
    ],
  },
]