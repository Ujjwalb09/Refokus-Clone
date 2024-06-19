import React from "react";

function Marquee({ imagesUrl }) {
  return (
    <div className="flex w-full py-8 gap-20 whitespace-nowrap overflow-hidden">
      {imagesUrl.map((url) => (
        <img src={url} className="w-30 flex-shrink-0" />
      ))}
      {imagesUrl.map((url) => (
        <img src={url} className="" />
      ))}
    </div>
  );
}

export default Marquee;
