/* eslint-disable no-unused-vars */
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import { Link } from "react-router";
import { motion } from "motion/react";

const Banner = () => {
  return (
    <div className="w-full h-[500px] md:h-[500px] overflow-hidden -z-20">
      <Swiper
        style={{ width: "100%", height: "100%" }}
        modules={[Autoplay]}
        autoplay={{ delay: 3000 }}
        loop={true}
        className="w-full h-full"
      >
        <SwiperSlide>
          <div
            className="relative w-full h-full bg-cover bg-center bg-black-100"
            style={{
              backgroundImage: `url(https://busybeecleaningcompany.com/wp-content/uploads/2017/12/shutterstock_1675607932.jpg)`,
            }}
          >
            <div className="inset-0 absolute bg-black/50 "></div>
            {/* Overlay shade */}
            <div className="absolute inset-0  bg-opacity-50 z-10 flex items-center justify-center flex-col gap-5 mt-10">
              <motion.h2
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 5,
                  duration: 0.5,
                  delay: 0.2,
                }}
                viewport={{ once: true }}
                className="text-3xl md:text-5xl text-base-100 font-bold text-center px-4"
              >
                Reliable Home Cleaning
              </motion.h2>
              <motion.p
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  type: "tween",
                  stiffness: 150,
                  duration: 0.8,
                  delay: 0.5,
                }}
                className="md:text-xl text-base-300 font-bold text-center px-4 max-w-2xl"
              >
                Reliable Home Cleaning offers trusted, eco-friendly services by
                professionals to keep your home consistently clean, safe, and
                comfortable.
              </motion.p>
              <motion.Link
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  type: "tween",
                  stiffness: 150,
                  duration: 0.8,
                  delay: 1,
                }}
                to="/services"
                className="btn btn-primary"
              >
                Get Service
              </motion.Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="relative w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: `url(https://fixhunters.com/wp-content/uploads/2024/10/Plumbing-Maintenance-Services-1024x637.jpg)`,
            }}
          >
            <div className="inset-0 absolute bg-black/50 "></div>
            {/* Overlay shade */}
            <div className="absolute inset-0  bg-opacity-50 z-10 flex items-center justify-center flex-col gap-5 mt-10">
              <motion.h2
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 5,
                  duration: 0.8,
                  delay: 0.5,
                }}
                viewport={{ once: true }}
                className=" text-3xl md:text-5xl text-base-100 font-bold text-center px-4"
              >
                Expert Plumbing Services
              </motion.h2>
              <p className="md:text-xl text-base-300 font-bold text-center px-4 max-w-2xl">
                Expert Plumbing Services provide fast, reliable solutions for
                leaks, repairs, and installations by skilled professionals
                ensuring quality and customer satisfaction.
              </p>
              <Link to="/services" className="btn btn-primary">
                Get Service
              </Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="relative w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: `url(https://cms.migas.com.au/assets/Uploads/SEO/Blog-Skills-You-Need-to-Become-an-Electrician-SEO.jpg)`,
            }}
          >
            <div className="inset-0 absolute bg-black/50 "></div>
            {/* Overlay shade */}
            <div className="absolute inset-0  bg-opacity-50 flex items-center justify-center flex-col gap-5 mt-10">
              <motion.h2
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 5,
                  duration: 0.8,
                  delay: 0.5,
                }}
                viewport={{ once: true }}
                className="text-3xl md:text-5xl text-base-100 font-bold text-center px-4"
              >
                Skilled Electricians Near You
              </motion.h2>
              <p className="md:text-xl text-base-300 font-bold text-center px-4 max-w-2xl">
                Skilled Electricians Near You offer safe, efficient electrical
                services for homes and businesses, ensuring expert
                installations, repairs, and troubleshooting.
              </p>
              <Link to="/services" className="btn btn-primary">
                Get Service
              </Link>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
