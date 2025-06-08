import React from "react";
import CountUp from "react-countup";

const ServiceCountUp = () => {
  return (
    <div>
        <div className="divider mx-auto md:text-4xl py-6 font-semibold  text-primary">Our Journey From The Start To Now</div>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-8 py-6">
        <div className="text-center p-3 bg-primary/30 w-full text-secondary space-y-2 rounded-sm">
          <h3 className="md:text-xl text-lg font-semibold">OUR HAPPY</h3>
          <p className="md:text-5xl text-2xl font-bold">
            <CountUp end={500} enableScrollSpy={true} suffix="+"></CountUp>
          </p>
          <p className="md:text-xl text-lg font-semibold">CUSTOMERS</p>
        </div>
        <div className="text-center p-3 bg-primary/30 w-full text-secondary space-y-2 rounded-sm">
          <h3 className="md:text-xl text-lg font-semibold">BOOKED OVER</h3>
          <p className="md:text-5xl text-2xl font-bold">
            <CountUp end={800} enableScrollSpy={true} suffix="+"></CountUp>
          </p>
          <p className="md:text-xl text-lg font-semibold">CLIENTS</p>
        </div>
        <div className="text-center p-3 bg-primary/30 w-full text-secondary space-y-2 rounded-sm">
          <h3 className="md:text-xl text-lg font-semibold">TOTAL SERVICE</h3>
          <p className="md:text-5xl text-2xl font-bold">
            <CountUp end={1500} enableScrollSpy={true} suffix="+"></CountUp>
          </p>
          <p className="md:text-xl text-lg font-semibold">PROVIDED</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceCountUp;
