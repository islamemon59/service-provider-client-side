import React from "react";

const ShowMyBookedServices = ({ service }) => {
  const {
    name,
    image,
    providerEmail,
    providerName,
    userEmail,
    userName,
    date,
    instruction,
    price,
    serviceStatus,
  } = service;
  return (
    <div className="flex flex-col md:flex-row bg-base-100 shadow-xl rounded-xl overflow-hidden gap-5 mb-16">
      <div className="md:w-1/2 w-full h-64 md:h-auto">
        <img
          src={image}
          alt="Home Clean"
          className="w-full h-full object-cover transition-transform duration-600 hover:scale-110"
        />
      </div>

      <div className="md:w-1/2 w-full p-6 flex flex-col justify-between space-y-4 relative">
        <div className="absolute right-4 top-4 text-right">
          <p className="text-sm font-semibold text-primary">
            User Name: <span className="text-base-content">{userName}</span>
          </p>
          <p className="text-sm font-semibold text-primary">
            User Email: <span className="text-base-content">{userEmail}</span>
          </p>
        </div>

        <div className="space-y-3 mt-14">
          <h2 className="text-2xl font-bold text-primary">{name}</h2>

          <p className="text-base-content">
            <span className="font-semibold">Date:</span> {date}
          </p>
          <p className="text-base-content">
            <span className="font-semibold">Price:</span> ৳{price}
          </p>
          <p className="text-base-content">
            <span className="font-semibold">Status:</span>
            <span className="badge badge-warning text-sm ml-1 capitalize">
              {serviceStatus}
            </span>
          </p>

          <p className="text-base-content">
            <span className="font-semibold">Special Instruction:</span>
            {instruction}
          </p>

          <div>
            <h3 className="text-lg font-semibold text-primary">
              Provider Details
            </h3>
            <p className="text-base-content font-medium">
              Name: <span className="text-primary">{providerName}</span>
            </p>
            <p className="text-base-content font-medium">
              Email: <span className="text-primary">{providerEmail}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowMyBookedServices;
