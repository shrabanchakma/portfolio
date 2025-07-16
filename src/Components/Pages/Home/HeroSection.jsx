import React, { useEffect } from "react";
import AOS from "aos";
import { ReactTyped } from "react-typed";
const HeroSection = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section
      data-aos="zoom-in"
      className="bg-[#0A0A0A] text-white py-16 px-4 sm:px-6 md:px-12 lg:px-24"
    >
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-10">
        {/* Text Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-[#FEEA3A]">
            <ReactTyped
              strings={["Unlock Data-Driven Growth with Precision Analytics"]}
              typeSpeed={20}
            />
          </h1>
          <p className="mt-4 text-base sm:text-lg text-[#F2F2F2]">
            End-to-end GA4, GTM & Server-Side Tracking that boosts conversions —
            no more missing clicks.
          </p>
          <div className="mt-6">
            <a
              href="#projects"
              className="inline-block bg-[#FEEA3A] text-black font-semibold px-6 py-3 rounded-md hover:bg-[#ffd500] transition duration-300"
            >
              See My Work
            </a>
          </div>
        </div>

        {/* Visual Content */}
        <div className="md:w-1/2 w-full">
          <div className="w-full h-64 sm:h-72 md:h-80 lg:h-96 rounded-lg overflow-hidden shadow-lg border border-[#1C1C1C]">
            <img
              src="../../../../public/facebook cookie consent.png" // Replace with your actual image path
              alt="Dashboard collage"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
