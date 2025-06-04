import { createBrowserRouter } from "react-router";
import Root from "../Layout/Root";
import Home from "../Pages/Home";
import SignIn from "../Pages/SignIn";
import Register from "../Pages/Register";
import ErrorPage from "../Shared/ErrorPage";
import AddService from "../Pages/AddService";
import AllServices from "../Pages/AllServices";
import Loader from "../Shared/Loader";
import ServiceDetails from "../Pages/ServiceDetails";
import PrivetRoute from "../Private/PrivetRoute";
import MyBookedServices from "../Pages/MyBookedServices";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/services",
        hydrateFallbackElement: <Loader></Loader>,
        loader: () => fetch("http://localhost:3000/allServices"),
        Component: AllServices,
      },
      {
        path: "/serviceDetails/:id",
        hydrateFallbackElement: <Loader></Loader>,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/services/${params.id}`),
        element: (
          <PrivetRoute>
            <ServiceDetails></ServiceDetails>
          </PrivetRoute>
        ),
      },
      {
        path: "/serviceDetails/:id",
        hydrateFallbackElement: <Loader></Loader>,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/services/${params.id}`),
        element: (
          <PrivetRoute>
            <ServiceDetails></ServiceDetails>
          </PrivetRoute>
        ),
      },
      {
        path: "/bookedServices/:id",
        hydrateFallbackElement: <Loader></Loader>,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/services/${params.id}`),
        element: (
          <PrivetRoute>
            <MyBookedServices></MyBookedServices>
          </PrivetRoute>
        ),
      },
      {
        path: "/addServices",
        Component: AddService,
      },
      {
        path: "/signIn",
        Component: SignIn,
      },
      {
        path: "/register",
        Component: Register,
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage></ErrorPage>,
  },
]);
