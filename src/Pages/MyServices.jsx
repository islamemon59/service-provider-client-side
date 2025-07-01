import Lottie from "lottie-react";
import noData from "../assets/noData.json";
import MyServicesCard from "./MyServicesCard";

const MyServices = ({ services, setServices }) => {
  return (
    <div className="max-w-7xl mx-auto px-4">
      {services.length === 0 ? (
        <div className="mt-20 flex flex-col justify-center items-center min-h-[60vh]">
          <h1 className="text-error text-center text-3xl md:text-4xl font-bold mb-6">
            You haven't added any data
          </h1>
          <Lottie style={{ width: 250 }} animationData={noData} loop={true} />
        </div>
      ) : (
        <>
          <h1 className="text-primary text-center text-3xl md:text-4xl font-bold mt-26 my-10">
            Manage Your Services
          </h1>
          <div className="overflow-x-auto rounded-lg shadow border border-base-300">
            <table className="table table-zebra w-full">
              <thead className="bg-primary text-white">
                <tr>
                  <th>Image</th>
                  <th>Service Name</th>
                  <th>Price (৳)</th>
                  <th>Area</th>
                  <th>Provider</th>
                  <th className="text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                {services.map((service) => (
                  <MyServicesCard
                    key={service._id}
                    service={service}
                    services={services}
                    setServices={setServices}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
};

export default MyServices;
