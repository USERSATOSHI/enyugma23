import "./App.scss";
import { Routes, Route } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Home from "./Pages/Home/index.jsx";
import TechnicalEvent from "./Pages/TechnicalEvent";
import GlowBall from "./Components/cursor/index.jsx";
import Navbar from "./Components/Navbar/index.jsx";
import Footer from "./Components/Footer/index.jsx";
import Preloader from "./Components/Preloader/Preloader";
import Spin from "./Components/Spin/Preloader";
import CulturalEvent from "./Pages/CulturalEvent/index.jsx";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1200);
  }, []);

  return (
    <>
      {isLoading ? (
        <Preloader />
      ) : (
        <div className="App">
          <GlowBall />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/events/technical" element={<TechnicalEvent />} />
            <Route path="/events/cultural" element={<CulturalEvent />} />
            <Route path="/contact" element={<h1>Contact</h1>} />
          </Routes>
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
