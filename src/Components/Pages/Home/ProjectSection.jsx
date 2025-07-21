const projects = [
  {
    id: 1,
    name: "Facebook Conversion API Setup",
    image: "https://i.ibb.co/1fkyvpTM/project-test.png", // Replace with real project preview if available
    description:
      "Implemented Facebook Conversion API (CAPI) with both browser-side and server-side tracking on WordPress and Shopify. Ensured event deduplication, improved attribution accuracy, and optimized data flow for better ad performance.",
    link: "#",
  },
];

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
              <a
                href={project.link}
                className="text-violet-600 font-semibold hover:underline"
              >
                View project
              </a>

              {/* yellow shadow under */}
              <div className="absolute bottom-0 left-0 w-full h-2 bg-yellow-300 rounded-b-xl z-[-1]"></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectSection;
