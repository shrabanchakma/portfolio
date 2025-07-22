import { Bounce } from "react-awesome-reveal";
import { HashLink } from "react-router-hash-link";
import { ReactTyped } from "react-typed";
const HeroSection = () => {
  return (
    <section
      id="home"
      data-aos="zoom-in"
      // bg-[#0A0A0A]
      className=" text-white py-16 px-4 sm:px-6 md:px-12 lg:px-24"
    >
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-10">
        {/* Text Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-[#000814]">
            <ReactTyped
              strings={["Unlock Data-Driven Growth with Precision Analytics"]}
              typeSpeed={20}
            />
          </h1>
          <p className="mt-4 text-base font-medium sm:text-lg text-[#003566]">
            End-to-end GA4, GTM & Server-Side Tracking that boosts conversions —
            no more missing clicks.
          </p>
          <div className="mt-6">
            <Bounce>
              <HashLink
                to={"#projects"}
                smooth
                className="btn bg-[#ffd60a] text-[#001d3d] hover:bg-[#ffc300] outline-2 outline-offset-3 outline-[#003566] hover:outline-[#003566] active:outline-offset-4  px-6 py-3 rounded-md transition duration-300"
              >
                See My Work
              </HashLink>
            </Bounce>
          </div>
        </div>

        {/* Visual Content */}
        <div className="md:w-1/2 w-full">
          <div className="w-full h-64 sm:h-72 md:h-80 lg:h-96 rounded-4xl outline outline-[#003566] overflow-hidden shadow-lg ">
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
