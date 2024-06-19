import React from "react";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Work from "./components/Work";
import Home from "./components/Home";
import Culture from "./components/Culture";
import Stripes from "./components/Stripes";
import Products from "./components/Products";
import Marquees from "./components/Marquees";

function App() {
  return (
    <div className="w-full bg-zinc-900 text-white font-['satoshi']">
      <Navbar />
      <Work />
      <Stripes />
      <Products />
      <Marquees />
    </div>
  );
}

export default App;
