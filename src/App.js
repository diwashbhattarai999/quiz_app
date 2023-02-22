import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { Home, Question, Final, Setting } from "./pages";
import { DarkMode } from "./components";
import Back from "./components/Back";
import "./App.css";
import "./styles/root.css";
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();
  return (
    <div className="quiz__main">
      <DarkMode />
      <Back />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/setting" element={<Setting />} />
          <Route path="/question" element={<Question />} />
          <Route path="/final" element={<Final />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
