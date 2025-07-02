import noData from "../assets/noData.json";
import Lottie from "lottie-react";
import ServiceToDoCard from "./ServiceToDoCard";

const ServiceToDoPromise = ({ services }) => {
  return (
    <div className="max-w-7xl mx-auto px-4">
      {services.length === 0 ? (
        <div className="flex justify-center items-center flex-col">
          <h1 className="text-center md:text-4xl font-bold text-3xl py-6 text-error">
            No one has booked any service yet
          </h1>
          <Lottie style={{ width: "250px" }} animationData={noData} loop />
        </div>
      ) : (
        <section>
          <h1 className="text-center md:text-4xl font-bold text-3xl my-10 pt-6 text-primary">
            These people have booked your service
          </h1>

          <div className="overflow-x-auto shadow border border-base-300 rounded-lg mt-8">
            <table className="table table-zebra w-full">
              <thead className="bg-primary text-white">
                <tr>
                  <th>Image</th>
                  <th>Service Name</th>
                  <th>Date</th>
                  <th>Price (৳)</th>
                  <th>Status</th>
                  <th>Customer</th>
                  <th>Provider</th>
                </tr>
              </thead>
              <tbody>
                {services.map((service) => (
                  <ServiceToDoCard key={service._id} service={service} />
                ))}
              </tbody>
            </table>
          </div>
        </section>
      )}
    </div>
  );
};

export default ServiceToDoPromise;
