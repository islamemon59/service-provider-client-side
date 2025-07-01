/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";
import useTitle from "../../Hooks/useTitle";
const Contact = () => {
    useTitle("Contact")
  return (
    <section className="max-w-7xl mx-auto md:px-0 px-4 my-20 space-y-10 pt-10">
      {/* Title */}
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
        className="md:text-4xl text-3xl text-center text-primary font-bold"
      >
        Contact Us
      </motion.h1>

      {/* Intro */}
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ type: "tween", duration: 0.8, delay: 0.3 }}
        className="text-center text-base-content max-w-2xl mx-auto"
      >
        We're here to help! Whether you need a quick repair, a full service
        estimate, or just some friendly advice — reach out to our dedicated team
        anytime. Your satisfaction is our top priority.
      </motion.p>

      {/* Main content: form + contact info */}
      <div className="flex flex-col md:flex-row gap-10">
        {/* Contact form */}
        <motion.form
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{
            type: "spring",
            bounce: 0.3,
            duration: 0.8,
            delay: 0.4,
          }}
          className="flex-1 space-y-4 bg-base-100 p-6 rounded-xl shadow"
        >
          <input
            type="text"
            placeholder="Your Name"
            className="input input-bordered w-full"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="input input-bordered w-full"
            required
          />
          <input
            type="tel"
            placeholder="Your Phone (Optional)"
            className="input input-bordered w-full"
          />
          <textarea
            placeholder="Tell us how we can help..."
            className="textarea textarea-bordered w-full"
            rows="4"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary w-full">
            Send Message
          </button>
          <p className="text-xs text-base-content text-center">
            *We respect your privacy and will never share your details.
          </p>
        </motion.form>

        {/* Contact details */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{
            type: "spring",
            bounce: 0.3,
            duration: 0.8,
            delay: 0.5,
          }}
          className="flex-1 space-y-6 bg-base-100 p-6 rounded-xl shadow"
        >
          <h2 className="text-2xl font-semibold text-primary">Let's Connect</h2>
          <p className="text-base-content">
            Prefer to speak directly? Call us or visit our office. Our friendly
            support team is ready to assist you from Monday to Saturday, 9 AM –
            6 PM.
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-base-content">
              <FaPhone className="text-primary" />
              <span>+123 456 7890</span>
            </div>
            <div className="flex items-center gap-3 text-base-content">
              <FaEnvelope className="text-primary" />
              <span>contact@serviceproviderpro.com</span>
            </div>
            <div className="flex items-center gap-3 text-base-content">
              <FaMapMarkerAlt className="text-primary" />
              <span>123 Main Street, Dhaka, Bangladesh</span>
            </div>
          </div>
          {/* Social media icons */}
          <div className="flex gap-4 mt-4">
            <a href="#" className="text-primary hover:text-base-content">
              <FaFacebookF size={20} />
            </a>
            <a href="#" className="text-primary hover:text-base-content">
              <FaTwitter size={20} />
            </a>
            <a href="#" className="text-primary hover:text-base-content">
              <FaLinkedinIn size={20} />
            </a>
          </div>
          <p className="text-xs text-base-content">
            Follow us on social media for the latest updates & offers!
          </p>
        </motion.div>
      </div>

      {/* Friendly closing message */}
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ type: "tween", duration: 0.8, delay: 0.6 }}
        className="text-center text-base-content max-w-xl mx-auto pt-6"
      >
        Thank you for choosing ServiceProviderPro — your trusted partner for
        reliable, professional, and friendly service.
      </motion.p>

      <section className="max-w-7xl mx-auto md:px-0 px-4 my-20 space-y-10">
        {/* Title */}
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
          className="md:text-4xl text-3xl text-center text-primary font-bold"
        >
          Get in Touch with Us
        </motion.h1>

        {/* Intro text */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "tween", duration: 0.8, delay: 0.3 }}
          className="text-center text-secondary max-w-2xl mx-auto"
        >
          Have questions or need help? We’re here for you! Reach out anytime —
          our friendly team is ready to provide fast, professional support.
        </motion.p>

        {/* Contact info cards */}
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
          className="grid md:grid-cols-3 gap-6 text-center"
        >
          <div className="bg-base-100 p-6 rounded-xl shadow hover:shadow-lg transition duration-300">
            <FaPhone className="text-primary text-3xl mb-2 mx-auto" />
            <h3 className="text-lg font-semibold text-primary">Call Us</h3>
            <p className="text-secondary">+123 456 7890</p>
          </div>
          <div className="bg-base-100 p-6 rounded-xl shadow hover:shadow-lg transition duration-300">
            <FaEnvelope className="text-primary text-3xl mb-2 mx-auto" />
            <h3 className="text-lg font-semibold text-primary">Email</h3>
            <p className="text-secondary">contact@serviceproviderpro.com</p>
          </div>
          <div className="bg-base-100 p-6 rounded-xl shadow hover:shadow-lg transition duration-300">
            <FaMapMarkerAlt className="text-primary text-3xl mb-2 mx-auto" />
            <h3 className="text-lg font-semibold text-primary">Visit Us</h3>
            <p className="text-secondary">123 Main Street, Dhaka, Bangladesh</p>
          </div>
        </motion.div>

        {/* Closing message */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "tween", duration: 0.8, delay: 0.5 }}
          className="text-center text-secondary max-w-xl mx-auto"
        >
          Thank you for choosing us as your trusted service partner. We look
          forward to helping you!
        </motion.p>
      </section>
    </section>
  );
};

export default Contact;
