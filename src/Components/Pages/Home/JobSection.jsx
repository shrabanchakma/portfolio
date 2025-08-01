import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import jobs from "../../../../public/jobs.json";
import Aos from "aos";
function PrevArrow({ className, style, onClick }) {
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "black",
        borderRadius: "50%",
      }}
      onClick={onClick}
    />
  );
}

function NextArrow({ className, style, onClick }) {
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "black",
        borderRadius: "50%",
      }}
      onClick={onClick}
    />
  );
}

const JobSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 4000,
    cssEase: "linear",
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: { slidesToShow: 2, slidesToScroll: 1 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
    ],
  };

  return (
    <section data-aos="zoom-in" className="py-16 px-4 md:px-12 ">
      <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center text-[#000814]">
        🚀 Skills in Action
      </h2>
      <Slider {...settings}>
        {jobs.map((job, index) => (
          <div key={index} className="px-2 cursor-pointer">
            <div className="bg-[#F3F4F6] rounded-lg  p-6 text-start h-full">
              {!isLoaded && (
                <div className="skeleton rounded-lg h-14 w-14 mb-4" />
              )}
              <img
                src={job.image}
                alt={job.label}
                className={`w-14 h-14 mb-4 rounded-lg ${
                  isLoaded ? "block" : "hidden"
                }`}
                onLoad={() => setIsLoaded(true)}
              />
              <h3 className="text-lg font-semibold mb-2 text-[#000204]">
                {job.title}
              </h3>
              <p className="text-sm text-gray-700">{job.description}</p>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default JobSection;
