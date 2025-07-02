import React, { Suspense, useEffect, useState } from "react";
import ServiceToDoPromise from "./ServiceToDoPromise";
import ContextHook from "../Hooks/ContextHook";
import Loader from "../Shared/Loader";
import useTitle from "../Hooks/useTitle";
import Navbar from "../Shared/Navbar";
import UseAxiosSecure from "../Hooks/UseAxiosSecure";

const ServiceToDo = () => {
  useTitle("Service To Do");
  const { user } = ContextHook();

  const axiosSecure = UseAxiosSecure();
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axiosSecure.get(`service-to-do?email=${user?.email}`).then((res) => {
      setLoading(false);
      setServices(res.data);
    });
  }, [axiosSecure, user?.email]);

  if (loading) {
    return <Loader></Loader>;
  }

  return (
    <div className="max-w-7xl mx-auto relative">
      <div className="my-10">
        <Suspense fallback={<Loader></Loader>}>
          <ServiceToDoPromise
            services={services}
          ></ServiceToDoPromise>
        </Suspense>
      </div>
    </div>
  );
};

export default ServiceToDo;
