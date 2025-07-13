import React from "react";

export const TrustAndCredibilityBar = () => {
  return (
    <section className="bg-base-100 py-8 px-4 md:px-12 text-center border-t border-base-300">
      <h2 className="text-xl font-semibold mb-4 text-[#000814]">
        Trusted Tools. Proven Results.
      </h2>
      <p className="text-sm md:text-base mb-6 text-black/75">
        Specialized in tools that power data-driven growth and seamless digital
        experiences.
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 justify-items-center">
        <div className="badge badge-outline badge-lg">GA4</div>
        <div className="badge badge-outline badge-lg">GTM</div>
        <div className="badge badge-outline badge-lg">Shopify</div>
        <div className="badge badge-outline badge-lg">Google Ads</div>
        <div className="badge badge-outline badge-lg">WordPress</div>
        <div className="badge badge-outline badge-lg">Facebook Pixel</div>
      </div>
    </section>
  );
};
