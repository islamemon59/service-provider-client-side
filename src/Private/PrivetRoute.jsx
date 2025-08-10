import React from "react";
import ContextHook from "../Hooks/ContextHook";
import Loader from "../Shared/Loader";
import { Navigate, useLocation } from "react-router";

const PrivetRoute = ({ children }) => {
  const { loading, user } = ContextHook()
  const location = useLocation()

  if (loading) {
    return <Loader></Loader>;
  }

  if (!user) {
    return <Navigate to="/signIn" state={location?.pathname}></Navigate>;
  }
  return children;
};

export default PrivetRoute;
