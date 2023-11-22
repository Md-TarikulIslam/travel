import { createBrowserRouter } from "react-router-dom";
import Main from "./Main";
import Homepage from "../pages/Homepage";
import LoginPage from "../pages/LoginPage";
import DestinationPage from "../pages/DestinationPage";
import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";
import GalleryPage from "../pages/GalleryPage";
import DashboardPage from "../pages/DashboardPage";
import SubMain from "./SubMain";
import DashProfile from "../components/DashProfile";
import DashTransaction from "../components/DashTransaction";
import CardDetailsPage from "../pages/CardDetailsPage";
import DashUsers from "../components/DashUsers";
import PaymentSuccesspage from "../pages/PaymentSuccessPage";
import PaymentCancelPage from "../pages/PaymentCancelPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Homepage />,
            },
            {
                path: "/login",
                element: <LoginPage />,
            },
            {
                path: "/about",
                element: <AboutPage />,
            },
            {
                path: "/destination",
                element: <DestinationPage />,
            },
            {
                path: "/destination/:id",
                element: <CardDetailsPage />,
            },
            {
                path: "/gallery",
                element: <GalleryPage />,
            },
            {
                path: "/contact",
                element: <ContactPage />,
            },
            {
                path: "/success",
                element: <PaymentSuccesspage />,
            },
            {
                path: "/cancel",
                element: <PaymentCancelPage />,
            },
            {
                path: "/dashboard",
                element: <SubMain />,
                children: [
                    {
                        path: "/dashboard/profile",
                        element: <DashProfile />,
                    },
                    {
                        path: "/dashboard/transaction",
                        element: <DashTransaction />,
                    },
                    {
                        path: "/dashboard/users",
                        element: <DashUsers />,
                    },
                ],
            },
        ],
    },
]);
export default router;
