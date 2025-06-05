import React, { Suspense } from "react";
import ContextHook from "../Hooks/ContextHook";
import MyAllBookedServices from "./MyAllBookedServices";
import { myBookedServicesPromise } from "../Api/MyBookedApi";
import Loader from "../Shared/Loader";

const BookedServices = () => {
  const { user } = ContextHook();
  return (
    <div>
      <Suspense fallback={<Loader></Loader>}>
        <MyAllBookedServices
          myBookedServicesPromise={myBookedServicesPromise(user?.email)}
        ></MyAllBookedServices>
      </Suspense>
    </div>
  );
};

export default BookedServices;
