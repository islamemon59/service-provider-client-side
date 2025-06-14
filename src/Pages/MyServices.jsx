import MyServicesCard from "./MyServicesCard";
import Lottie from "lottie-react";
import noData from "../assets/noData.json";
import Navbar from "../Shared/Navbar";

const MyServices = ({ services, setServices }) => {
  return (
    <div>
      {services.length == 0 ? (
        <div className="mt-10 flex justify-center items-center flex-col">
          <h1 className="text-center md:text-5xl font-bold text-4xl py-6 text-error">
            You haven't added any data
          </h1>
          <Lottie style={{ width: "250px" }} animationData={noData}></Lottie>
        </div>
      ) : (
        <div>
          <h1 className="text-center md:text-5xl font-bold text-4xl mt-10 pt-6 text-primary">
            Manage Your Services
          </h1>
          <div className="divider max-w-2xl mx-auto"></div>
          <div className="my-20">
            {services.map((service) => (
              <MyServicesCard
                key={service._id}
                service={service}
                services={services}
                setServices={setServices}
              ></MyServicesCard>
            ))}
          </div>
          <div className="divider"></div>
        </div>
      )}
    </div>
  );
};

export default MyServices;
