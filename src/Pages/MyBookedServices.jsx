import React from "react";
import { Navigate, useLoaderData, useNavigate } from "react-router";
import ContextHook from "../Hooks/ContextHook";
import axios from "axios";
import Swal from "sweetalert2";
import useTitle from "../Hooks/useTitle";

const MyBookedServices = () => {
  useTitle("Purchase Service")
  const service = useLoaderData();
  const navigate = useNavigate()
  const { user } = ContextHook();
  const { _id, imageUrl, name, price, providerEmail, providerName } = service;
  console.log(service);

  const handlePurchase = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const serviceData = Object.fromEntries(formData.entries());
    serviceData.serviceStatus = "pending";
    console.log(serviceData);

    axios.post("http://localhost:3000/booking", serviceData).then((res) => {
      if (res.data.insertedId) {
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "Service Purchase Successful",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/myBooking")
      }
    });
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-base-100 shadow-xl rounded-2xl">
      <h2 className="text-3xl font-bold text-center mb-6">Purchase Service</h2>
      <form onSubmit={handlePurchase} className="flex flex-col gap-4">
        <input
          type="text"
          name="id"
          placeholder="ServiceId"
          className="input input-bordered w-full"
          value={_id}
          required
        />
        <input
          type="text"
          name="name"
          placeholder="Service Name"
          className="input input-bordered w-full"
          value={name}
          required
        />
        <input
          type="text"
          name="image"
          placeholder="Service Image"
          className="input input-bordered w-full"
          value={imageUrl}
          required
        />
        <input
          type="email"
          name="providerEmail"
          placeholder="Provider email"
          className="input input-bordered w-full"
          value={providerEmail}
          required
        />
        <input
          type="text"
          name="providerName"
          placeholder="Provider Name"
          className="input input-bordered w-full"
          value={providerName}
          required
        ></input>
        <input
          type="email"
          name="userEmail"
          placeholder="Current User email"
          className="input input-bordered w-full"
          value={user?.email}
          required
        ></input>
        <input
          type="text"
          name="userName"
          placeholder="Current User Name"
          className="input input-bordered w-full"
          value={user?.displayName}
          required
        ></input>
        <input
          type="date"
          name="date"
          className="input input-bordered w-full"
          required
        />
        <textarea
          type="text"
          name="instruction"
          placeholder="Add more information"
          className="textarea textarea-bordered w-full"
          required
        ></textarea>
        <input
          type="number"
          name="price"
          placeholder="Price"
          className="input input-bordered w-full"
          value={price}
          required
        ></input>
        <button type="submit" className="btn btn-primary w-full">
          Purchase Now
        </button>
      </form>
    </div>
  );
};

export default MyBookedServices;
