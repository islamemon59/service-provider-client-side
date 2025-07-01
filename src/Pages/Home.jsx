/* eslint-disable no-unused-vars */
import { Link, useLoaderData } from "react-router";
import Banner from "../Components/Banner";
import useTitle from "../Hooks/useTitle";
import PopularServices from "../Components/PopularServices";
import MarqueeComponent from "../Components/MarqueeComponent";
import Navbar from "../Shared/Navbar";
import ServiceCountUp from "../Components/ServiceCountUp";
import ContactSection from "../Components/ContactSection";
import { motion } from "framer-motion";
import ServiceCategories from "../Components/ServiceCategories";
import { useEffect } from "react";

const Home = () => {
  const services = useLoaderData();
  useTitle("Home");

  useEffect(() => {
    window.scrollTo(0, 0)
  },[])

  return (
    <div>
      {/* Banner + Navbar */}
      <section className="relative">
        <Banner />
      </section>

      {/* Marquee */}
      <section className="md:px-0 mb-20">
        <MarqueeComponent />
      </section>

      {/* Offer */}
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
        className="max-w-7xl mx-auto md:px-0 px-4 my-20 bg-[url('https://img.freepik.com/premium-vector/abstract-colorful-banner-background-color-gradient-abstract-background-with-dynamic-wave-line-effect-vector-abstract-graphic-design-banner-pattern-background-web-template_181182-33656.jpg?semt=ais_items_boosted&w=740')] bg-cover bg-center rounded-xl shadow-xl"
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

      {/* Service Categories */}
      <section className="max-w-7xl mx-auto md:px-0 px-4 my-20 overflow-hidden">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            type: "tween",
            stiffness: 150,
            duration: 0.8,
            delay: 0.5,
            ease: "easeOut",
          }}
          className="md:text-4xl text-3xl text-center text-primary font-bold py-8"
        >
          Service Categories
        </motion.h1>
        <div className="flex justify-center items-center md:flex-row flex-col md:gap-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              type: "tween",
              stiffness: 150,
              duration: 0.8,
              delay: 0.8,
              ease: "easeOut",
            }}
            className="mt-10 flex-1"
          >
            <ServiceCategories />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              type: "tween",
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
            <p className="md:text-start text-center text-base-content">
              Discover a wide range of specialized service categories designed
              to meet your every need. From home repairs to digital solutions,
              our platform connects you with trusted professionals in each
              field. Whether you're planning, building, or upgrading, find the
              right experts to get the job done—quickly and reliably.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Popular Services */}
<section className="max-w-7xl mx-auto md:px-0 px-4 my-20">
  {/* Heading */}
  <motion.h1
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{
      type: "tween",
      bounce: 5,
      stiffness: 150,
      duration: 0.8,
      delay: 0.5,
      ease: "easeOut",
    }}
    className="md:text-4xl text-3xl text-center text-primary font-bold"
  >
    Our Popular Services
  </motion.h1>

  {/* Subtitle */}
  <motion.p
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{
      type: "tween",
      bounce: 5,
      stiffness: 150,
      duration: 0.8,
      delay: 1,
      ease: "easeOut",
    }}
    className="md:text-lg text-center text-base-content"
  >
    Our popular services offer expert solutions, reliable support, and <br />
    customer satisfaction across diverse needs—delivering value, trust,
    and excellence daily.
  </motion.p>

  {/* Cards */}
  <div className="my-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
    {services.map((service) => (
      <PopularServices key={service._id} service={service} />
    ))}
  </div>

  {/* See All link */}
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
    className="overflow-hidden text-center"
  >
    <Link
      onClick={() => scrollTo(0, 0)}
      to="/services"
      className="relative text-primary font-semibold group"
    >
      See All
      <span className="absolute h-1 w-0 bg-primary group-hover:w-full left-0 -bottom-1 transition-all duration-400"></span>
    </Link>
  </motion.div>
