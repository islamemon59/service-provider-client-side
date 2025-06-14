import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import ContextHook from "../Hooks/ContextHook";
import axios from "axios";
import Swal from "sweetalert2";
import useTitle from "../Hooks/useTitle";
import Navbar from "../Shared/Navbar";
import UseAxiosSecure from "../Hooks/UseAxiosSecure";

const MyBookedServices = () => {
  useTitle("Purchase Service");
  const navigate = useNavigate();
  const { user } = ContextHook();
  const axiosSecure = UseAxiosSecure()
  const {id} = useParams()
  const [service, setService] = useState({})


  useEffect(() => {
    axiosSecure.get(`services/${id}`)
    .then(res => {
      setService(res.data)
    })
  }, [axiosSecure, id])


  const { _id, imageUrl, name, price, providerEmail, providerName } = service;

  const handlePurchase = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const serviceData = Object.fromEntries(formData.entries());
    serviceData.serviceStatus = "pending";

    axios.post("https://service-provider-server-iota.vercel.app/booking", serviceData).then((res) => {
      if (res.data.insertedId) {
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "Service Purchase Successful",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/myBooking");
      }
    });
  };

  return (
    <div className="relative max-w-7xl mx-auto">
      <div className="z-10 h-24 w-full max-w-7xl mx-auto inset-0 fixed">
        <Navbar></Navbar>
      </div>
      <div className="w-full mx-auto mt-30 p-6 bg-base-100 shadow-xl rounded-2xl">
        <h2 className="text-3xl font-bold text-center mb-6">
          Purchase Service
        </h2>
        <form onSubmit={handlePurchase} className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="label">ServiceId</label>
            <input
              type="text"
              name="id"
              placeholder="ServiceId"
              className="input input-bordered w-full"
              value={_id}
              required
            />
          </div>
          <div>
            <label className="label">Service Name</label>
            <input
              type="text"
              name="name"
              placeholder="Service Name"
              className="input input-bordered w-full"
              value={name}
              required
            />
          </div>
          <div>
            <label className="label">Service Image</label>
            <input
              type="text"
              name="image"
              placeholder="Service Image"
              className="input input-bordered w-full"
              value={imageUrl}
              required
            />
          </div>
          <div>
            <label className="label">Provider Email</label>
            <input
              type="email"
              name="providerEmail"
              placeholder="Provider email"
              className="input input-bordered w-full"
              value={providerEmail}
              required
            />
          </div>
          <div>
            <label className="label">Provider Name</label>
            <input
              type="text"
              name="providerName"
              placeholder="Provider Name"
              className="input input-bordered w-full"
              value={providerName}
              required
            />
          </div>
          <div>
            <label className="label">Current User email</label>
            <input
              type="email"
              name="userEmail"
              placeholder="Current User email"
              className="input input-bordered w-full"
              value={user?.email}
              required
            />
          </div>
          <div>
            <label className="label">Current User Name</label>
            <input
              type="text"
              name="userName"
              placeholder="Current User Name"
              className="input input-bordered w-full"
              value={user?.displayName}
              required
            />
          </div>
          <div>
            <label className="label">Service Taking Date</label>
            <input
              type="date"
              name="date"
              className="input input-bordered w-full"
              required
            />
          </div>
          <div>
            <textarea
              type="text"
              name="instruction"
              placeholder="Add more information"
              className="textarea textarea-bordered w-full"
              required
            ></textarea>
          </div>
          <div>
            <label className="label">Price</label>
            <input
              type="number"
              name="price"
              placeholder="Price"
              className="input input-bordered w-full"
              value={price}
              required
            />
          </div>
          <button
            onClick={() => {
              scrollTo(0, 0);
            }}
            type="submit"
            className="btn btn-primary w-full md:col-span-2"
          >
            Purchase Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default MyBookedServices;
