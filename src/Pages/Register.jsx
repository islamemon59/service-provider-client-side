import React from "react";
import { Link } from "react-router";

const Register = () => {

    const handleRegister = e => {
        e.preventDefault()
    }

  return (
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
                placeholder="Email"
              />
              <label className="label">PhotoURL</label>
              <input
                type="text"
                name="photo"
                className="input"
                placeholder="Email"
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
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button type="submit" className="btn btn-neutral mt-4">Register</button>
              <p>
                Already have an account{" "}
                <Link
                  to="/signin"
                  className="text-primary font-bold hover:underline"
                >
                  Login
                </Link>
              </p>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
