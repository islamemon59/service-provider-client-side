import React from "react";
import { Link } from "react-router";

const SignIn = () => {

    const handleSignin = e => {
        e.preventDefault()
    }

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <h1 className="text-4xl font-bold text-center">Login now</h1>
          <form onSubmit={handleSignin}>
            <fieldset className="fieldset">
              <label className="label">Email</label>
              <input type="email" className="input" placeholder="Email" />
              <label className="label">Password</label>
              <input type="password" className="input" placeholder="Password" />
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button type="submit" className="btn btn-neutral mt-4">Login</button>
              <p>
                Create new account{" "}
                <Link
                  to="/register"
                  className="text-primary font-bold hover:underline"
                >
                  Register
                </Link>
              </p>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
