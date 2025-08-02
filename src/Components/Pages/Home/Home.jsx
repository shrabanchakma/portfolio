import HeroSection from "./Herosection";
import { TrustAndCredibilityBar } from "./TrustAndCredibilityBar";
import AboutMe from "./AboutMe";
import JobSection from "./JobSection";
import CertificateTrustWall from "./CertificateTrustWall";
import ProjectSection from "./ProjectSection";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    document.title = "Shraban Chakma - Portfolio";
  }, []);
  return (
    <>
      <div className=" pattern_bg">
        <HeroSection />
        <TrustAndCredibilityBar />
        <JobSection />
        <AboutMe />
        <CertificateTrustWall />
        <ProjectSection />
      </div>
    </>
  );
};

export default Home;
