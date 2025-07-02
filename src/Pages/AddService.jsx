import React from "react";
import ContextHook from "../Hooks/ContextHook";
import Swal from "sweetalert2";
import useTitle from "../Hooks/useTitle";
import Navbar from "../Shared/Navbar";
import UseAxiosSecure from "../Hooks/UseAxiosSecure";

const AddService = () => {
  useTitle("Add Service");
  const { user } = ContextHook();
  const axiosSecure = UseAxiosSecure();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const newService = Object.fromEntries(formData.entries());
    newService.providerName = user?.displayName;
    newService.providerEmail = user?.email;
    newService.providerImage = user?.photoURL;

    axiosSecure
      .post(
        "https://service-provider-server-iota.vercel.app/addService",
        newService
      )
      .then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            title: "Service Added Successfully",
            icon: "success",
            draggable: true,
          });
          form.reset();
        }
      });
  };

  return (
      <div className="max-w-md mx-auto my-10 p-6 bg-base-100 shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl">
        <h2 className="text-4xl font-bold text-center text-primary mb-6">Add New Service</h2>
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
  );
};

export default AddService;
