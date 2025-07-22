import { useEffect } from "react";
import HeroSection from "./Herosection";
import { TrustAndCredibilityBar } from "./TrustAndCredibilityBar";
import AboutMe from "./AboutMe";
import NavBar from "./NavBar";
import JobSection from "./JobSection";
import CertificateTrustWall from "./CertificateTrustWall";
import Aos from "aos";
import Footer from "./Footer";
import ProjectSection from "./ProjectSection";

const Home = () => {
  useEffect(() => {
    Aos.init();
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
