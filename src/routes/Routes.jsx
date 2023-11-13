import { createBrowserRouter } from "react-router-dom";
import Main from "./Main";
import Homepage from "../pages/Homepage";
import LoginPage from "../pages/LoginPage";

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
            }
        ]
    }
])
export default router