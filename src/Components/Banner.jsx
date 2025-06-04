import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

// import required modules

const Banner = () => {
  return (
    <div className="w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden">
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 3000 }}
        loop={true}
        className="w-full h-full"
      >
        <SwiperSlide>
          <div
            className="relative w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: `url(https://busybeecleaningcompany.com/wp-content/uploads/2017/12/shutterstock_1675607932.jpg)`,
            }}
          >
            {/* Overlay shade */}
            <div className="absolute inset-0  bg-opacity-50 flex items-center justify-center flex-col gap-5">
              <h2 className=" text-3xl md:text-6xl text-primary font-bold text-center px-4">
                Reliable Home Cleaning
              </h2>
              <p className=" text-lg md:text-xl text-secondary font-bold text-center px-4 max-w-2xl">
                Reliable Home Cleaning offers trusted, eco-friendly services by
                professionals to keep your home consistently clean, safe, and
                comfortable.
              </p>
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
            {/* Overlay shade */}
            <div className="absolute inset-0  bg-opacity-50 flex items-center justify-center flex-col gap-5">
              <h2 className=" text-3xl md:text-6xl text-primary font-bold text-center px-4">
                Expert Plumbing Services
              </h2>
              <p className=" text-lg md:text-xl text-secondary font-bold text-center px-4 max-w-2xl">
                Expert Plumbing Services provide fast, reliable solutions for
                leaks, repairs, and installations by skilled professionals
                ensuring quality and customer satisfaction.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="relative w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url(https://cms.migas.com.au/assets/Uploads/SEO/Blog-Skills-You-Need-to-Become-an-Electrician-SEO.jpg)` }}
          >
            {/* Overlay shade */}
            <div className="absolute inset-0  bg-opacity-50 flex items-center justify-center flex-col gap-5">
              <h2 className=" text-3xl md:text-6xl text-primary font-bold text-center px-4">
                Skilled Electricians Near You
              </h2>
              <p className=" text-lg md:text-xl text-secondary font-bold text-center px-4 max-w-2xl">
                Skilled Electricians Near You offer safe, efficient electrical services for homes and businesses, ensuring expert installations, repairs, and troubleshooting.
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
