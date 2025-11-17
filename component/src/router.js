import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";

function RouterFile() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default RouterFile;
