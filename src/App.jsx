import React from "react";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Work from "./components/Work";
import Home from "./components/Home";
import Culture from "./components/Culture";
import Stripes from "./components/Stripes";

function App() {
  return (
    <div className="w-full h-screen bg-zinc-900 text-white font-['satoshi']">
      <Navbar />
      <Work />
      <Stripes />
    </div>
  );
}

export default App;
