import React, { Suspense, useEffect, useState } from "react";
import MyServices from "./MyServices";
import ContextHook from "../Hooks/ContextHook";
import Loader from "../Shared/Loader";
import useTitle from "../Hooks/useTitle";
import Navbar from "../Shared/Navbar";
import UseAxiosSecure from "../Hooks/UseAxiosSecure";

const ManageMyServices = () => {
  useTitle("Manage Service");
  const { user } = ContextHook();
  const axiosSecure = UseAxiosSecure();
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axiosSecure.get(`myServices?email=${user?.email}`).then((res) => {
      setLoading(false);
      setServices(res.data);
    });
  }, [axiosSecure, user?.email]);

  if (loading) {
    return <Loader></Loader>;
  }

  return (
    <div className="max-w-7xl mx-auto">
      <Suspense fallback={<Loader></Loader>}>
        <div className="my-10">
          <MyServices
            setServices={setServices}
            services={services}
          ></MyServices>
        </div>
      </Suspense>
    </div>
  );
};

export default ManageMyServices;
