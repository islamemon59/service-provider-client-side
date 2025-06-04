import React, { use } from "react";
import MyServicesCard from "./MyServicesCard";

const MyServices = ({ myServicesPromise }) => {
  const services = use(myServicesPromise);
  console.log(services);
  return (
    <div>
      <div>
        {services.map((service) => (
          <MyServicesCard key={service._id} service={service}></MyServicesCard>
        ))}
      </div>
    </div>
  );
};

export default MyServices;
