import PropTypes from "prop-types";
import { useState } from "react";
import { Link } from "react-router";
const bgColors = [
  "bg-rose-400", // soft red-pink
  "bg-amber-300", // warm golden
  "bg-teal-300", // gentle aqua
  "bg-lime-300", // soft citrus green
  "bg-sky-300", // clear sky blue
  "bg-violet-300", // smooth purple
  "bg-pink-300", // playful blush
  "bg-orange-300", // mellow orange
  "bg-cyan-300", // cool light teal
  "bg-emerald-300", // peaceful green
  "bg-indigo-300", // pastel indigo
  "bg-yellow-400", // warm sunshine
  "bg-purple-300", // creative, soft royal
  "bg-green-300", // earthy mint
  "bg-red-300", // calming coral
  "bg-blue-300", // airy ocean blue
  "bg-fuchsia-300", // vibrant pink-purple
  "bg-zinc-200", // soft gray for balance
  "bg-neutral-300", // gentle gray-beige
  "bg-stone-300", // warm muted tone
];
export const SingleProject = ({ project }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  return (
    <div
      key={project.id}
      className="flex flex-col lg:flex-row gap-8 items-center w-full"
    >
      {/* Left image block */}
      <Link
        to={project.link}
        className={`group ${
          bgColors[project.id % bgColors.length]
        } rounded-xl p-6 flex justify-center shadow-md w-full md:w-1/2 h-full cursor-pointer`}
      >
        {/* Loading Skeleton */}
        {!isLoaded && (
          <div className="skeleton w-full max-w-md rounded-xl drop-shadow-lg "></div>
        )}
        <img
          src={project.image}
          alt={project.name}
          className={`w-10/12 max-w-md rounded-xl drop-shadow-lg group-hover:scale-105 transition-transform duration-300  ${
            isLoaded ? "opacity-100" : "opacity-0 hidden"
          }`}
          onLoad={() => setIsLoaded(true)}
        />
      </Link>

      {/* Right content block */}
      <div className="bg-white rounded-xl shadow-md p-8 relative border border-gray-100 w-full md:w-1/2 h-full">
        <h3 className="text-2xl font-bold text-yellow-500 mb-4">
          {project.name}
        </h3>
        <p className="text-gray-600 leading-relaxed mb-6">
          {project.description}
        </p>
        <Link
          to={project.link}
          className="text-violet-600 font-semibold hover:underline"
        >
          View project
        </Link>

        {/* yellow shadow under */}
        <div className="absolute bottom-0 left-0 w-full h-2 bg-yellow-300 rounded-b-xl z-[-1]"></div>
      </div>
    </div>
  );
};

SingleProject.propTypes = {
  project: PropTypes.object,
};
