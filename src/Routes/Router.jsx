import { createBrowserRouter } from "react-router";
import Root from "../Layout/Root";
import Home from "../Pages/Home";
import SignIn from "../Pages/SignIn";
import Register from "../Pages/Register";
import ErrorPage from "../Shared/ErrorPage";

export const router = createBrowserRouter([
    {
        path: '/',
        Component: Root,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: '/signIn',
                Component: SignIn
            },
            {
                path: '/register',
                Component: Register
            },
        ]
    },
    {
        path: "*",
        element: <ErrorPage></ErrorPage>
    }
])