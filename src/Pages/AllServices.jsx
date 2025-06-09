/* eslint-disable no-unused-vars */
import React, { Suspense, useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";
import { useLoaderData } from "react-router";
import useTitle from "../Hooks/useTitle";
import axios from "axios";
import searchData from "../assets/search.json";
import Lottie from "lottie-react";
import Navbar from "../Shared/Navbar";
import Loader from "../Shared/Loader";

const AllServices = () => {
  useTitle("Services");
  const [services, setServices] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios(`http://localhost:3000/allServices?searchParams=${search}`).then(
      (res) => setServices(res.data)
    );
  }, [setServices, search]);

  return (
    <div className="md:my-40 my-26 max-w-7xl mx-auto relative">
      <div className="z-10 h-24 w-full max-w-7xl mx-auto inset-0 fixed">
        <Navbar></Navbar>
      </div>
      <div className="flex justify-center items-center pb-8 px-4">
        <input
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          name="search"
          placeholder="Search here"
          className="input w-[600px]"
        />
      </div>
      <div>
        {/* <div className="divider"></div> */}
        {services.length === 0 ? (
          <div className="flex justify-center items-center flex-col min-h-96">
            <h1 className="sm:text-5xl text-4xl font-bold text-base-300">
              No search result
            </h1>
            <Lottie
              style={{ width: "100px" }}
              animationData={searchData}
            ></Lottie>
          </div>
        ) : (
          <div>
            <div className="my-10 pt-6 space-y-3">
              <h2 className=" text-3xl md:text-5xl text-primary font-bold text-center">
                Our All Services Here
              </h2>
              <p className="md:text-lg text-center text-secondary max-w-2xl mx-auto">
                Explore all our services in one place—tailored solutions, expert
                support, and reliable delivery to meet every need with
                professionalism, efficiency, and a commitment to complete
                customer satisfaction.
              </p>
            </div>
            <div className="my-20">
              {services.map((service) => (
                <Suspense fallback={<Loader></Loader>}>
                  <ServiceCard key={service._id} service={service}></ServiceCard>
                </Suspense>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllServices;
