import { Link, useLoaderData } from "react-router";
import Banner from "../Components/Banner";
import useTitle from "../Hooks/useTitle";
import PopularServices from "../Components/PopularServices";
import MarqueeComponent from "../Components/MarqueeComponent";
import Navbar from "../Shared/Navbar";
import ServiceCountUp from "../Components/ServiceCountUp";
import ContactSection from "../Components/ContactSection";

const Home = () => {
  const services = useLoaderData();
  useTitle("Home");
  return (
    <div>
      {/* Banner section */}
      <section className="relative">
        <div className="h-24 z-10 w-full  max-w-7xl mx-auto inset-0 fixed">
          <Navbar></Navbar>
        </div>
        <Banner></Banner>
      </section>

      <section>
        <MarqueeComponent></MarqueeComponent>
      </section>

      <section  className="bg-[url('https://img.freepik.com/premium-vector/abstract-colorful-banner-background-color-gradient-abstract-background-with-dynamic-wave-line-effect-vector-abstract-graphic-design-banner-pattern-background-web-template_181182-33656.jpg?semt=ais_items_boosted&w=740')] bg-cover bg-center max-w-7xl mx-auto px-10 rounded-xl my-10 shadow-xl hover:shadow-2xl transition duration-300">
        <div className="flex justify-center items-center gap-10">
          <img className="md:w-36 w-20" src="https://i.ibb.co/Fk2GD0Kn/png-transparent-bargain-product-promotion-action-up-to-date-offer-announcement-sticker-banner-busine.png" alt="offer" />
          <h1 className="text-white md:text-4xl font-bold">Limited Time Offer – Get 50% Off All Services!</h1>
        </div>
      </section>

      {/* Populer Service section */}
      <section className="my-32 max-w-7xl mx-auto">
        <div className="space-y-2 md:px-0 px-4">
          <h1 className="md:text-5xl text-4xl text-center text-primary font-bold">
            Our Popular Services
          </h1>
          <p className="md:text-lg text-center text-secondary">
            Our popular services offer expert solutions, reliable support, and{" "}
            <br />
            customer satisfaction across diverse needs—delivering value, trust,
            and excellence daily.
          </p>
        </div>
        <div className="my-16 px-4">
          {services.map((service) => (
            <PopularServices
              key={service._id}
              service={service}
            ></PopularServices>
          ))}
          <Link
            to="/services"
            className="relative text-primary font-semibold group md:px-0 px-4"
          >
            See All
            <span className="absolute h-1 w-0 bg-primary hover:w-full left-0 -bottom-1 group-hover:w-full  transition-all duration-400"></span>
          </Link>
        </div>
      </section>

      <section className="max-w-7xl mx-auto md:px-0 px-4">
        <ServiceCountUp></ServiceCountUp>
      </section>

      <section className="max-w-7xl mx-auto mt-20 mb-0">
        <ContactSection></ContactSection>
      </section>
    </div>
  );
};

export default Home;
