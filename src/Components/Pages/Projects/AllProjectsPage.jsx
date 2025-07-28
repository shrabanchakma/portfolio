import { useState } from "react";
import projects from "../../../../public/Projects.json";
import { SingleProject } from "./SingleProject";

export const AllProjectsPage = () => {
  const [filterType, setFilterType] = useState("All");

  const filteredProjects =
    filterType === "All"
      ? projects
      : projects.filter((project) => project.type === filterType);

  return (
    <div className="pattern_bg">
      <div className="max-w-5xl mx-auto px-4 py-20 pattern_bg">
        {/* 🔘 Sort Options */}
        <div className="mb-10 flex gap-6 justify-center">
          {["All", "Google Ads", "Web Analytics"].map((type) => (
            <label
              key={type}
              className="flex items-center gap-2 cursor-pointer"
            >
              <input
                type="radio"
                name="project-type"
                value={type}
                checked={filterType === type}
                onChange={(e) => setFilterType(e.target.value)}
                className="accent-pink-500 w-4 h-4"
              />
              <span className="text-gray-700 font-medium">{type}</span>
            </label>
          ))}
        </div>

        {/* 🧠 Filtered Projects Grid */}
        <div className="grid grid-cols-1 gap-5">
          {filteredProjects.map((project, i) => (
            <SingleProject key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </div>
  );
};
