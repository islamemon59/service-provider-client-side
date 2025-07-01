/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { Link } from "react-router"; // make sure to install react-router-dom
import useTitle from "../../Hooks/useTitle";

const AboutUs = () => {
    useTitle("About Us")
  return (
    <>
      <section className="max-w-7xl mx-auto md:px-0 px-4 my-20 space-y-16">
        {/* Main title */}
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            type: "tween",
            duration: 0.8,
            delay: 0.2,
            ease: "easeOut",
          }}
          className="md:text-4xl text-3xl text-center text-primary font-bold pt-10"
        >
          About Us
        </motion.h1>

        {/* Content section: image + text + button */}
        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              type: "spring",
              bounce: 0.3,
              duration: 0.8,
              delay: 0.3,
            }}
            className="flex-1"
          >
            <img
              src="https://img.freepik.com/free-vector/flat-design-illustration-customer-support_23-2148887720.jpg?semt=ais_hybrid&w=740"
              alt="About us"
              className="rounded-xl shadow-lg w-full h-80 object-cover"
            />
          </motion.div>

          {/* Text + CTA */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              type: "spring",
              bounce: 0.3,
              duration: 0.8,
              delay: 0.4,
            }}
            className="flex-1 space-y-4"
          >
            <h2 className="text-2xl md:text-3xl font-semibold text-primary">
              Delivering Trust & Quality
            </h2>
            <p className="text-base-content">
              At ServiceProviderPro, we connect customers with top-rated
              professionals across cleaning, plumbing, electrical and more.
              Our mission is to make your life easier by providing quick,
              reliable, and quality services at your fingertips.
            </p>
            <p className="text-base-content">
              Whether it's a last-minute repair or routine maintenance, our
              verified experts ensure every job is done right. Trusted by
              thousands, we stand by our promise: fast service, transparent
              pricing, and guaranteed satisfaction.
            </p>
            <Link to="/services">
              <button className="btn btn-primary mt-2">See Our Services</button>
            </Link>
          </motion.div>
        </div>

        {/* Why Choose Us */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            type: "spring",
            bounce: 0.3,
            duration: 0.8,
            delay: 0.4,
          }}
          className="space-y-16"
        >
          <h2 className="md:text-3xl text-2xl text-center text-primary font-bold">
            Why Choose Us
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Verified Professionals",
                desc: "We work only with licensed, background-checked experts for your safety and peace of mind.",
                icon: "https://cdn-icons-png.flaticon.com/512/1828/1828640.png",
              },
              {
                title: "Fast & Reliable Service",
                desc: "Same-day and emergency options so you never have to wait for what matters most.",
                icon: "https://cdn-icons-png.flaticon.com/512/1162/1162459.png",
              },
              {
                title: "Transparent Pricing",
                desc: "Clear estimates upfront with no hidden charges – always fair and honest.",
                icon: "https://cdn-icons-png.flaticon.com/512/484/484167.png",
              },
            ].map((feature, idx) => (
              <div
                key={idx}
                className="bg-base-100 p-6 rounded-xl shadow text-center space-y-3 hover:shadow-lg transition duration-300"
              >
                <img
                  src={feature.icon}
                  alt={feature.title}
                  className="w-12 mx-auto"
                />
                <h3 className="text-xl font-semibold text-primary">{feature.title}</h3>
                <p className="text-base-content">{feature.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Mission & Vision text section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            type: "spring",
            bounce: 0.3,
            duration: 0.8,
            delay: 0.4,
          }}
          className="bg-base-100 p-6 rounded-xl shadow space-y-4 text-center"
        >
          <h2 className="md:text-3xl text-2xl font-semibold text-primary">
            Our Mission & Vision
          </h2>
          <p className="text-base-content max-w-3xl mx-auto">
            We believe that everyone deserves fast, safe, and hassle-free access
            to quality home services. Our mission is to simplify your life by
            connecting you to trusted professionals — whether it’s for a quick
            fix, big renovation, or routine maintenance.
          </p>
          <p className="text-base-content max-w-3xl mx-auto">
            Driven by innovation and transparency, we envision a world where
            hiring a service provider is as easy as a click, and every project
            brings comfort, value, and peace of mind to your home.
          </p>
        </motion.div>

        {/* Counters */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            type: "spring",
            bounce: 0.3,
            duration: 0.8,
            delay: 0.5,
          }}
          className="grid md:grid-cols-3 gap-6 text-center"
        >
          <div className="bg-base-100 p-6 rounded-xl shadow">
            <h3 className="text-3xl md:text-4xl text-primary font-bold">10+</h3>
            <p className="text-base-content">Years Experience</p>
          </div>
          <div className="bg-base-100 p-6 rounded-xl shadow">
            <h3 className="text-3xl md:text-4xl text-primary font-bold">5000+</h3>
            <p className="text-base-content">Happy Clients</p>
          </div>
          <div className="bg-base-100 p-6 rounded-xl shadow">
            <h3 className="text-3xl md:text-4xl text-primary font-bold">100%</h3>
            <p className="text-base-content">Satisfaction Guaranteed</p>
          </div>
        </motion.div>

        {/* Partner logos */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            type: "spring",
            bounce: 0.3,
            duration: 0.8,
            delay: 0.6,
          }}
          className="flex justify-center flex-wrap gap-8 items-center"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Logo_TV_2015.png/320px-Logo_TV_2015.png"
            alt="Partner 1"
            className="h-12"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/320px-Google_2015_logo.svg.png"
            alt="Partner 2"
            className="h-12"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/320px-Microsoft_logo.svg.png"
            alt="Partner 3"
            className="h-12"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Netflix_logo.svg/320px-Netflix_logo.svg.png"
            alt="Partner 4"
            className="h-12"
          />
        </motion.div>
      </section>
    </>
  );
};

export default AboutUs;
