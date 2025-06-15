import React, { Suspense, useEffect, useState } from "react";
import ContextHook from "../Hooks/ContextHook";
import MyAllBookedServices from "./MyAllBookedServices";
import Loader from "../Shared/Loader";
import useTitle from "../Hooks/useTitle";
import Navbar from "../Shared/Navbar";
import UseAxiosSecure from "../Hooks/UseAxiosSecure";

const BookedServices = () => {
  useTitle("Booked Services");
  const { user } = ContextHook();
  const axiosSecure = UseAxiosSecure();
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axiosSecure.get(`bookingServices?email=${user?.email}`).then((res) => {
      setLoading(false);
      setServices(res?.data);
    });
  }, [axiosSecure, user]);

  if (loading) {
    return <Loader></Loader>;
  }

  return (
    <div className="max-w-7xl mx-auto relative">
      <div className="z-10 h-24 w-full max-w-7xl mx-auto inset-0 fixed">
        <Navbar></Navbar>
      </div>
      <div className="md:mt-30 my-20">
        <Suspense fallback={<Loader></Loader>}>
          <MyAllBookedServices services={services}></MyAllBookedServices>
        </Suspense>
      </div>
    </div>
  );
};

export default BookedServices;
