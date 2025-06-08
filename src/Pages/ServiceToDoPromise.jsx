import React, { use } from "react";
import noData from "../assets/noData.json";
import Lottie from "lottie-react";
import ServiceToDoCard from "./ServiceToDoCard";

const ServiceToDoPromise = ({ myServiceToDoPromise }) => {
  const services = use(myServiceToDoPromise);
  return (
    <div>
      {services.length == 0 ? (
        <div className="mt-10 flex justify-center items-center flex-col">
          <h1 className="text-center md:text-5xl font-bold text-4xl py-6 text-error">
            No one has booked any service yet
          </h1>
          <Lottie style={{ width: "250px" }} animationData={noData}></Lottie>
        </div>
      ) : (
        <div>
          <h1 className="text-center md:text-5xl font-bold text-4xl mt-10 pt-6 text-primary">
            These people have booked your service
          </h1>
          <div className="divider max-w-4xl mx-auto"></div>
          <div className="grid  lg:grid-cols-3 md:grid-cols-2 gap-8 grid-cols-1 my-20">
            {services.map((service) => (
              <ServiceToDoCard
                key={service._id}
                service={service}
              ></ServiceToDoCard>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ServiceToDoPromise;
