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
import ManageMyServices from "../Pages/ManageMyServices";
import UpdateServices from "../Pages/UpdateServices";
import BookedServices from "../Pages/BookedServices";
import ServiceToDo from "../Pages/ServiceToDo";
import AboutUs from "../Pages/AboutUs/AboutUs";
import Contact from "../Pages/Contact/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        hydrateFallbackElement: <Loader></Loader>,
        loader: () =>
          fetch(
            "https://service-provider-server-iota.vercel.app/popularServices"
          ),
        Component: Home,
      },
      {
        path: "/services",
        Component: AllServices,
      },
      {
        path: "/aboutUs",
        Component: AboutUs,
      },
      {
        path: "/contact",
        Component: Contact,
      },
      {
        path: "/serviceDetails/:id",
        element: (
          <PrivetRoute>
            <ServiceDetails></ServiceDetails>
          </PrivetRoute>
        ),
      },
      {
        path: "/bookedServices/:id",
        element: (
          <PrivetRoute>
            <MyBookedServices></MyBookedServices>
          </PrivetRoute>
        ),
      },
      {
        path: "/manageService",
        element: (
          <PrivetRoute>
            <ManageMyServices></ManageMyServices>
          </PrivetRoute>
        ),
      },
      {
        path: "/updateServices/:id",
        element: (
          <PrivetRoute>
            <UpdateServices></UpdateServices>
          </PrivetRoute>
        ),
      },
      {
        path: "/myBooking",
        element: (
          <PrivetRoute>
            <BookedServices></BookedServices>
          </PrivetRoute>
        ),
      },
      {
        path: "/serviceToDo",
        element: (
          <PrivetRoute>
            <ServiceToDo></ServiceToDo>
          </PrivetRoute>
        ),
      },
      {
        path: "/addServices",
        element: (
          <PrivetRoute>
            <AddService></AddService>
          </PrivetRoute>
        ),
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
