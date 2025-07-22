import credibilitybadges from "../../../../public/credibilitybadges.json";
import { Badge } from "./Badge";

export const TrustAndCredibilityBar = () => {
  return (
    <section
      data-aos="zoom-in"
      className="bg-[#001d3d] py-8 px-4 md:px-12 text-center border-t border-base-300 shadow-lg "
    >
      <h2 className="text-xl font-semibold mb-4 text-white">
        Trusted Tools. Proven Results.
      </h2>
      <p className="text-sm md:text-base mb-6 text-white">
        Specialized in tools that power data-driven growth and seamless digital
        experiences.
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 justify-items-center w-9/12 mx-auto">
        {credibilitybadges.map((badge) => (
          <Badge key={badge.id} badge={badge} />
        ))}
      </div>
    </section>
  );
};
