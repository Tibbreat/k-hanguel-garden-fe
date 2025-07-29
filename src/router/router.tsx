import { createBrowserRouter } from "react-router-dom";
import Landing from "../pages/landing/Landing";
import NotFound from "../pages/error/404";
import LoginPage from "../pages/auth/Login";
import Signup from "../pages/auth/Signup";
import HomeLanding from "../pages/landing/HomeLanding";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Landing />,
        children: [
            {
                path: "/",
                element: <HomeLanding />,
            },
            {
                path: "/auth/login",
                element: <LoginPage />,
            },
            {
                path: "/auth/signup",
                element: <Signup />,
            },

            // Add other auth routes here as needed
        ],
    },

    {
        path: "*",
        element: <NotFound />,
    }
]);

export default router;