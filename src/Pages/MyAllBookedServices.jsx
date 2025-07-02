import React from "react";
import ShowMyBookedServices from "./ShowMyBookedServices";
import noData from "../assets/noData.json";
import Lottie from "lottie-react";

const MyAllBookedServices = ({ services }) => {
  if (services.length === 0) {
    return (
      <div className="mt-10 flex flex-col justify-center items-center min-h-[50vh]">
        <h1 className="text-error text-center text-3xl md:text-4xl font-bold mb-6">
          You haven't booked any services
        </h1>
        <Lottie
          style={{ width: 250, maxWidth: "100%" }}
          animationData={noData}
          loop
        />
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-2 md:px-4 mt-10">
      <h1 className="text-3xl md:text-4xl text-primary font-bold text-center my-6">
        All Booked Services
      </h1>

      {/* Make table scrollable vertically & horizontally */}
      <div className="overflow-x-auto rounded-lg border border-base-300">
        <table className="table table-xs table-pin-rows table-pin-cols">
          <thead className="bg-primary text-primary">
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
