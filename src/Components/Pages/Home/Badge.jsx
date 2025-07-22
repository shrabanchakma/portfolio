import React, { useState } from "react";

export const Badge = ({ badge }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div>
      <div
        className={`${
          !isLoaded ? "" : "border shadow-md"
        } h-20 w-20 flex flex-col items-center justify-center bg-white  rounded-lg p-2  relative `}
      >
        {!isLoaded && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="skeleton h-20 w-20 rounded-lg"></div>
          </div>
        )}
        <img
          key={badge.id}
          src={badge.src}
          alt={badge.alt}
          className={`transition-opacity duration-300 ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
          onLoad={() => setIsLoaded(true)}
        />
      </div>
      <p className="text-xs text-center mt-1 text-white">{badge.label}</p>
    </div>
  );
};
