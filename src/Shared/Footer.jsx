import React from "react";
import { FaLinkedin } from "react-icons/fa6";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-primary text-base-200">
      <footer className="footer sm:footer-horizontal bg-transparent text-base-100 p-10 max-w-7xl mx-auto">
        <aside>
          <img
            className="w-[200px]"
            src="https://i.ibb.co/WNsbkrCX/edit-logo.png"
            alt="logo"
          />
          <p>
            We Provide Home Service
            <br />
            Providing reliable tech since 1992
          </p>
        </aside>
        <nav>
          <h6 className="footer-title">Services</h6>
          <Link to="/" className="link link-hover">Home</Link>
          <Link to="services" className="link link-hover">Service</Link>
          <Link className="link link-hover">Marketing</Link>
          <Link className="link link-hover">Advertisement</Link>
        </nav>
        <nav>
          <h6 className="footer-title">Social</h6>
          <div className="grid grid-cols-1 gap-6">
            <div className="flex justify-start items-center gap-4">
              <Link to="https://x.com/IstiakAhme13930">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                </svg>
              </Link>
              <Link to="https://www.linkedin.com/">
                <FaLinkedin size={25} />
              </Link>
              <Link to="https://www.facebook.com/n.bi.ta.554015">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                </svg>
              </Link>
            </div>
            <div className="join">
              <input
                type="text"
                placeholder="username@site.com"
                className="input input-bordered join-item text-base-content placeholder:text-gray-300"
              />
              <button className="btn text-base-100 btn-outline rounded-sm">
                Subscribe
              </button>
            </div>
          </div>
        </nav>
      </footer>
      <section className="footer sm:footer-horizontal footer-center p-6 bg-primary text-base-200">
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by ACME
            Industries Ltd
          </p>
        </aside>
      </section>
    </footer>
  );
};

export default Footer;
