import React from "react";
import { Link } from "react-router";

const ServiceCard = ({ service }) => {
  const {
    _id,
    area,
    description,
    imageUrl,
    name,
    price,
    providerImage,
    providerName,
  } = service;
  return (
    <div className="card w-full bg-base-100 shadow-xl mb-10 border-1 border-base-300 hover:border-secondary hover:scale-105 transition duration-600">
      <figure>
        <img
          src={imageUrl}
          alt="Home Clean"
          className="h-48 md:h-60 w-full object-cover hover:scale-110 transition duration-600"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-base md:text-2xl font-bold">
          {name}
          <div className="badge badge-primary text-white">৳{price}</div>
        </h2>

        <p className="text-sm text-base-content">{description}</p>

        <div className="text-sm text-base-content">
          <span className="font-semibold">Area:</span> {area}
        </div>

        <div className="flex items-center gap-3 mt-4">
          <img
            src={providerImage}
            alt="Provider"
            className="w-10 h-10 rounded-full"
          />
          <div>
            <p className="text-sm font-semibold">{providerName}</p>
          </div>
        </div>

        <div className="card-actions mt-4">
          <Link
            onClick={() => {
              scrollTo(0, 0)
            }}
            to={`/serviceDetails/${_id}`}
            className="btn btn-primary btn-soft btn-sm w-full"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
