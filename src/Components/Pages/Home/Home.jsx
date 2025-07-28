import HeroSection from "./Herosection";
import { TrustAndCredibilityBar } from "./TrustAndCredibilityBar";
import AboutMe from "./AboutMe";
import JobSection from "./JobSection";
import CertificateTrustWall from "./CertificateTrustWall";
import ProjectSection from "./ProjectSection";

const Home = () => {
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
