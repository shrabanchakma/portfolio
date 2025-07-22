import projects from "../../../../public/Projects.json";
import { SingleProject } from "./SingleProject";

const ProjectSection = () => {
  return (
    <section id="projects" className="py-20 bg-base-100 w-full">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-neutral">Projects</h2>
        <p className="text-gray-500 mt-2">
          Have a look at some of the rolled-out projects I'm proud of:
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 gap-8 items-stretch">
        {projects.map((project) => (
          <SingleProject key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectSection;
