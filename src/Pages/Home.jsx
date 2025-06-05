import { Link, useLoaderData } from "react-router";
import Banner from "../Components/Banner";
import useTitle from "../Hooks/useTitle";
import PopularServices from "../Components/PopularServices";

const Home = () => {
  const services = useLoaderData();
  useTitle("Home");
  return (
    <div>
      <div className="-z-10">
        <Banner></Banner>
      </div>
      <div className="my-16">
        <div className="space-y-4">
          <h1 className="md:text-6xl text-4xl text-center text-primary font-bold">
            Our Popular Services
          </h1>
          <p className="md:text-lg text-center text-secondary">
            Our popular services offer expert solutions, reliable support, and{" "}
            <br />
            customer satisfaction across diverse needs—delivering value, trust,
            and excellence daily.
          </p>
        </div>
        <div className="my-16">
          {services.map((service) => (
            <PopularServices
              key={service._id}
              service={service}
            ></PopularServices>
          ))}
          <Link to="/services" className="btn btn-primary btn-soft">See All</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
