// import DriverApplication from "@/pages/Dashboard/DriverPage/DriverApplication";

import AllRideRequests from "@/pages/Dashboard/DriverPage/AllRideRequests";



export const approveDriverRoutes = [
    {
        title: "Ride Management",
        items: [
            {
                title: "All Ride Requests",
                url: "/driver/all-ride-requests",
                component: AllRideRequests
            },

        ],
    }

]