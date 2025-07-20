import React from "react";
import HeroSection from "./Herosection";
import { TrustAndCredibilityBar } from "./TrustAndCredibilityBar";
import AboutMe from "./AboutMe";
import NavBar from "./NavBar";
import JobSection from "./JobSection";
import CertificateTrustWall from "./CertificateTrustWall";

const Home = () => {
  return (
    <div className="w-full">
      <NavBar />
      <div className="pt-16">
        <HeroSection />
        <TrustAndCredibilityBar />
        <JobSection />
        <AboutMe />
        <CertificateTrustWall />
      </div>
    </div>
  );
};

export default Home;
