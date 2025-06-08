import React, { Suspense } from "react";
import ContextHook from "../Hooks/ContextHook";
import MyAllBookedServices from "./MyAllBookedServices";
import { myBookedServicesPromise } from "../Api/MyBookedApi";
import Loader from "../Shared/Loader";
import useTitle from "../Hooks/useTitle";

const BookedServices = () => {
  useTitle("Booked Services")
  const { user } = ContextHook();
  return (
    <div className="max-w-7xl mx-auto">
      <Suspense fallback={<Loader></Loader>}>
        <MyAllBookedServices
          myBookedServicesPromise={myBookedServicesPromise(user?.email, user?.accessToken)}
        ></MyAllBookedServices>
      </Suspense>
    </div>
  );
};

export default BookedServices;
