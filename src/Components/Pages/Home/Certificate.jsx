import React from "react";

const Certificate = ({ cert }) => {
  return (
    <div
      className="relative h-32 w-32 group cursor-pointer overflow-hidden rounded-lg shadow-sm"
      onClick={() => document.getElementById(`my_modal_${cert.id}`).showModal()}
    >
      {/* Certificate Image */}
      <img
        src={cert.icon}
        alt={cert.title}
        className="h-full w-full object-cover"
      />

      {/* Slide-Up Badge */}
      <div className="absolute bottom-0 left-0 right-0 h-32 group-hover:translate-y-0 translate-y-full transition-transform overflow-hidden">
        {/* Background Layer */}
        <div className="absolute inset-0  bg-[#004997]/25 backdrop-blur-sm"></div>

        {/* Text Layer */}
        <div className="relative flex items-center justify-center h-full text-black text-xs font-medium ">
          <button className="btn btn-sm bg-[#FEEA3A] text-black hover:bg-[#ffd500]">
            View Certificate
          </button>
        </div>
        {/* modal */}
        <dialog id={`my_modal_${cert.id}`} className="modal ">
          <div className="modal-box px-3 md:px-6 ">
            <h3 className="font-bold text-lg">{cert.title}</h3>
            <p className="py-4">Issued by: {cert.issuer}</p>
            <img
              src={cert.certificate}
              alt={cert.title}
              className="w-full object-cover"
            />
          </div>
          <form method="dialog" className="modal-backdrop">
            <button>close</button>
          </form>
        </dialog>
      </div>
    </div>
  );
};

export default Certificate;
