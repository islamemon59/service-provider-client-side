import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import ContextHook from "../Hooks/ContextHook";
import Swal from "sweetalert2";
import Navbar from "../Shared/Navbar";
import UseAxiosSecure from "../Hooks/UseAxiosSecure";
import useTitle from "../Hooks/useTitle";

const UpdateServices = () => {
  useTitle("Update Service");
  const navigate = useNavigate();
  const { user } = ContextHook();
  const axiosSecure = UseAxiosSecure();
  const { id } = useParams();
  const [service, setService] = useState({});

  useEffect(() => {
    axiosSecure.get(`services/${id}`).then((res) => {
      setService(res.data);
    });
  }, [axiosSecure, id]);

  const { _id, imageUrl, name, price, area, description } = service;

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const updateService = Object.fromEntries(formData.entries());
    updateService.providerName = user?.displayName;
    updateService.providerEmail = user?.email;
    updateService.providerImage = user?.photoURL;

    axiosSecure
      .put(
        `https://service-provider-server-iota.vercel.app/addService/${_id}`,
        updateService
      )
      .then((res) => {
        if (res.data.modifiedCount) {
          Swal.fire({
            title: "Service Updated Successfully",
            icon: "success",
            draggable: true,
          });
          navigate("/manageService");
        }
      });
  };

  return (
    <div>
      <div className="max-w-md mx-auto mt-24 p-6 bg-base-100 shadow-xl rounded-2xl">
        <h2 className="text-4xl font-bold text-center text-primary mb-6">
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
