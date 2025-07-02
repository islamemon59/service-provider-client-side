import { Link, NavLink, useNavigate } from "react-router";
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
        localStorage.removeItem("token");
        Swal.fire({
          title: "Logout Successful",
          icon: "success",
        });
      })
      .catch((error) => {
        toast.error(`${error.message}`);
      });
  };

  // For cleaner code, define menu links and dashboard links
  const menuLinks = [
    { to: "/", label: "Home" },
    { to: "/services", label: "Services" },
    { to: "/aboutUs", label: "About Us" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <div className="fixed top-0 inset-x-0 z-50 bg-base-100 shadow-md">
      <div className="navbar max-w-7xl mx-auto px-2 h-20 flex justify-between items-center">
        {/* Start: Logo & mobile dropdown */}
        <div className="flex items-center gap-1">
          {/* Mobile menu */}
          <div className="dropdown lg:hidden">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {menuLinks.map(({ to, label }) => (
                <li key={to}>
                  <NavLink to={to} className="relative group">
                    {label}
                    <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                  </NavLink>
                </li>
              ))}
              {user && (
                <li>
                  <NavLink to="/dashboard">Dashboard</NavLink>
                </li>
              )}
            </ul>
          </div>
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              className="sm:w-[130px] w-[80px]"
              src="https://i.ibb.co/YFtd1DWK/edit-logo.png"
              alt="logo"
            />
          </Link>
        </div>

        {/* Center: Desktop menu */}
        <div className="hidden lg:flex">
          <ul className="menu menu-horizontal gap-4 font-semibold items-center">
            {menuLinks.map(({ to, label }) => (
              <NavLink key={to} to={to} className="relative group">
                {label}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </NavLink>
            ))}
            {user && (
              <li>
                <NavLink to="/dashboard">Dashboard</NavLink>
              </li>
            )}
          </ul>
        </div>

        {/* End: Theme toggle & Auth buttons */}
        <div className="flex items-center gap-2">
          {/* Modern theme toggle */}
          <label className="swap swap-rotate">
            {/* this hidden checkbox controls the state */}
            <input
              type="checkbox"
              className="theme-controller"
              value="dracula"
            />

            {/* sun icon */}
            <svg
              className="swap-off h-6 w-6 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
            </svg>

            {/* moon icon */}
            <svg
              className="swap-on h-6 w-6 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
            </svg>
          </label>

          {user ? (
            <>
              <div className="avatar">
                <div className="w-10 rounded-full border-2 border-primary">
                  <img src={user.photoURL} alt={user.displayName} />
                </div>
              </div>
              <button
                onClick={handleLogout}
                className="relative text-primary font-semibold group"
              >
                Log Out
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </button>
            </>
          ) : (
            <>
              <Link
                to="/register"
                className="relative text-primary text-xs font-semibold group"
              >
                Register
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link to="/signin" className="btn btn-primary btn-outline btn-sm">
                Signin
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
