import App from "@/App";
import AboutUs from "@/pages/AboutUsPage/AboutUs";
import Home from "@/pages/Homepage/Home";
import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
    {
        Component: App,
        path: "/",
        children:[
            {
                Component: Home,
                path: "/",
            },

            {
                Component: AboutUs,
                path: "/about"
            }
        ]
    }
])

