import "react";
import "./App.css";
import "./index.css";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./stores/pages/LandingPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </>
  );
}

export default App;
