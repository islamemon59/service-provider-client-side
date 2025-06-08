import React from "react";
import { Link, useLoaderData } from "react-router";
import useTitle from "../Hooks/useTitle";
import Navbar from "../Shared/Navbar";

const ServiceDetails = () => {
  useTitle("Service Details");
  const service = useLoaderData();
  const {
    _id,
    area,
    description,
    imageUrl,
    name,
    price,
    providerEmail,
    providerImage,
    providerName,
  } = service;
  return (
    <div className="relative">
      <div className="z-10 h-24 w-full max-w-7xl mx-auto inset-0 fixed">
        <Navbar></Navbar>
      </div>
      <div className="flex flex-col md:flex-row gap-6 items-start p-6 bg-base-100 rounded-xl shadow-lg mt-40 my-10 max-w-7xl mx-auto">
        <div className="md:w-1/2 w-full overflow-hidden rounded-xl">
          <img
            src={imageUrl}
            alt="AC Service"
            className="w-full h-full object-cover transition-transform duration-600 hover:scale-110 rounded-xl"
          />
        </div>

        <div className="md:w-1/2 w-full flex flex-col justify-between space-y-6">
          <div className="flex items-center justify-end gap-4">
            <img
              src={providerImage}
              alt="Provider"
              className="w-12 h-12 rounded-full border-2 border-primary hover:border-info"
            />
            <div className="text-right border-1 p-2 rounded-md border-base-200 hover:border-base-300">
              <p className="font-semibold text-base-content">{providerName}</p>
              <p className="text-sm text-base-content opacity-70">
                {providerEmail}
              </p>
              <p className="text-base-content">
                <span className="font-semibold">Location:</span> {area}
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-primary">{name}</h2>
            <span className="bg-primary p-1 rounded-md text-base-100">
              <span className="font-semibold">Price:</span> ৳ {price}
            </span>

            <div>
              <h3 className="text-lg font-semibold text-primary">
                Service Description
              </h3>
              <p className="text-base-content">{description}</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-primary">
                Service Provider
              </h3>
              <div className="flex items-center gap-4 mt-2">
                <img
                  src={providerImage}
                  alt="Provider"
                  className="w-10 h-10 rounded-full  border-2 border-primary hover:border-info"
                />
                <div>
                  <p className="text-base-content font-medium">
                    {providerName}
                  </p>
                  <p className="text-sm text-base-content opacity-70">
                    {providerEmail}
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <Link
                to={`/bookedServices/${_id}`}
                className="btn btn-primary px-6 py-2 rounded-full shadow-lg hover:scale-105 transition-transform duration-600"
              >
                Book Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
