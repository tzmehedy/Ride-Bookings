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
import RideRequest from "@/pages/Dashboard/RiderPage/RideRequest";
import AllRideRequests from "@/pages/Dashboard/DriverPage/AllRideRequests";
import { withApprove } from "@/utilis/withApprove";
import ManageAllRides from "@/pages/Dashboard/DriverPage/ManageAllRides";
import Success from "@/pages/Payment/Success";
import MyRideHistory from "@/pages/Dashboard/RiderPage/MyRideHistory";
import Fail from "@/pages/Payment/Fail";
import Cancel from "@/pages/Payment/Cancel";
import EarningHistory from "@/pages/Dashboard/DriverPage/EarningHistory";



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
      {
        Component: RideRequest,
        path: "/ride-request",
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
    children: [{
      index: true,
      Component: MyRideHistory

    }, ...generateRoutes(riderSideBarRoutes),
    {
      Component: RideRequest,
      path: "ride-request",
    }
    ],
  },
  {
    Component: withAuth(DashboardLayout, Role.DRIVER as TRole),
    path: "/driver",
    children: [
      {
        index: true,
        Component: EarningHistory 

      }, ...generateRoutes([...driverSideBarRoutes]),
      {
        Component: withApprove(AllRideRequests),
        path: "all-ride-requests"
      },
      {
        Component: withApprove(ManageAllRides),
        path: "all-rides"
      }
    ],
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
  {
    Component: Success,
    path: "/payment/success"
  },
  {
    Component: Fail,
    path: "/payment/failed"
  },
  {
    Component: Cancel,
    path: "/payment/cancel"
  }
]);
