import React from "react";
import ContextHook from "../Hooks/ContextHook";
import axios from "axios";
import Swal from "sweetalert2";
import useTitle from "../Hooks/useTitle";
import Navbar from "../Shared/Navbar";

const AddService = () => {
  useTitle("Add Service");
  const { user } = ContextHook();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const newService = Object.fromEntries(formData.entries());
    newService.providerName = user?.displayName;
    newService.providerEmail = user?.email;
    newService.providerImage = user?.photoURL;

    axios.post("https://service-provider-server-iota.vercel.app/addService", newService).then((res) => {
      if (res.data.insertedId) {
        Swal.fire({
          title: "Service Added Successfully",
          icon: "success",
          draggable: true,
        });
      }
    });
  };

  return (
    <div className="relative">
      <div className="z-10 h-24 w-full max-w-7xl mx-auto inset-0 fixed">
        <Navbar></Navbar>
      </div>
      <div className="max-w-md mx-auto md:mt-36 mt-20 p-6 bg-base-100 shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl">
        <h2 className="text-3xl font-bold text-center mb-6">Add New Service</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <label className="label text-xs">ImageURL</label>
          <input
            type="text"
            name="imageUrl"
            placeholder="Image URL of the Service"
            className="input input-bordered w-full"
            required
          />
          <label className="label text-xs">Service Name</label>
          <input
            type="text"
            name="name"
            placeholder="Service Name"
            className="input input-bordered w-full"
            required
          />
          <label className="label text-xs">Service Price</label>
          <input
            type="number"
            name="price"
            placeholder="Price"
            className="input input-bordered w-full"
            required
          />
          <label className="label text-xs">Service Location</label>
          <input
            type="text"
            name="area"
            placeholder="Service Area"
            className="input input-bordered w-full"
            required
          />
          <label className="label text-xs">Service Description</label>
          <textarea
            name="description"
            placeholder="Description"
            className="textarea textarea-bordered w-full"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary w-full">
            Add Service
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddService;
