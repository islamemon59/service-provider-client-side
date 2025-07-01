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
    price,
    serviceStatus,
  } = service;

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
        <span className="badge badge-warning capitalize">{serviceStatus}</span>
      </td>
      <td>
        <div className="text-sm">
          <p className="font-semibold">{userName}</p>
          <p className="text-xs opacity-70">{userEmail}</p>
        </div>
      </td>
      <td>
        <div className="text-sm">
          <p className="font-semibold">{providerName}</p>
          <p className="text-xs opacity-70">{providerEmail}</p>
        </div>
      </td>
    </tr>
  );
};

export default ShowMyBookedServices;
