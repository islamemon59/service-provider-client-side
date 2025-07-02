import React, { useState } from "react";
import { Link, NavLink, Outlet, useNavigate } from "react-router";
import {
  FaHome,
  FaPlus,
  FaTasks,
  FaClipboardList,
  FaCheckCircle,
  FaSignOutAlt,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import ContextHook from "../../Hooks/ContextHook";

const DashboardLayout = () => {
  const { signOutUser } = ContextHook();
  const navigate = useNavigate();

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  const handleLogout = () => {
    signOutUser();
    navigate("/login");
  };

  return (
    <div className="flex min-h-screen bg-base-100 dark:bg-gray-900">
      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 left-0 z-40 min-h-screen w-72 min-w-[288px] 
          bg-base-100 border-r border-base-300 shadow-md p-6 flex flex-col text-base-content
          transform transition-transform duration-300 ease-in-out
          md:relative md:translate-x-0
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <Link
            to="/dashboard"
            className="flex items-center gap-2 text-primary text-3xl font-bold whitespace-nowrap"
            onClick={() => sidebarOpen && toggleSidebar()}
          >
            Dashboard
          </Link>
          {/* Close button mobile */}
          <button
            onClick={toggleSidebar}
            className="md:hidden text-primary focus:outline-none"
            aria-label="Close sidebar"
          >
            <FaTimes size={24} />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex flex-col gap-3 flex-grow">
          {[
            {
              to:"/",
              label: "Home",
              icon: <FaHome/>
            },
            {
              to: "/dashboard/addServices",
              label: "Add Service",
              icon: <FaPlus />,
            },
            {
              to: "/dashboard/manageService",
              label: "Manage Service",
              icon: <FaTasks />,
            },
            {
              to: "/dashboard/myBooking",
              label: "Booked Service",
              icon: <FaClipboardList />,
            },
            {
              to: "/dashboard/serviceToDo",
              label: "Service To Do",
              icon: <FaCheckCircle />,
            },
          ].map(({ to, icon, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-md cursor-pointer transition
                ${
                  isActive
                    ? "bg-primary text-white font-semibold"
                    : "text-base-content hover:bg-primary hover:text-white"
                }`
              }
              onClick={() => sidebarOpen && toggleSidebar()}
            >
              {icon} <span className="truncate">{label}</span>
            </NavLink>
          ))}

          {/* Push logout button to bottom */}
          <div className="flex-grow"></div>

          <button
            onClick={handleLogout}
            className="flex items-center gap-3 px-4 py-3 rounded-md hover:bg-error hover:text-white transition text-error font-semibold"
            aria-label="Logout"
          >
            <FaSignOutAlt /> Logout
          </button>
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-grow p-4 overflow-auto relative">
        {/* Hamburger button mobile */}
        {!sidebarOpen && (
          <button
            onClick={toggleSidebar}
            className="fixed top-4 right-4 z-50 md:hidden p-2 rounded-md bg-transparent text-primary focus:outline-none"
            aria-label="Open sidebar"
          >
            <FaBars size={24} />
          </button>
        )}

        <div className="max-w-7xl mx-auto">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;
