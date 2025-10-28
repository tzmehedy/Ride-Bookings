import Analytics from "@/pages/AdminPages/Analytics";
import ManageUser from "@/pages/AdminPages/ManageUser";
import type { ISidebarItems } from "@/types";

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
    title: "User Management",
    items: [
      {
        title: "Manage User",
        url: "/admin/manage-user",
        component: ManageUser
      },
    ],
  },
]