import React from "react";
import { useLoaderData } from "react-router";

const ServiceDetails = () => {
  const service = useLoaderData();
  console.log(service);
  const {
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
    <div className="flex flex-col md:flex-row gap-6 items-start p-6 bg-base-100 rounded-xl shadow-lg my-10">
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
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-primary">{name}</h2>
          <p className="text-base-content">
            <span className="font-semibold">Price:</span> ৳{price}
          </p>
          <p className="text-base-content">
            <span className="font-semibold">Location:</span> {area}
          </p>

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
                <p className="text-base-content font-medium">{providerName}</p>
                <p className="text-sm text-base-content opacity-70">
                  {providerEmail}
                </p>
              </div>
            </div>
          </div>

          <div className="pt-2">
            <button className="btn btn-primary px-6 py-2 rounded-full shadow-lg hover:scale-105 transition-transform duration-600">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
