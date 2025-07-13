import React from "react";
import HeroSection from "./Herosection";
import NavBar from "./Navbar";
import { TrustAndCredibilityBar } from "./TrustAndCredibilityBar";

const Home = () => {
  return (
    <div>
      <NavBar />
      <div className="pt-16">
        <HeroSection />
        <TrustAndCredibilityBar />
      </div>
    </div>
  );
};

export default Home;
