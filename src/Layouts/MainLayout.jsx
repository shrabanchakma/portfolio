import { Outlet } from "react-router";
import NavBar from "../Components/Pages/Home/NavBar";
import Footer from "../Components/Pages/Home/Footer";

export const MainLayout = () => {
  return (
    <div className="w-full">
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
};
