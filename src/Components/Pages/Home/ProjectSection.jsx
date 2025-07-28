import projects from "../../../../public/Projects.json";
import { SingleProject } from "../Projects/SingleProject";

const ProjectSection = () => {
  return (
    <section id="projects" className="py-20  w-full">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-neutral">Projects</h2>
        <p className="text-gray-500 mt-2">
          Have a look at some of the rolled-out projects I'm proud of:
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 gap-8 items-stretch">
        {projects.slice(0, 3).map((project) => (
          <SingleProject key={project.id} project={project} />
        ))}
      </div>
      <div className="text-center mt-8">
        <a
          href="/projects"
          className="text-violet-600 underline cursor-pointer font-medium text-lg active:text-violet-700 hover:text-violet-800 transition"
        >
          View All Projects
        </a>
      </div>
    </section>
  );
};

export default ProjectSection;
