/* eslint-disable no-unused-vars */
import { Link } from "react-router";
import { motion } from "framer-motion";

const PopularServices = ({ service }) => {
  const { _id, name, price, imageUrl } = service;

  return (
    <motion.div
      className="card w-full bg-base-100 shadow-xl mb-6 border border-base-300 hover:border-secondary transition duration-500"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05, boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.1)" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <figure>
        <img
          src={imageUrl}
          alt={name}
          className="h-48 md:h-60 w-full object-cover"
        />
      </figure>

      <div className="card-body flex flex-col">
        <h2 className="card-title text-sm md:text-base lg:text-lg font-semibold md:font-bold mb-2">
          {name}
          <div className="badge badge-primary text-base-content">৳{price}</div>
        </h2>

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

export default PopularServices;
