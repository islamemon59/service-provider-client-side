/* eslint-disable no-unused-vars */
import React from "react";
import ShowMyBookedServices from "./ShowMyBookedServices";
import noData from "../assets/noData.json";
import Lottie from "lottie-react";

const MyAllBookedServices = ({ services }) => {
  if (services.length === 0) {
    return (
      <div className="mt-10 flex justify-center items-center flex-col">
        <h1 className="text-center md:text-4xl font-bold text-3xl py-6 text-error">
          You haven't booked any services
        </h1>
        <Lottie style={{ width: "250px" }} animationData={noData}></Lottie>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 mt-26">
      <h1 className="text-3xl md:text-4xl text-primary font-bold text-center my-10">
        All Booked Services
      </h1>

      <div className="overflow-x-auto rounded-lg shadow border border-base-300">
        <table className="table table-zebra w-full">
          <thead className="bg-primary text-white">
            <tr>
              <th>Image</th>
              <th>Service Name</th>
              <th>Date</th>
              <th>Price (৳)</th>
              <th>Status</th>
              <th>User</th>
              <th>Provider</th>
            </tr>
          </thead>
          <tbody>
            {services.map((service) => (
              <ShowMyBookedServices key={service._id} service={service} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyAllBookedServices;
