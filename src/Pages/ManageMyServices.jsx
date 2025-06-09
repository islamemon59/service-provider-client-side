import React, { Suspense } from "react";
import MyServices from "./MyServices";
import { myServicesPromise } from "../Api/MyServicesApi";
import ContextHook from "../Hooks/ContextHook";
import Loader from "../Shared/Loader";
import useTitle from "../Hooks/useTitle";
import Navbar from "../Shared/Navbar";

const ManageMyServices = () => {
  useTitle("Manage Service");
  const { user } = ContextHook();
  return (
    <div className="max-w-7xl mx-auto">
      <div className="z-10 h-24 w-full max-w-7xl mx-auto inset-0 fixed">
        <Navbar></Navbar>
      </div>
      <Suspense fallback={<Loader></Loader>}>
        <div className="md:mt-30 my-20">
          <MyServices
            myServicesPromise={myServicesPromise(
              user?.email,
              user?.accessToken
            )}
          ></MyServices>
        </div>
      </Suspense>
    </div>
  );
};

export default ManageMyServices;
