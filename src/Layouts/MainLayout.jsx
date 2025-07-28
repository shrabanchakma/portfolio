import { Outlet } from "react-router";
import { NavBar } from "../Components/Pages/Home/NavBar";
import Footer from "../Components/Pages/Home/Footer";
import { useEffect } from "react";
import Aos from "aos";

export const MainLayout = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="w-full">
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
};
