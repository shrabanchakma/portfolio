import { Link, useParams } from "react-router";
import projects from "../../../../public/Projects.json"; // move to src if possible
import Lightbox from "yet-another-react-lightbox";
import { useState } from "react";
export const ProjectPage = () => {
  const { projectId } = useParams();
  const [openLightbox, setOpenLightbox] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const project = projects.find((p) => p.id === parseInt(projectId));
  const sectionImages = project.sections.map((section) => ({
    src: section.image,
  }));

  function setOpenLightBox(idx) {
    setOpenLightbox(true);
    setCurrentSlide(idx);
  }
  if (!project) {
    return (
      <div className="h-screen flex items-center justify-center text-red-600 text-xl">
        Project not found.
      </div>
    );
  }

  const { name, image, description, meta, sections } = project;

  return (
    <div className="pt-36 pb-32">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 mb-16 pattern_bg">
        <div className="flex flex-col md:flex-row gap-10 items-center">
          {/* Text block */}
          <div className="md:w-1/2 space-y-4 text-center md:text-left">
            <h1 className="text-4xl font-bold text-yellow-500">{name}</h1>
            <p className="text-gray-700">{description}</p>
            <a
              href="/contact"
              className="btn btn-primary btn-sm mt-4 rounded-md"
            >
              Start A Project
            </a>
          </div>

          {/* Image */}
          <div className="md:w-1/2">
            <img
              src={image}
              alt={name}
              className="rounded-xl shadow-lg max-w-full"
            />
          </div>
        </div>
      </section>

      {/* Metadata */}
      <section className="max-w-6xl mx-auto px-4 mb-20 grid grid-cols-1 md:grid-cols-3 gap-6 text-center ">
        <div className=" py-6 rounded-lg shadow-md">
          <p className="text-lg font-bold text-[#3C65FF]">Category</p>
          <p className=" font-semibold text-sm text-gray-500">
            {meta.industry}
          </p>
        </div>
        <div className=" py-6 rounded-lg shadow-md">
          <p className="text-lg font-bold text-[#3C65FF]">Tools</p>
          <p className=" font-semibold text-sm text-gray-500">
            {meta.tools.join(" | ")}
          </p>
        </div>
        <div className=" py-6 rounded-lg shadow-md">
          <p className="text-lg font-bold text-[#3C65FF]">Outcome</p>
          <p className="font-semibold text-sm text-gray-500">
            {meta.outcome.join(" - ")}
          </p>
        </div>
      </section>
      {/* lightbox */}
      <Lightbox
        className="rounded-xl shadow-md"
        slides={sectionImages}
        index={currentSlide}
        open={openLightbox}
        close={() => setOpenLightbox(false)}
      />
      {/* Sections */}
      {sections.map((section, idx) => {
        const isEven = idx % 2 === 0;
        return (
          <section
            key={idx}
            className={`max-w-6xl mx-auto px-4 mb-20 grid grid-cols-1 md:grid-cols-5 gap-10 items-center`}
          >
            {!isEven ? (
              // Reversed: Text on left, image on right
              <>
                <div className="md:col-span-3">
                  <h2 className="text-2xl font-bold text-neutral mb-4">
                    {section.title}
                  </h2>
                  <ul className="list-disc text-gray-700 pl-5 space-y-2 text-sm">
                    {section.bullets.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>
                <div
                  className="md:col-span-2"
                  onClick={() => setOpenLightBox(idx)}
                >
                  <img
                    src={section.image}
                    alt={section.title}
                    className="rounded-xl shadow-md cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out"
                  />
                </div>
              </>
            ) : (
              // Default: Image on left, text on right
              <>
                <div
                  className="md:col-span-2"
                  onClick={() => setOpenLightBox(idx)}
                >
                  <img
                    src={section.image}
                    alt={section.title}
                    className="rounded-xl shadow-md cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out"
                  />
                </div>
                <div className="md:col-span-3">
                  <h2 className="text-2xl font-bold text-neutral mb-4">
                    {section.title}
                  </h2>
                  <ul className="list-disc text-gray-700 pl-5 space-y-2 text-sm">
                    {section.bullets.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>
              </>
            )}
          </section>
        );
      })}

      {/* Final CTA */}
      <section className="bg-yellow-100 py-12 px-6 rounded-xl text-center max-w-5xl mx-auto">
        <p className="text-gray-800 font-semibold mb-4 text-lg">
          Want to see this in action? Let's collaborate on your tracking setup.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <a
            href="/contact"
            className="btn bg-black text-white hover:bg-neutral rounded-lg"
          >
            Start a Project
          </a>
          <Link
            to="/projects"
            className="btn btn-outline border-yellow-400 text-yellow-600 hover:bg-yellow-400 hover:text-black rounded-lg"
          >
            Back to Projects
          </Link>
        </div>
      </section>
    </div>
  );
};
