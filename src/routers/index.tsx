import App from "@/App";
import DashboardLayout from "@/components/layouts/DashboardLayout";
import AboutUs from "@/pages/AboutUsPage/AboutUs";
import ContactUs from "@/pages/ContactUsPage/ContactUs";
import Faq from "@/pages/FaqPage/Faq";
import Feature from "@/pages/FeaturePage/Feature";
import Home from "@/pages/Homepage/Home";
import Login from "@/pages/LoginPage/Login";
import Register from "@/pages/RegisterPage/Register";
import { generateRoutes } from "@/utilis/generateRoutes";
import { createBrowserRouter } from "react-router";
import { adminSideBarRoutes } from "./adminSideBarRoutes";
import { riderSideBarRoutes } from "./riderSideBarRoutes";
import Unauthorized from "@/pages/Unauthorized/Unauthorized";
import { withAuth } from "@/utilis/withAuth";
import { Role } from "@/constants/role";
import type { TRole } from "@/types";
import { driverSideBarRoutes } from "./driverSideBarRoutes";

export const router = createBrowserRouter([
  {
    Component: App,
    path: "/",
    children: [
      {
        Component: Home,
        path: "/",
      },
      {
        Component: AboutUs,
        path: "about",
      },
      {
        Component: Feature,
        path: "features",
      },
      {
        Component: ContactUs,
        path: "contact",
      },
      {
        Component: Faq,
        path: "faq",
      },
    ],
  },
  {
    Component: withAuth(DashboardLayout, Role.ADMIN as TRole),
    path: "/admin",
    children: [...generateRoutes(adminSideBarRoutes)],
  },
  {
    Component: withAuth(DashboardLayout, Role.RIDER as TRole),
    path: "/rider",
    children: [...generateRoutes(riderSideBarRoutes)],
  },
  {
    Component: withAuth(DashboardLayout, Role.DRIVER as TRole),
    path: "/driver",
    children: [...generateRoutes(driverSideBarRoutes)],
  },
  {
    Component: Login,
    path: "/login",
  },
  {
    Component: Register,
    path: "/register",
  },
  {
    Component: Unauthorized,
    path: "/unauthorized",
  },
]);
