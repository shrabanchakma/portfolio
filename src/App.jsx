import { Route, Routes } from "react-router";
import "./App.css";
import Home from "./Components/Pages/Home/Home";
import { MainLayout } from "./Layouts/MainLayout";
import { ProjectPage } from "./Components/Pages/Projects/ProjectPage";
import { ScrollToTop } from "./Components/Shared/ScrollToTop";
import { AllProjectsPage } from "./Components/Pages/Projects/AllProjectsPage";

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="projects">
            <Route index element={<AllProjectsPage />} />
            {/* Individual project page */}
            <Route path=":projectId" element={<ProjectPage />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
