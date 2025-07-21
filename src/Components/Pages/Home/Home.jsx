import { useEffect } from "react";
import HeroSection from "./Herosection";
import { TrustAndCredibilityBar } from "./TrustAndCredibilityBar";
import AboutMe from "./AboutMe";
import NavBar from "./NavBar";
import JobSection from "./JobSection";
import CertificateTrustWall from "./CertificateTrustWall";
import Aos from "aos";
import Footer from "./Footer";

const Home = () => {
  useEffect(() => {
    Aos.init();
  }, []);
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
      <Footer />
    </div>
  );
};

export default Home;
