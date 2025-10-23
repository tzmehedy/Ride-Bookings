import App from "@/App";
import AboutUs from "@/pages/AboutUsPage/AboutUs";
import Feature from "@/pages/FeaturePage/Feature";
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
                path: "about"
            },
            {
                Component: Feature,
                path: "features"
            }
        ]
    }
])

