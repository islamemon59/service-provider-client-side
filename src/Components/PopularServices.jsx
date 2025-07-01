import { Link } from "react-router";

const PopularServices = ({ service }) => {
  const { _id, name, price, imageUrl } = service;

  return (
    <div className="card w-full bg-base-100 shadow-xl mb-6 border border-base-300 hover:border-secondary hover:scale-105 transition duration-500">
      <figure>
        <img
          src={imageUrl}
          alt={name}
          className="h-48 md:h-60 w-full object-cover"
        />
      </figure>

      {/* Use flex-col to push button to bottom */}
      <div className="card-body flex flex-col">
        <h2 className="card-title text-sm md:text-base lg:text-lg font-semibold md:font-bold mb-2">
          {name}
          <div className="badge badge-primary text-base-content">৳{price}</div>
        </h2>

        {/* Spacer to push button down */}
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
    </div>
  );
};

export default PopularServices;
