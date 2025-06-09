import React, { Suspense } from "react";
import ServiceToDoPromise from "./ServiceToDoPromise";
import { myServiceToDoPromise } from "../Api/ServiceToDoAPi";
import ContextHook from "../Hooks/ContextHook";
import Loader from "../Shared/Loader";
import useTitle from "../Hooks/useTitle";
import Navbar from "../Shared/Navbar";

const ServiceToDo = () => {
  useTitle("Service To Do");
  const { user } = ContextHook();
  return (
    <div className="max-w-7xl mx-auto relative">
      <div className="z-10 h-24 w-full max-w-7xl mx-auto inset-0 fixed">
        <Navbar></Navbar>
      </div>
      <div className="md:mt-30 my-20">
        <Suspense fallback={<Loader></Loader>}>
          <ServiceToDoPromise
            myServiceToDoPromise={myServiceToDoPromise(
              user?.email,
              user?.accessToken
            )}
          ></ServiceToDoPromise>
        </Suspense>
      </div>
    </div>
  );
};

export default ServiceToDo;
