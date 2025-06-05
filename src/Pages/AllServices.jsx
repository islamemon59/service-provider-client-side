/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import ServiceCard from "./ServiceCard";
import { useLoaderData } from "react-router";
import useTitle from "../Hooks/useTitle";

const AllServices = () => {
  useTitle("Services")
  const initialServices = useLoaderData();
  const [services, setServices] = useState(initialServices);
  console.log(initialServices);
  return (
    <div>
      <div className="my-10">
        <h2 className=" text-3xl md:text-6xl text-primary font-bold text-center px-4 mb-10 py-6">
          Our All Services Here
        </h2>
        {services.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default AllServices;
