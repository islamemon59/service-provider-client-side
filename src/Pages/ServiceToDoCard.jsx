import React, { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import UseAxiosSecure from "../Hooks/UseAxiosSecure";

const ServiceToDoCard = ({ service }) => {
  const {
    _id,
    date,
    image,
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

  const handleStatusChange = (newStatus) => {
    axiosSecure
      .patch(`https://service-provider-server-iota.vercel.app/status/${_id}`, {
        serviceStatus: newStatus,
      })
      .then((res) => {
        if (res.data.modifiedCount) {
          setStatus(newStatus);
        }
      });
  };

  return (
    <tr>
      <td>
        <img
          src={image}
          alt={name}
          className="w-20 h-16 object-cover rounded"
        />
      </td>
      <td className="font-semibold">{name}</td>
      <td>{date}</td>
      <td>৳{price}</td>
      <td>
        <div className="flex items-center gap-2">
          {/* Dropdown */}
          <div className="dropdown dropdown-bottom">
            <label tabIndex={0} className="btn btn-xs btn-outline flex items-center gap-1 cursor-pointer">
              Status <RiArrowDropDownLine size={18} />
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-28 z-[100]"
            >
              <li>
                <button onClick={() => handleStatusChange("Pending")}>Pending</button>
              </li>
              <li>
                <button onClick={() => handleStatusChange("Working")}>Working</button>
              </li>
              <li>
                <button onClick={() => handleStatusChange("Completed")}>Completed</button>
              </li>
            </ul>
          </div>
          {/* Current status badge */}
          <span className="badge badge-warning text-xs capitalize">{status}</span>
        </div>
      </td>
      <td>
        <div className="text-xs">
          <p className="font-semibold">{userName}</p>
          <p className="opacity-70 break-all">{userEmail}</p>
        </div>
      </td>
      <td>
        <div className="text-xs">
          <p className="font-semibold">{providerName}</p>
          <p className="opacity-70 break-all">{providerEmail}</p>
        </div>
      </td>
    </tr>
  );
};

export default ServiceToDoCard;
