import React from "react";
import { useLoaderData, useNavigate } from "react-router";
import ContextHook from "../Hooks/ContextHook";
import axios from "axios";
import Swal from "sweetalert2";
import Navbar from "../Shared/Navbar";

const UpdateServices = () => {
  const service = useLoaderData();
  const navigate = useNavigate()
  const { user } = ContextHook();
  const { _id, imageUrl, name, price, area, description } = service;

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const updateService = Object.fromEntries(formData.entries());
    updateService.providerName = user?.displayName;
    updateService.providerEmail = user?.email;
    updateService.providerImage = user?.photoURL;

    axios
      .put(`http://localhost:3000/addService/${_id}`, updateService)
      .then((res) => {
        if (res.data.modifiedCount) {
          Swal.fire({
            title: "Service Updated Successfully",
            icon: "success",
            draggable: true,
          });
          navigate("/manageService")
        }
      });
  };

  return (
    <div>
      <div className="z-10 h-24 w-full max-w-7xl mx-auto inset-0 fixed">
        <Navbar></Navbar>
      </div>
      <div className="max-w-md mx-auto mt-36 p-6 bg-base-100 shadow-xl rounded-2xl">
        <h2 className="text-3xl font-bold text-center mb-6">
          Update Your Service
        </h2>
        <form onSubmit={handleUpdate} className="flex flex-col gap-4">
          <label className="label text-xs">ImageURL</label>
          <input
            type="text"
            name="imageUrl"
            placeholder="Image URL of the Service"
            className="input input-bordered w-full"
            defaultValue={imageUrl}
            required
          />
          <label className="label text-xs">Service Name</label>
          <input
            type="text"
            name="name"
            placeholder="Service Name"
            className="input input-bordered w-full"
            defaultValue={name}
            required
          />
          <label className="label text-xs">Service Price</label>
          <input
            type="number"
            name="price"
            placeholder="Price"
            className="input input-bordered w-full"
            defaultValue={price}
            required
          />
          <label className="label text-xs">Service Location</label>
          <input
            type="text"
            name="area"
            placeholder="Service Area"
            className="input input-bordered w-full"
            defaultValue={area}
            required
          />
          <label className="label text-xs">Service Description</label>
          <textarea
            name="description"
            placeholder="Description"
            className="textarea textarea-bordered w-full"
            defaultValue={description}
            required
          ></textarea>
          <button type="submit" className="btn btn-primary w-full">
            Update Service
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateServices;
