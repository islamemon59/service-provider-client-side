/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";

const ServiceCard = ({ service }) => {
  const { _id, name, price, imageUrl } = service;

  return (
    <motion.div
      className="card h-full bg-base-100 shadow-xl border border-base-300 hover:border-secondary transition duration-500 flex flex-col"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      {/* Fixed height image */}
      <figure className="h-48 md:h-60">
        <img
          src={imageUrl}
          alt={name}
          className="w-full h-full object-cover"
        />
      </figure>

      {/* Card body fills remaining space */}
      <div className="card-body flex flex-col flex-1">
        <h2 className="card-title text-base md:text-xl font-bold">
          {name}
          <div className="badge badge-primary text-white">৳{price}</div>
        </h2>

        {/* Spacer to push button to bottom */}
        <div className="flex-grow"></div>

        <div className="card-actions mt-2">
          <Link
            onClick={() => scrollTo(0, 0)}
            to={`/serviceDetails/${_id}`}
            className="btn btn-primary btn-soft btn-sm w-full"
          >
            View Details
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
