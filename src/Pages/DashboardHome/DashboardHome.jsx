/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import {
  FaUsers,
  FaTools,
  FaEnvelope,
  FaClipboardList,
  FaPlusCircle,
  FaTasks,
} from "react-icons/fa";
import { Link, useLoaderData } from "react-router";
import ContextHook from "../../Hooks/ContextHook";
import UseAxiosSecure from "../../Hooks/UseAxiosSecure";
import Loader from "../../Shared/Loader";
import { motion } from "framer-motion";

const DashboardHome = ({ stats, recentBookings = [] }) => {
  const { user } = ContextHook();
  const services = useLoaderData();
  const [myServices, setMyServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const axiosSecure = UseAxiosSecure();

  useEffect(() => {
    axiosSecure.get(`bookingServices?email=${user?.email}`).then((res) => {
      setLoading(false);
      setMyServices(res?.data);
    });
  }, [axiosSecure, user]);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="max-w-7xl mx-auto px-4">
      {/* Animated heading */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-3xl md:text-4xl font-bold text-primary text-center mb-8"
      >
        Welcome to Your Dashboard
      </motion.h1>

      {/* Stats cards */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.2 } }
        }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10"
      >
        {[
          {
            icon: <FaTools size={40} className="text-primary mb-2" />,
            title: "Total Services",
            value: services.length ?? 0,
          },
          {
            icon: <FaUsers size={40} className="text-primary mb-2" />,
            title: "Total Users",
            value: stats?.totalUsers ?? 6,
          },
          {
            icon: <FaClipboardList size={40} className="text-primary mb-2" />,
            title: "Total Bookings",
            value: myServices.length ?? 0,
          },
        ].map((card, idx) => (
          <motion.div
            key={idx}
            variants={{
              hidden: { opacity: 0, scale: 0.9 },
              visible: { opacity: 1, scale: 1 }
            }}
            transition={{ duration: 0.5 }}
            className="card bg-base-100 shadow-md hover:shadow-xl"
          >
            <div className="card-body flex items-center justify-center">
              {card.icon}
              <h2 className="text-xl font-semibold">{card.title}</h2>
              <p className="text-2xl font-bold text-primary">{card.value}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Divider */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="divider max-w-xl mx-auto font-semibold text-primary"
      >
        Profile
      </motion.div>

      {/* Profile card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="card bg-base-100 shadow-md max-w-sm mx-auto mb-10"
      >
        <div className="card-body items-center text-center">
          <div className="avatar mb-4">
            <div className="w-24 rounded-full border border-primary">
              <img
                src={user?.photoURL || "https://i.ibb.co/tDL2V5j/user.png"}
                alt="Profile"
              />
            </div>
          </div>
          <h2 className="text-xl font-bold">{user?.displayName || "Unknown User"}</h2>
          <p className="flex items-center gap-2 text-base-content break-all">
            <FaEnvelope /> {user?.email || "No email"}
          </p>
        </div>
      </motion.div>

      {/* Quick Actions */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-10"
      >
        <h2 className="text-xl font-semibold mb-4 text-primary">Quick Actions</h2>
        <div className="flex flex-wrap gap-4">
          <Link to="/dashboard/addServices" className="btn btn-primary flex items-center gap-2">
            <FaPlusCircle /> Add New Service
          </Link>
          <Link to="/dashboard/manageService" className="btn btn-outline flex items-center gap-2">
            <FaTasks /> Manage Services
          </Link>
        </div>
      </motion.div>

      {/* Recent Bookings */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-10"
      >
        <h2 className="text-xl font-semibold mb-4 text-primary">Recent Bookings</h2>
        {recentBookings.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="table table-zebra">
              <thead className="bg-base-200">
                <tr>
                  <th>Service Name</th>
                  <th>User</th>
                  <th>Date</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {recentBookings.slice(0, 5).map((booking) => (
                  <tr key={booking._id}>
                    <td>{booking.name}</td>
                    <td>{booking.userName}</td>
                    <td>{booking.date}</td>
                    <td>
                      <span className="badge badge-warning capitalize">
                        {booking.serviceStatus}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p className="text-base-content">No recent bookings found.</p>
        )}
      </motion.div>
    </div>
  );
};

export default DashboardHome;
