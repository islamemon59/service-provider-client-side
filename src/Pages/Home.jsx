/* eslint-disable no-unused-vars */
import { Link, useLoaderData } from "react-router";
import Banner from "../Components/Banner";
import useTitle from "../Hooks/useTitle";
import PopularServices from "../Components/PopularServices";
import MarqueeComponent from "../Components/MarqueeComponent";
import Navbar from "../Shared/Navbar";
import ServiceCountUp from "../Components/ServiceCountUp";
import ContactSection from "../Components/ContactSection";
import { motion } from "motion/react";
import ServiceCategories from "../Components/ServiceCategories";

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

      {/* Marquee text section */}
      <section>
        <MarqueeComponent></MarqueeComponent>
      </section>

      {/* service offer section */}
      <motion.section
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          type: "spring",
          bounce: 5,
          stiffness: 150,
          duration: 0.8,
          delay: 0.5,
        }}
        className="bg-[url('https://img.freepik.com/premium-vector/abstract-colorful-banner-background-color-gradient-abstract-background-with-dynamic-wave-line-effect-vector-abstract-graphic-design-banner-pattern-background-web-template_181182-33656.jpg?semt=ais_items_boosted&w=740')] bg-cover bg-center max-w-7xl mx-auto px-10 rounded-xl md:my-24 my-10 shadow-xl"
      >
        <div className="flex justify-center items-center gap-10">
          <img
            className="md:w-36 w-20"
            src="https://i.ibb.co/Fk2GD0Kn/png-transparent-bargain-product-promotion-action-up-to-date-offer-announcement-sticker-banner-busine.png"
            alt="offer"
          />
          <h1 className="text-white md:text-4xl font-bold">
            Limited Time Offer – Get 50% Off All Services!
          </h1>
        </div>
      </motion.section>

      <section className="max-w-7xl mx-auto mt-20 overflow-hidden">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              type: "twin",
              stiffness: 150,
              duration: 0.8,
              delay: 0.5,
              ease: "easeOut",
            }}
            className="md:text-5xl text-4xl text-center text-primary font-bold py-8"
          >
            Service Categories
          </motion.h1>
        </div>
        <div className="flex justify-center items-center md:flex-row flex-col md:gap-6 ">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              type: "twin",
              stiffness: 150,
              duration: 0.8,
              delay: 0.8,
              ease: "easeOut",
            }}
            className="mt-10 grow flex-1"
          >
            <ServiceCategories></ServiceCategories>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              type: "twin",
              stiffness: 150,
              duration: 0.8,
              delay: 0.5,
              ease: "easeOut",
            }}
            className="flex-1 pb-16 space-y-3"
          >
            <h1 className="md:text-3xl text-2xl md:text-start text-center text-primary font-bold">
              Explore What We Offer
            </h1>
            <p className="md:text-start text-center text-secondary">
              Discover a wide range of specialized service categories designed
              to meet your every need. From home repairs to digital solutions,
              our platform connects you with trusted professionals in each
              field. Whether you're planning, building, or upgrading, find the
              right experts to get the job done—quickly and reliably.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Populer Service section */}
      <section className="mt-28 max-w-7xl mx-auto">
        <div className="space-y-2 md:px-0 px-4">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              type: "twin",
              bounce: 5,
              stiffness: 150,
              duration: 0.8,
              delay: 0.5,
              ease: "easeOut",
            }}
            className="md:text-5xl text-4xl text-center text-primary font-bold"
          >
            Our Popular Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              type: "twin",
              bounce: 5,
              stiffness: 150,
              duration: 0.8,
              delay: 1,
              ease: "easeOut",
            }}
            className="md:text-lg text-center text-secondary"
          >
            Our popular services offer expert solutions, reliable support, and{" "}
            <br />
            customer satisfaction across diverse needs—delivering value, trust,
            and excellence daily.
          </motion.p>
        </div>
        <div className="my-16 px-4">
          {services.map((service) => (
            <PopularServices
              key={service._id}
              service={service}
            ></PopularServices>
          ))}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              type: "spring",
              bounce: 5,
              stiffness: 150,
              duration: 0.5,
              delay: 0.5,
              ease: "easeOut",
            }}
            className="overflow-hidden"
          >
            <Link
            onClick={() => {
              scrollTo(0, 0)
            }}
              to="/services"
              className="relative text-primary font-semibold group md:px-0 px-4 overflow-hidden"
            >
              See All
              <span className="absolute h-1 w-0 bg-primary hover:w-full left-0 -bottom-1 group-hover:w-full  transition-all duration-400"></span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Count up section */}
      <section className="max-w-7xl mx-auto md:px-0 px-4">
        <ServiceCountUp></ServiceCountUp>
      </section>

      {/* Contact section */}
      <section className="max-w-7xl mx-auto mt-20 mb-0">
        <ContactSection></ContactSection>
      </section>
    </div>
  );
};

export default Home;
