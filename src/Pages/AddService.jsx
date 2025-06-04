import React from "react";
import ContextHook from "../Hooks/ContextHook";

const AddService = () => {

    const {user} = ContextHook()

    const handleSubmit = e => {
        e.preventDefault()
        const form = e.target
        const formData = new FormData(form)
        const newService = Object.fromEntries(formData.entries())
        newService.providerName = user?.displayName
        newService.providerEmail = user?.email
        newService.providerImage = user?.photoURL

        console.log(newService);
    }

  return (
    <div className="max-w-md mx-auto mt-20 p-6 bg-base-100 shadow-xl rounded-2xl">
      <h2 className="text-2xl font-bold text-center mb-6">Add New Service</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          name="imageUrl"
          placeholder="Image URL of the Service"
          className="input input-bordered w-full"
          required
        />
        <input
          type="text"
          name="name"
          placeholder="Service Name"
          className="input input-bordered w-full"
          required
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          className="input input-bordered w-full"
          required
        />
        <input
          type="text"
          name="area"
          placeholder="Service Area"
          className="input input-bordered w-full"
          required
        />
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