</section>


      {/* Blog / Articles Section */}
      <section className="max-w-7xl mx-auto md:px-0 px-4 my-20">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            type: "tween",
            stiffness: 150,
            duration: 0.8,
            delay: 0.5,
            ease: "easeOut",
          }}
          className="md:text-4xl text-3xl text-center text-primary font-bold pb-8"
        >
          Latest Articles & Insights
        </motion.h1>

        <div className="grid md:grid-cols-3 gap-6">
          {[1, 2, 3].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                type: "spring",
                bounce: 5,
                stiffness: 120,
                duration: 0.8,
                delay: 0.5 + idx * 0.2,
              }}
              className="bg-base-100 rounded-xl shadow hover:shadow-lg transition duration-300 flex flex-col overflow-hidden"
            >
              <img
                src={
                  idx === 0
                    ? "https://serviceone.com/images/uploads_users/blog/Service-One-02.03-Blog_.png"
                    : idx === 1
                    ? "https://wellingtonhometeam.com/wp-content/uploads/2021/06/Home-Maintenance-that-will-Save-You-Money-in-the-Long-Run.png"
                    : "https://mmminimal.com/wp-content/uploads/2025/05/Reinventing-Home-Spaces.png"
                }
                alt="Blog Cover"
                className="h-48 w-full object-cover rounded-t-xl"
              />
              <div className="p-4 flex flex-col flex-grow">
                <h2 className="text-xl font-semibold text-primary mb-2">
                  {idx === 0 && "Top Tips to Choose Reliable Service Providers"}
                  {idx === 1 && "Why Regular Home Maintenance Saves Money"}
                  {idx === 2 && "Digital Solutions for Modern Homeowners"}
                </h2>
                <p className="text-base-content flex-grow">
                  {idx === 0 &&
                    "Learn how to identify trustworthy providers for your home projects and avoid costly mistakes."}
                  {idx === 1 &&
                    "Discover the financial benefits of proactive home care and maintenance services."}
                  {idx === 2 &&
                    "Explore digital tools and apps that simplify hiring and managing home services."}
                </p>
                <Link
                  to="/blog"
                  className="mt-4 text-primary font-medium hover:underline inline-flex items-center"
                >
                  Read More
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials / Customer Reviews Section */}
      <section className="max-w-7xl mx-auto md:px-0 px-4 my-20">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            type: "tween",
            stiffness: 150,
            duration: 0.8,
            delay: 0.5,
            ease: "easeOut",
          }}
          className="md:text-4xl text-3xl text-center text-primary font-bold pb-8"
        >
          What Our Customers Say
        </motion.h1>

        <div className="grid md:grid-cols-3 gap-6">
          {[1, 2, 3].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                type: "spring",
                bounce: 5,
                stiffness: 120,
                duration: 0.8,
                delay: 0.5 + idx * 0.2,
              }}
              className="bg-base-100 rounded-xl shadow hover:shadow-lg transition duration-300 flex flex-col p-6 text-center"
            >
              <div className="flex justify-center mb-4">
                <img
                  src={`https://randomuser.me/api/portraits/${
                    idx % 2 === 0 ? "women" : "men"
                  }/${30 + idx}.jpg`}
                  alt="Customer"
                  className="w-20 h-20 rounded-full object-cover border-4 border-primary"
                />
              </div>
              <h2 className="text-lg font-semibold text-primary mb-1">
                {idx === 0 && "Sarah J."}
                {idx === 1 && "Michael T."}
                {idx === 2 && "Emily R."}
              </h2>
              <div className="flex justify-center text-yellow-400 mb-2">
                {Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.54-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.43 8.72c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z" />
                    </svg>
                  ))}
              </div>
              <p className="text-secondary">
                {idx === 0 &&
                  "Fantastic service! The team was punctual, professional, and left my home spotless. Highly recommend!"}
                {idx === 1 &&
                  "Quick and reliable! They fixed my plumbing issue within hours. Will definitely use them again."}
                {idx === 2 &&
                  "Super easy booking and friendly electricians. My go-to for any home maintenance."}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Count Up */}
      <section className="max-w-7xl mx-auto md:px-0 px-4 my-20">
        <ServiceCountUp />
      </section>

      <section className="max-w-7xl mx-auto md:px-0 px-4 my-20">
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            type: "tween",
            duration: 0.8,
            delay: 0.2,
            ease: "easeOut",
          }}
          className="md:text-4xl text-3xl text-center text-primary font-bold"
        >
          Subscribe to Our Newsletter
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "tween", duration: 0.8, delay: 0.3 }}
          className="text-center text-secondary max-w-2xl mx-auto mt-2"
        >
          Stay updated with the latest news, special offers, and expert tips
          directly to your inbox.
        </motion.p>

        {/* Form */}
        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "tween", duration: 0.8, delay: 0.4 }}
          className="mt-6 flex flex-col sm:flex-row justify-center items-center gap-4 max-w-xl mx-auto"
        >
          <input
            type="email"
            placeholder="Enter your email address"
            className="input input-bordered w-full flex-1"
            required
          />
          <button type="submit" className="btn btn-primary w-full sm:w-auto">
            Subscribe
          </button>
        </motion.form>
      </section>

      {/* Contact */}
      <section className="max-w-7xl mx-auto md:px-0 px-4 my-20">
        <ContactSection />
      </section>
    </div>
  );
};

export default Home;
