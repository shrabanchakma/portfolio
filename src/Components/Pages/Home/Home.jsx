import React from "react";
import HeroSection from "./Herosection";
import NavBar from "./Navbar";

const Home = () => {
  return (
    <div>
      <NavBar />
      <div className="pt-16">
        <HeroSection />
      </div>
    </div>
  );
};

export default Home;
