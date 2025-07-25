import { useEffect } from "react";
import { useLocation } from "react-router";

export const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "auto", // or "smooth"
    });
  }, [pathname]);

  return null;
};
