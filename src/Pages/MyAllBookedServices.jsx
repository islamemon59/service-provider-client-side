/* eslint-disable no-unused-vars */
import React, { use, useState } from "react";
import ShowMyBookedServices from "./ShowMyBookedServices";
import noData from "../assets/noData.json";
import Lottie from "lottie-react";
import Navbar from "../Shared/Navbar";

const MyAllBookedServices = ({ myBookedServicesPromise }) => {
  const initialServices = use(myBookedServicesPromise);
  const [services, setServices] = useState(initialServices);
  console.log(services);
  return (
    <div>
      <Navbar></Navbar>
      {services.length == 0 ? (
        <div className="mt-10 flex justify-center items-center flex-col">
          <h1 className="text-center md:text-5xl font-bold text-4xl py-6 text-error">
            You haven't booked any services
          </h1>
          <Lottie style={{ width: "250px" }} animationData={noData}></Lottie>
        </div>
      ) : (
        <div>
          <h1 className=" text-3xl md:text-5xl text-primary font-bold text-center px-4 my-10 py-6">
            All booked services are here
          </h1>
          <div>
            {services.map((service) => (
              <ShowMyBookedServices
                key={service._id}
                service={service}
              ></ShowMyBookedServices>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MyAllBookedServices;
