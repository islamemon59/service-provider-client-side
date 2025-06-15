import React, { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import UseAxiosSecure from "../Hooks/UseAxiosSecure";

const ServiceToDoCard = ({ service }) => {
  const {
    _id,
    date,
    image,
    instruction,
    name,
    price,
    providerEmail,
    providerName,
    serviceStatus,
    userEmail,
    userName,
  } = service;
  const axiosSecure = UseAxiosSecure();

  const [status, setStatus] = useState(serviceStatus);
  const [dropdown, setDropdown] = useState(false);

  const handleStatus = (Working) => {
    axiosSecure
      .patch(`https://service-provider-server-iota.vercel.app/status/${_id}`, {
        serviceStatus: Working,
      })
      .then((res) => {
        if (res.data.modifiedCount) {
          setStatus(Working);
        }
      });
  };

  const handleDropdown = () => {
    setDropdown(!dropdown);
  };

  return (
    <div className="w-full mx-auto my-6">
      <div className="card bg-gradient-to-br h-full from-base-100 to-base-200/50 shadow-xl border border-base-300 hover:shadow-2xl transition duration-300">
        <figure className="px-4 pt-4">
          <img
            src={image}
            alt="AC Service"
            className="rounded-xl h-52 object-cover w-full"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-xl font-bold text-blue-800">{name}</h2>

          <div className="text-sm text-gray-600">
            <p>
              <span className="font-semibold">Date:</span> {date}
            </p>
            <p>
              <span className="font-semibold">Price:</span> ৳{price}
            </p>
            <span className="font-semibold">
              <div onClick={handleDropdown} className="dropdown">
                <div
                  tabIndex={0}
                  role="button"
                  className="m-1 btn rounded-full"
                >
                  Status{" "}
                  <span
                    className={`${
                      dropdown ? "rotate-180" : "rotate-0"
                    } transition duration-300`}
                  >
                    <RiArrowDropDownLine size={20} />
                  </span>
                </div>
                <ul
                  tabIndex={0}
                  className="dropdown-content menu text-base-content bg-base-100 rounded-box z-1 w-32 p-2 shadow-sm"
                >
                  <li onClick={() => handleStatus("Pending")}>
                    <a>Pending</a>
                  </li>
                  <li onClick={() => handleStatus("Working")}>
                    <a>Working</a>
                  </li>
                  <li onClick={() => handleStatus("Completed")}>
                    <a>Completed</a>
                  </li>
                </ul>
              </div>
            </span>
            <span className="badge badge-warning text-xs">{status}</span>
          </div>

          <div className="divider my-2"></div>

          <div className="text-sm">
            <p>
              <span className="font-semibold">Customer:</span> {userName}
            </p>
            <p>
              <span className="font-semibold">Email:</span>
              {userEmail}
            </p>
          </div>

          <div className="text-sm mt-2">
            <p>
              <span className="font-semibold">Provider:</span> {providerName}
            </p>
            <p>
              <span className="font-semibold">Provider Email:</span>
              {providerEmail}
            </p>
          </div>

          <div className="mt-3 bg-base-200 p-2 rounded-md text-sm">
            <p>
              <span className="font-semibold">Instruction:</span>
            </p>
            <p>{instruction}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceToDoCard;
