import React from "react";
import Button from "./Button";

function Product({ val }) {
  return (
    <div className="w-full py-20 text-white">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between">
        <h1 className="text-6xl capitalize font-medium">{val.title}</h1>
        <div className="details w-1/3">
          <p className="mb-10">{val.description}</p>
          <div className="flex gap-10 items-center">
            {val.live && <Button data="Live Website"></Button>}
            {val.case && <Button data="Case Study"></Button>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
