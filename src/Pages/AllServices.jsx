/* eslint-disable no-unused-vars */
import React, { Suspense, useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";
import useTitle from "../Hooks/useTitle";
import axios from "axios";
import searchData from "../assets/search.json";
import Lottie from "lottie-react";
import Loader from "../Shared/Loader";
import { motion } from "framer-motion";

const AllServices = () => {
  useTitle("Services");
  const [services, setServices] = useState([]);
  const [search, setSearch] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios(
      `https://service-provider-server-iota.vercel.app/allServices?searchParams=${search}&sortOrder=${sortOrder}`
    ).then((res) => {
      setServices(res.data);
      setLoading(false);
    });
  }, [search, sortOrder]);

  const handleSortChange = (e) => {
    e.preventDefault();
    setSortOrder((prev) => (prev === "asc" ? "desc" : "asc"));
  };

  const handleSearchSubmit = () => {
    setSearch(searchQuery);
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="max-w-7xl mx-auto pt-30">
      {/* Animated Title & subtitle */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="pt-6 space-y-3 text-center px-4"
      >
        <h2 className="text-3xl md:text-4xl text-primary font-bold">
          Our All Services Here
        </h2>
        <p className="md:text-lg text-base-content max-w-2xl mx-auto">
          Explore all our services in one place—tailored solutions, expert
          support, and reliable delivery to meet every need with professionalism,
          efficiency, and a commitment to complete customer satisfaction.
        </p>
      </motion.div>

      {/* Animated Search & Sort area */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex flex-col md:flex-row justify-between items-center gap-4 pb-8 px-4 mt-6"
      >
        <button
          onClick={handleSortChange}
          className="btn btn-primary btn-sm w-full md:w-auto"
        >
          Sort by Price: {sortOrder === "asc" ? "Low to High" : "High to Low"}
        </button>

        <div className="flex items-center w-full md:w-auto gap-2">
          <input
            type="text"
            name="search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search services..."
            className="input flex-grow"
          />
          <button
            onClick={handleSearchSubmit}
            className="btn btn-primary btn-sm"
          >
            Search
          </button>
        </div>
      </motion.div>

      {/* Cards or no results */}
      {services.length === 0 ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center items-center flex-col min-h-96"
        >
          <h1 className="sm:text-5xl text-3xl font-bold text-base-300">
            No search result
          </h1>
          <Lottie style={{ width: "100px" }} animationData={searchData} />
        </motion.div>
      ) : (
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } }
          }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 my-20 px-4"
        >
          {services.map((service) => (
            <motion.div
              key={service._id}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.4 }}
            >
              <Suspense fallback={<Loader />}>
                <ServiceCard service={service} />
              </Suspense>
            </motion.div>
          ))}
        </motion.div>
      )}
    </div>
  );
};

export default AllServices;
