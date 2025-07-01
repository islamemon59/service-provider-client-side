import React from "react";
import { Link } from "react-router";

const ServiceCard = ({ service }) => {
  const { _id, name, price, imageUrl } = service;

  return (
    <div className="card w-full bg-base-100 shadow-xl border border-base-300 hover:border-secondary hover:scale-105 transition duration-500">
      <figure>
        <img
          src={imageUrl}
          alt={name}
          className="h-48 md:h-60 w-full object-cover"
        />
      </figure>
      <div className="card-body flex flex-col justify-between">
        <h2 className="card-title text-base md:text-xl font-bold">
          {name}
          <div className="badge badge-primary text-white">৳{price}</div>
        </h2>

        {/* Keep button at the bottom */}
        <div className="card-actions mt-auto">
          <Link
            onClick={() => scrollTo(0, 0)}
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
