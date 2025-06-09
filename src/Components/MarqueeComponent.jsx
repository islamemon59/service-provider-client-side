import React from "react";
import Marquee from "react-fast-marquee";

const MarqueeComponent = () => {
  return (
    <div>
      <Marquee
        className="bg-primary/40 md:p-3 p-1"
        speed={30}
        pauseOnHover={true}
      >
        <div className=" flex justify-between items-center gap-26 md:text-xl">
          <div>
            {" "}
            <span>
              <span
                aria-label="status"
                className="status status-primary mr-2 w-3 h-3 rounded-full"
              ></span>
            </span>
            Connecting You with Trusted Experts — Anytime, Anywhere.
          </div>
          <div>
            <span>
              <span
                aria-label="status"
                className="status status-primary mr-2 w-3 h-3 rounded-full"
              ></span>
            </span>
            Reliable Services. Verified Professionals. Satisfaction Guaranteed.
          </div>
          <div>
            <span>
              <span
                aria-label="status"
                className="status status-primary mr-2 w-3 h-3 rounded-full"
              ></span>
            </span>
            Your One-Stop Destination for Quality and Convenience.
          </div>
        </div>
      </Marquee>
    </div>
  );
};

export default MarqueeComponent;
