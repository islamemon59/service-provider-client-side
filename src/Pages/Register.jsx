import React from "react";
import { Link, useLocation, useNavigate } from "react-router";
import ContextHook from "../Hooks/ContextHook";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
import useTitle from "../Hooks/useTitle";
import Navbar from "../Shared/Navbar";

const Register = () => {
  useTitle("Register");
  const { user, setUser, createUser, signInWithGoogle, updateUserProfile } =
    ContextHook();
  const location = useLocation();
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    if (!/^(?=.*[A-Z]).+$/.test(password)) {
      return toast.error("Must have an Uppercase letter");
    }
    if (!/^(?=.*[a-z]).+$/.test(password)) {
      return toast.error("Must have an Lowercase letter");
    }
    if (/^.{6}$/.test(password)) {
      return toast.error("Length must be at least 6 character");
    }

    createUser(email, password)
      .then((result) => {
        const currentUser = result.user;
        Swal.fire({
          title: "SignUp Successful",
          icon: "success",
          draggable: true,
        });
        setUser(currentUser);
        navigate(location?.state || "/");
        updateUserProfile({ displayName: name, photoURL: photo })
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: photo });
          })
          .catch(() => {});
        console.log(currentUser);
      })
      .catch((error) => {
        toast.error(`${error.message}`);
      });
  };

  const handleGoogleLogin = () => {
    signInWithGoogle()
      .then((result) => {
        const currentUser = result.user;
        Swal.fire({
          title: "SignUp Successful",
          icon: "success",
          draggable: true,
        });
        setUser(currentUser);
        navigate(location?.state || "/");
      })
      .catch((error) => {
        toast.error(`${error.message}`);
      });
  };

  return (
    <div className="relative">
            <div className="z-10 h-24 w-full max-w-7xl mx-auto inset-0 fixed">
        <Navbar></Navbar>
      </div>
      <div className="min-h-screen flex justify-center items-center">
        <div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <h1 className="text-4xl font-bold text-center">Register now</h1>
            <form onSubmit={handleRegister}>
              <fieldset className="fieldset">
                <label className="label">Name</label>
                <input
                  type="text"
                  name="name"
                  className="input"
                  placeholder="Name"
                />
                <label className="label">PhotoURL</label>
                <input
                  type="text"
                  name="photo"
                  className="input"
                  placeholder="PhotoURL"
                />
                <label className="label">Email</label>
                <input
                  type="email"
                  name="email"
                  className="input"
                  placeholder="Email"
                />
                <label className="label">Password</label>
                <input
                  type="password"
                  name="password"
                  className="input"
                  placeholder="Password"
                />
                <button type="submit" className="btn btn-neutral mt-4">
                  Register
                </button>
                <p>
                  Already have an account{" "}
                  <Link
                    to="/signin"
                    className="text-primary font-bold hover:underline"
                  >
                    Login
                  </Link>
                </p>
                <div className="divider">OR</div>
                <button
                  onClick={handleGoogleLogin}
                  type="button"
                  className="btn w-full bg-secondary-content text-base-content border-[#e5e5e5]"
                >
                  <svg
                    aria-label="Google logo"
                    width="16"
                    height="16"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <g>
                      <path d="m0 0H512V512H0" fill="#fff"></path>
                      <path
                        fill="#34a853"
                        d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                      ></path>
                      <path
                        fill="#4285f4"
                        d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                      ></path>
                      <path
                        fill="#fbbc02"
                        d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                      ></path>
                      <path
                        fill="#ea4335"
                        d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                      ></path>
                    </g>
                  </svg>
                  SignUp with Google
                </button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
