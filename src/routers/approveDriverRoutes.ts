// import DriverApplication from "@/pages/Dashboard/DriverPage/DriverApplication";

import AllRideRequests from "@/pages/Dashboard/DriverPage/AllRideRequests";
import ManageAllRides from "@/pages/Dashboard/DriverPage/ManageAllRides";



export const approveDriverRoutes = [
    {
        title: "Ride Management",
        items: [
            {
                title: "All Ride Requests",
                url: "/driver/all-ride-requests",
                component: AllRideRequests
            },
            {
                title: "Manage All Rides",
                url: "/driver/all-rides",
                component: ManageAllRides
            },

        ],
    }

]