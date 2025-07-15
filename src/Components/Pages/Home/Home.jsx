import React from "react";
import HeroSection from "./Herosection";
import { TrustAndCredibilityBar } from "./TrustAndCredibilityBar";
import AboutMe from "./AboutMe";
import NavBar from "./NavBar";

const Home = () => {
  return (
    <div>
      <NavBar />
      <div className="pt-16">
        <HeroSection />
        <TrustAndCredibilityBar />
        <AboutMe />
      </div>
    </div>
  );
};

export default Home;
