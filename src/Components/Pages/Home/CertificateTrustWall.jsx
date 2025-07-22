import React from "react";
import Certificate from "./Certificate";
import certificates from "../../../../public/certificateicons";

const CertificateTrustWall = () => {
  return (
    <section
      // data-aos="zoom-out"
      className="py-12 px-4 md:px-12 bg-[#001d3d] mx-auto flex flex-col items-center"
    >
      <div className="text-center mb-8 w-10/12 ">
        <h2 className="text-3xl font-bold text-white mb-2">
          Certified by Industry Leaders
        </h2>
        <p className=" text-base-100 text-sm">
          My expertise in Google Ads and Web Analytics is backed by
          certifications from globally trusted platforms.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 lg:w-10/12 xl:w-8/12 place-items-center">
        {certificates.map((certificate) => (
          <Certificate key={certificate.id} cert={certificate} />
        ))}
      </div>
    </section>
  );
};

export default CertificateTrustWall;
