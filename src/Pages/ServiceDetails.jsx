import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import useTitle from "../Hooks/useTitle";
import Navbar from "../Shared/Navbar";
import UseAxiosSecure from "../Hooks/UseAxiosSecure";

const ServiceDetails = () => {
  useTitle("Service Details");
  const axiosSecure = UseAxiosSecure();
  const [service, setService] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axiosSecure.get(`services/${id}`).then((res) => {
      setService(res.data);
    });
  }, [axiosSecure, id]);

  const {
    _id,
    area,
    description,
    imageUrl,
    name,
    price,
    providerEmail,
    providerImage,
    providerName,
  } = service;

  return (
    <div className="relative">
      <div className="max-w-7xl mx-auto mt-30 my-10 p-6 bg-base-100 rounded-xl shadow-lg flex flex-col md:flex-row gap-8">
        {/* Left: Service Image */}
        <div className="md:w-1/2 w-full overflow-hidden rounded-xl">
          <img
            src={imageUrl}
            alt={name}
            className="w-full h-[400px] md:h-[600px] object-cover rounded-xl hover:scale-110 transition-transform duration-500"
          />
        </div>

        {/* Right: Service Details */}
        <div className="md:w-1/2 w-full flex flex-col space-y-6">
          {/* Service Intro */}
          <div className="space-y-3">
            <h2 className="text-2xl md:text-3xl font-bold text-primary">
              {name}
            </h2>
            <p className="text-base-content">
              Get professional and reliable service at your doorstep. We ensure
              quality, transparency, and satisfaction every time.
            </p>
            <span className="inline-block bg-primary text-base-100 px-3 py-1 rounded-md font-semibold">
              Price: ৳ {price}
            </span>
          </div>

          <div className="space-y-2 border-t border-base-200 pt-4">
            <h3 className="text-lg font-semibold text-primary">
              Service Provider
            </h3>
            <div className="flex items-center gap-4">
              <img
                src={providerImage}
                alt={providerName}
                className="w-12 h-12 rounded-full border-2 border-primary hover:border-info"
              />
              <div>
                <p className="text-base-content font-medium">{providerName}</p>
                <p className="text-sm text-base-content opacity-70">
                  {providerEmail}
                </p>
                <p className="text-sm text-base-content">
                  <span className="font-semibold">Area:</span> {area}
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-2 border-t border-base-200 pt-4">
            <h3 className="text-lg font-semibold text-primary">
              About This Service
            </h3>
            <p className="text-base-content">{description}</p>
          </div>

          <div className="pt-2">
            <Link
              onClick={() => scrollTo(0, 0)}
              to={`/dashboard/bookedServices/${_id}`}
              className="btn btn-primary px-6 py-2 rounded-full shadow hover:scale-105 transition-transform duration-500"
            >
              Book Now
            </Link>
          </div>
        </div>
      </div>

      <section className="max-w-7xl mx-auto my-16 px-4">
        <h3 className="text-2xl font-semibold text-primary mb-6 text-center">
          What Our Customers Say
        </h3>
        <div className="grid md:grid-cols-3 gap-6">
          {[1, 2, 3].map((review, idx) => (
            <div
              key={idx}
              className="bg-base-100 p-4 rounded-xl shadow hover:shadow-lg transition"
            >
              <div className="flex items-center gap-3 mb-3">
                <img
                  src={`https://randomuser.me/api/portraits/${
                    idx % 2 === 0 ? "women" : "men"
                  }/${30 + idx}.jpg`}
                  alt="Customer"
                  className="w-12 h-12 rounded-full object-cover border-2 border-primary"
                />
                <div>
                  <p className="font-semibold">Customer {idx + 1}</p>
                  <p className="text-sm text-secondary">Verified Review</p>
                </div>
              </div>
              <p className="text-base-content">
                “Fantastic service! Very professional and on time. Highly
                recommended.”
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ✅ FAQ */}
      <section className="max-w-4xl mx-auto my-16 px-4">
        <h3 className="text-2xl font-semibold text-primary mb-6 text-center">
          Frequently Asked Questions
        </h3>
        <div className="space-y-4">
          <div className="bg-base-100 p-4 rounded-xl shadow">
            <p className="font-semibold">1: How do I book a service?</p>
            <p className="text-base-content">
              A: Simply click the “Book Now” button above and follow the steps.
            </p>
          </div>
          <div className="bg-base-100 p-4 rounded-xl shadow">
            <p className="font-semibold">
              2: Are your service providers verified?
            </p>
            <p className="text-base-content">
              B: Yes, every provider is vetted to ensure quality and trust.
            </p>
          </div>
          <div className="bg-base-100 p-4 rounded-xl shadow">
            <p className="font-semibold">3: Can I cancel after booking?</p>
            <p className="text-base-content">
              C: Yes, cancellations are possible under our cancellation policy.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetails;
