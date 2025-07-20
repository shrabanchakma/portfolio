import { useState } from "react";
import { JackInTheBox } from "react-awesome-reveal";
import { BsDot } from "react-icons/bs";
import { GiCheckMark } from "react-icons/gi";
const AboutMe = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  return (
    <section
      data-aos="zoom-in"
      className="max-h-vh px-4   bg-base-100  w-full lg:w-10/12 mx-auto  flex flex-col md:flex-row items-start justify-between lg:gap-20"
    >
      <div className="w-full md:w-1/3 lg:w-2/6 ">
        {/* my image*/}
        {!isLoaded && (
          <div className="skeleton w-full h-[20rem] xsm:h-[25rem] sm:h-[30rem]  md:w-11/12 mx-auto rounded-lg"></div>
        )}
        <img
          src="https://i.ibb.co/s9H88NJn/me-cropped-2.jpg"
          alt="My Image"
          className={`w-full h-[20rem] xsm:h-[25rem] sm:h-[30rem] object-cover md:w-11/12 mx-auto ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
          onLoad={() => setIsLoaded(true)}
        />
      </div>
      <div className="w-full md:w-2/3 lg:w-4/6  px-4 py-4 md:px-1 md:py-1 lg:px-10 lg:pt-5 md:pb-10 ">
        {/* intro*/}
        <h1 className="text-xl md:text-4xl lg:text-5xl font-bold">About Me</h1>
        <div className="divider m-0 md:w-10/12"></div>
        <p className="text-sm  md:text-lg text-black/75 mb-6 w-full lg:w-10/12">
          I specialize in turning digital ad budgets into measurable business
          results. With deep expertise in Google Ads and web analytics, I help
          businesses launch performance-driven campaigns and track every click,
          view, and conversion with confidence.
        </p>
        {/* what i do best */}
        <h2 className="text-base md:text-lg font-bold flex items-center">
          <BsDot className="" size={20} />
          What I Do Best:
        </h2>
        <div className="flex flex-col md:flex-row md:gap-4 text-sm md:text-base gap-4 ">
          <div>
            {" "}
            <JackInTheBox>
              {" "}
              <ul className="list-none lg:pl-5 text-black/75">
                <li className="flex items-center gap-2">
                  <GiCheckMark />
                  Google Ads Campaigns
                </li>
                <li className="flex items-center gap-2">
                  <GiCheckMark />
                  Conversion-Focused Strategy
                </li>
                <li className="flex items-center gap-2">
                  <GiCheckMark />
                  Ecommerce Tracking
                </li>
                <li className="flex items-center gap-2">
                  <GiCheckMark />
                  Conversion Tracking
                </li>
                <li className="flex items-center gap-2">
                  <GiCheckMark />
                  Campaign Optimization
                </li>
              </ul>
            </JackInTheBox>
          </div>
          <div>
            {" "}
            <JackInTheBox>
              <ul className=" list-disc md:pl-5 text-black/75">
                <li className="flex items-center gap-2">
                  <GiCheckMark />
                  Remarketing & Audience Segments
                </li>
                <li className="flex items-center gap-2">
                  <GiCheckMark />
                  Server-Side Tracking
                </li>
                <li className="flex items-center gap-2">
                  <GiCheckMark />
                  Custom Dashboards
                </li>
                <li className="flex items-center gap-2">
                  <GiCheckMark />
                  Error Fixing & Debugging
                </li>
                <li className="flex items-center gap-2">
                  <GiCheckMark />
                  Data-Driven Decisions
                </li>
              </ul>
            </JackInTheBox>
          </div>
        </div>
        {/* download cv */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-6">
          <a
            href="/cv.pdf"
            download
            className="btn px-6 py-2 text-white bg-[#000814] hover:bg-[#ffd60a] font-semibold"
          >
            📄 Download CV
          </a>

          <a
            href="#projects"
            className="btn bg-[#FEEA3A] text-black hover:bg-[#ffd500]"
          >
            See My Work
          </a>
        </div>
      </div>
    </section>
  );
};
export default AboutMe;
