/* eslint-disable no-unused-vars */
import React from "react";
import { IoMdCall } from "react-icons/io";
import { motion } from "motion/react";

const ContactSection = () => {
  return (
    <div className=" flex justify-between md:flex-row flex-col gap-10 px-4">
      <div className="flex flex-col justify-center gap-3">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
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
          className="md:text-[26px] text-2xl font-semibold md:text-start text-center"
        >
          Have Questions? We’ve Got Answers, 24/7 Customer Support
        </motion.h1>
        <div className="flex items-center md:flex-row flex-col gap-3">
          <motion.button
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              type: "twin",
              bounce: 5,
              stiffness: 150,
              duration: 0.8,
              delay: 0.5,
              ease: "easeOut",
            }}
            className="btn btn-primary md:text-xl text-lg py-6"
          >
            Contact with us
          </motion.button>
          <motion.button
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              type: "twin",
              bounce: 5,
              stiffness: 150,
              duration: 0.8,
              delay: 0.5,
              ease: "easeOut",
            }}
            className="btn btn-primary md:text-xl text-lg py-6 md:px-14 px-11 btn-outline"
          >
            <IoMdCall />
            16555
          </motion.button>
        </div>
      </div>
      <div>
        <motion.img
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{
            type: "twin",
            bounce: 5,
            stiffness: 150,
            duration: 0.8,
            delay: 0.5,
            ease: "easeOut",
          }}
          src="https://i.ibb.co/jPxVSdBC/customer-service-representative-muslim-woman-hijab-working-computer-721969-5436-removebg-preview.png"
          alt="customer-care"
        />
      </div>
    </div>
  );
};

export default ContactSection;
