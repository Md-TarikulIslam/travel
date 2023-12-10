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
import ErrorPage from "../pages/ErrorPage";
import RefundPolicy from "../components/RefundPolicy";
import  AllReviews  from "../components/AllReviews";
import Payment from "../pages/Payment";
import ResetPassword from "../pages/ResetPassword";

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
                path: "/reset-password",
                element: <ResetPassword />
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
                path: "/reviews",
                element: <AllReviews />,
            },
            {
                path: "/contact",
                element: <ContactPage />,
            },
            {
                path: "/refund-policy",
                element: <RefundPolicy />,
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
    {
        path:"/payment",
        element: <Payment />
    },
    {
        path: "/payment-success",
        element: <PaymentSuccesspage />,
    },
    {
        path: "/payment-cancel",
        element: <PaymentCancelPage />,
    },
    {
        path : '*',
        element : <ErrorPage />
    }
]);
export default router;
