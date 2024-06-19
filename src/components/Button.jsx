import React from "react";
import { CgArrowLongRight } from "react-icons/cg";

function Button({ data }) {
  return (
    <div className="w-36 px-4 py-2 bg-zinc-100 text-black rounded-full flex items-center justify-between">
      <span className="text-sm font-medium">{data}</span>
      <CgArrowLongRight />
    </div>
  );
}

export default Button;
