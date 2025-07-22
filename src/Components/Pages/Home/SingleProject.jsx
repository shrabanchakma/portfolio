import PropTypes from "prop-types";
import { Link } from "react-router";

export const SingleProject = ({ project }) => {
  return (
    <div
      key={project.id}
      className="flex flex-col lg:flex-row gap-8 items-center w-full"
    >
      {/* Left image block */}
      <div className="bg-yellow-400 rounded-xl p-6 flex justify-center shadow-md w-full md:w-1/2 h-full">
        <img
          src={project.image}
          alt={project.name}
          className="w-full max-w-md rounded-xl drop-shadow-lg"
        />
      </div>

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
