import { Route, Routes } from "react-router";
import "./App.css";
import Home from "./Components/Pages/Home/Home";
import { MainLayout } from "./Layouts/MainLayout";

function App() {
  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
