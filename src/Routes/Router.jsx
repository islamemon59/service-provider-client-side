import { createBrowserRouter } from "react-router";
import Root from "../Layout/Root";
import Home from "../Pages/Home";
import SignIn from "../Pages/SignIn";
import Register from "../Pages/Register";
import ErrorPage from "../Shared/ErrorPage";
import AddService from "../Pages/AddService";

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
                path: '/addServices',
                Component: AddService,
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