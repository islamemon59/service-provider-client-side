/* eslint-disable no-unused-vars */
import React from "react";
import CountUp from "react-countup";
import { motion } from "motion/react";

const ServiceCountUp = () => {
  return (
    <div>
      <motion.div
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
        className="md:text-4xl text-3xl py-6 font-semibold text-primary text-center"
      >
        Our Journey From The Start To Now
      </motion.div>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-8 py-6">
        <motion.div
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
          className="text-center p-3 bg-primary/30 w-full text-base-content space-y-2 rounded-sm transform hover:-translate-y-2 transition-all duration-500 shadow-xl hover:shadow-2xl"
        >
          <h3 className="md:text-xl text-lg font-semibold">OUR HAPPY</h3>
          <p className="md:text-4xl text-2xl font-bold">
            <CountUp end={500} enableScrollSpy={true} suffix="+"></CountUp>
          </p>
          <p className="md:text-xl text-lg font-semibold">CUSTOMERS</p>
        </motion.div>
        <motion.div
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
          className="text-center p-3 bg-primary/30 w-full text-base-content space-y-2 rounded-sm transform hover:-translate-y-2 transition-all duration-500 shadow-xl hover:shadow-2xl"
        >
          <h3 className="md:text-xl text-lg font-semibold">BOOKED OVER</h3>
          <p className="md:text-4xl text-2xl font-bold">
            <CountUp end={800} enableScrollSpy={true} suffix="+"></CountUp>
          </p>
          <p className="md:text-xl text-lg font-semibold">CLIENTS</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            type: "twin",
            bounce: 5,
            stiffness: 150,
            duration: 0.8,
            delay: 1.5,
            ease: "easeOut",
          }}
          className="text-center p-3 bg-primary/30 w-full text-base-content space-y-2 rounded-sm transform hover:-translate-y-2 transition-all duration-500 shadow-xl hover:shadow-2xl"
        >
          <h3 className="md:text-xl text-lg font-semibold">TOTAL SERVICE</h3>
          <p className="md:text-4xl text-2xl font-bold">
            <CountUp end={1500} enableScrollSpy={true} suffix="+"></CountUp>
          </p>
          <p className="md:text-xl text-lg font-semibold">PROVIDED</p>
        </motion.div>
      </div>
    </div>
  );
};

export default ServiceCountUp;
