import React from "react";
import { Link } from "react-router";
import { FaTrashAlt, FaEdit } from "react-icons/fa";
import Swal from "sweetalert2";
import axios from "axios";

const MyServicesCard = ({ service, services, setServices }) => {
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

  const handleDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`http://localhost:3000/manageServices/${_id}`)
          .then((res) => {
            if (res.data.deletedCount) {
              const remainingServices = services.filter(
                (service) => service._id != _id
              );
              setServices(remainingServices);
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }
          });
      }
    });
  };

  return (
    <div className="mb-20">
      <div className="flex flex-col md:flex-row gap-8 items-start p-6 bg-base-100 rounded-lg hover:shadow-xl shadow-lg my-10 hover:scale-105 transition-all duration-600 border-1 border-base-300 hover:border-1 hover:border-base-100">
        <div className="md:w-1/2 w-full overflow-hidden rounded-xl">
          <img
            src={imageUrl}
            alt="AC Service"
            className="w-full h-[550px] object-cover transition-transform duration-600 hover:scale-110 rounded-xl"
          />
        </div>

        <div className="md:w-1/2 w-full flex flex-col justify-between space-y-6">
          <div className="flex items-center justify-end gap-4">
            <img
              src={providerImage}
              alt="Provider"
              className="w-12 h-12 rounded-full border-2 border-primary hover:border-accent"
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

            <div className="pt-2 flex justify-start items-center gap-4">
              <Link
                onClick={() => {
                  scrollTo(0, 0);
                }}
                to={`/updateServices/${_id}`}
                className="btn btn-primary px-6 py-2 rounded-full shadow-lg hover:scale-105 transition-transform duration-600"
              >
                <FaEdit />
                Update
              </Link>
              <button
                onClick={handleDelete}
                className="btn btn-error px-6 py-2 rounded-full shadow-lg hover:scale-105 transition-transform duration-600"
              >
                <FaTrashAlt />
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyServicesCard;
