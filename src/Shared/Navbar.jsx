import React from "react";
import { Link, Links, NavLink, useNavigate } from "react-router";
import ContextHook from "../Hooks/ContextHook";
import Swal from "sweetalert2";
import toast from "react-hot-toast";

const Navbar = () => {
  const { user, signOutUser } = ContextHook();
  const navigate = useNavigate();

  const handleLogout = () => {
    signOutUser()
      .then(() => {
        navigate("/");
        Swal.fire({
          title: "Logout Successful",
          icon: "success",
          draggable: true,
        });
      })
      .catch((error) => {
        toast.error(`${error.message}`);
      });
  };
  return (
    <div className="navbar bg-base-100 py-4 rounded-md  max-w-7xl mx-auto shadow-xl md:px-4">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className=" lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/services">Services</NavLink>
            </li>
            <li>
              <a>Dashboard</a>
              <ul className="p-2">
                <li>
                  <NavLink to="/addServices">Add Service</NavLink>
                </li>
                <li>
                  <NavLink to="/manageService">Manage Service</NavLink>
                </li>
                <li>
                  <NavLink to="/myBooking">Booked Services</NavLink>
                </li>
                <li>
                  <NavLink to="/serviceToDo">Service To Do</NavLink>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <Link to="/" className="flex justify-center items-center px-2"><img className="sm:w-[130px] w-[80px]" src="https://i.ibb.co/YFtd1DWK/edit-logo.png" alt="logo" /></Link>
        <span>
          <label className="swap swap-rotate">
            {/* this hidden checkbox controls the state */}
            <input
              type="checkbox"
              className="theme-controller"
              value="dracula"
            />

            {/* sun icon */}
            <svg
              className="swap-off w-6 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
            </svg>

            {/* moon icon */}
            <svg
              className="swap-on w-6 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
            </svg>
          </label>
        </span>
      </div>
      <div className="navbar-center hidden lg:flex font-semibold z-10">
        <ul className="menu menu-horizontal px-1 text-l flex justify-center items-center gap-4">
          <NavLink to="/" className="relative group">
            Home
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-primary transition-all duration-400 group-hover:w-full"></span>
          </NavLink>

          <NavLink to="/services" className="relative group">
            Services
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-primary transition-all duration-400 group-hover:w-full"></span>
          </NavLink>

          {user && (
            <li>
              <details>
                <summary className="relative group">
                  Dashboard
                  <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-primary transition-all duration-400 group-hover:w-full"></span>
                </summary>
                <ul className="p-2 w-42">
                  <li>
                    <NavLink to="/addServices" className="relative group">
                      Add Service
                      <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-primary transition-all duration-400 group-hover:w-full"></span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/manageService" className="relative group">
                      Manage Service
                      <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-primary transition-all duration-400 group-hover:w-full"></span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/myBooking" className="relative group">
                      Booked Services
                      <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-primary transition-all duration-400 group-hover:w-full"></span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/serviceToDo" className="relative group">
                      Service To Do
                      <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-primary transition-all duration-400 group-hover:w-full"></span>
                    </NavLink>
                  </li>
                </ul>
              </details>
            </li>
          )}
        </ul>
      </div>
      <div className="navbar-end gap-4">
        {user ? (
          <div>
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src={user.photoURL}
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                <li>
                  <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </a>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <a>Logout</a>
                </li>
              </ul>
            </div>
            <button
              onClick={handleLogout}
              className="relative text-info font-semibold group btn-soft"
            >
              Log Out
              <span className="absolute left-0 -bottom-1 w-0 h-1 bg-primary transition-all duration-400 group-hover:w-full"></span>
            </button>
          </div>
        ) : (
          <>
            <Link
              to="/register"
              className="relative text-info font-semibold group md:text-[16px] text-xs"
            >
              Register
              <span className="absolute left-0 -bottom-1 w-0 h-1 bg-primary transition-all duration-400 group-hover:w-full"></span>
            </Link>
            <Link to="/signin" className="btn btn-primary btn-outline md:text-[16px] text-xs">
              Signin
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
