/* eslint-disable no-unused-vars */
import React, { use, useState } from "react";
import ShowMyBookedServices from "./ShowMyBookedServices";
import noData from "../assets/noData.json";
import Lottie from "lottie-react";

const MyAllBookedServices = ({ services }) => {
  if (services.length == 0) {
    return (
      <div className="mt-10 flex justify-center items-center flex-col">
        <h1 className="text-center md:text-5xl font-bold text-4xl py-6 text-error">
          You haven't booked any services
        </h1>
        <Lottie style={{ width: "250px" }} animationData={noData}></Lottie>
      </div>
    );
  }

  return (
    <div>
      <div>
        <h1 className=" text-3xl md:text-5xl text-primary font-bold text-center px-4 mt-10 pt-6">
          All booked services are here
        </h1>
        <div className="divider max-w-3xl mx-auto"></div>
        <div className="mt-20 grid md:grid-cols-2 grid-cols-1 gap-8">
          {services.map((service) => (
            <ShowMyBookedServices
              key={service._id}
              service={service}
            ></ShowMyBookedServices>
          ))}
        </div>
        <div className="divider"></div>
      </div>
    </div>
  );
};

export default MyAllBookedServices;
