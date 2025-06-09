import React, { Suspense } from "react";
import ContextHook from "../Hooks/ContextHook";
import MyAllBookedServices from "./MyAllBookedServices";
import { myBookedServicesPromise } from "../Api/MyBookedApi";
import Loader from "../Shared/Loader";
import useTitle from "../Hooks/useTitle";
import Navbar from "../Shared/Navbar";

const BookedServices = () => {
  useTitle("Booked Services");
  const { user } = ContextHook();
  return (
    <div className="max-w-7xl mx-auto relative">
      <div className="z-10 h-24 w-full max-w-7xl mx-auto inset-0 fixed">
        <Navbar></Navbar>
      </div>
      <div className="md:mt-30 my-20">
        <Suspense fallback={<Loader></Loader>}>
          <MyAllBookedServices
            myBookedServicesPromise={myBookedServicesPromise(
              user?.email,
              user?.accessToken
            )}
          ></MyAllBookedServices>
        </Suspense>
      </div>
    </div>
  );
};

export default BookedServices;
