import { createBrowserRouter } from "react-router-dom";
import Main from "./Main";
import Homepage from "../pages/Homepage";
import LoginPage from "../pages/LoginPage";
import DestinationPage from "../pages/DestinationPage";
import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";
import GalleryPage from "../pages/GalleryPage";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Homepage />
            },
            {
                path: '/login',
                element: <LoginPage />
            },
            {
                path: '/about',
                element: <AboutPage />
            },
            {
                path: '/destination',
                element: <DestinationPage />
            },
            {
                path: '/gallery',
                element: <GalleryPage />
            },
            {
                path: '/contact',
                element: <ContactPage />
            }
        ]
    }
])
export default router