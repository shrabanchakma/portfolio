import { useEffect, useState } from "react";
import Aos from "aos";
import { JackInTheBox } from "react-awesome-reveal";
import { BsDot } from "react-icons/bs";
import { GiCheckMark } from "react-icons/gi";

const AboutMe = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    Aos.init({ duration: 600 });
  }, []);

  return (
    <section
      id="about"
      data-aos="zoom-in"
      className="w-full bg-neutral-100 scroll-mt-24 py-10 "
    >
      <div className="w-full lg:w-10/12 mx-auto flex flex-col md:flex-row items-start justify-between gap-6">
        {/* Left: Image Section */}
        <div className="w-full md:w-1/3 lg:w-2/6">
          {!isLoaded && (
            <div className="skeleton w-full h-[20rem] sm:h-[25rem] md:h-[30rem] rounded-lg mx-auto" />
          )}
          <img
            src="https://i.ibb.co/s9H88NJn/me-cropped-2.jpg"
            alt="Portrait of Shraban Chakma"
            onLoad={() => setIsLoaded(true)}
            className={`w-full h-[20rem] sm:h-[25rem] md:h-[30rem] object-cover rounded-lg mx-auto transition-opacity duration-300 ${
              isLoaded ? "opacity-100" : "opacity-0"
            }`}
          />
        </div>

        {/* Right: Text Content */}
        <div className="w-full md:w-2/3 lg:w-4/6 px-4 py-2">
          <h1 className="text-xl md:text-4xl lg:text-5xl font-bold">
            About Me
          </h1>
          <div className="divider m-0 md:w-10/12" />
          <p className="text-sm md:text-lg text-black/75 mb-6 lg:w-10/12">
            I specialize in turning digital ad budgets into measurable business
            results. With deep expertise in Google Ads and web analytics, I help
            businesses launch performance-driven campaigns and track every
            click, view, and conversion with confidence.
          </p>

          {/* Skills List */}
          <h2 className="text-base md:text-lg font-bold flex items-center">
            <BsDot size={20} />
            What I Do Best:
          </h2>
          <div className="flex flex-col md:flex-row gap-4 text-sm md:text-base mt-4">
            <JackInTheBox>
              <ul className="list-none lg:pl-5 text-black/75">
                {[
                  "Google Ads Campaigns",
                  "Conversion-Focused Strategy",
                  "Ecommerce Tracking",
                  "Conversion Tracking",
                  "Campaign Optimization",
                ].map((text) => (
                  <li key={text} className="flex items-center gap-2">
                    <GiCheckMark />
                    {text}
                  </li>
                ))}
              </ul>
            </JackInTheBox>
            <JackInTheBox>
              <ul className="list-none md:pl-5 text-black/75">
                {[
                  "Remarketing & Audience Segments",
                  "Server-Side Tracking",
                  "Custom Dashboards",
                  "Error Fixing & Debugging",
                  "Data-Driven Decisions",
                ].map((text) => (
                  <li key={text} className="flex items-center gap-2">
                    <GiCheckMark />
                    {text}
                  </li>
                ))}
              </ul>
            </JackInTheBox>
          </div>

          {/* CTA Buttons */}
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
      </div>
    </section>
  );
};

export default AboutMe;
