import { motion } from "framer-motion";
import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

function Card({ width, start, para, button, hover = false }) {
  return (
    <motion.div
      whileHover={{
        backgroundColor: hover === true ? "#7443ff" : "",
        padding: "25px",
      }}
      className={`${width} bg-zinc-800 p-5 rounded-xl min-h-[35rem] flex flex-col justify-between`}
    >
      <div className="w-full">
        <div className="w-full flex justify-between items-center">
          <h3>Heading</h3>
          <IoIosArrowRoundForward />
        </div>
        <h1 className="text-3xl font-medium mt-5">Whatever Heading</h1>
      </div>
      <div className="down w-full ">
        {start && (
          <h1 className="text-6xl font-semibold tarcking-tight leading-none">
            Start a Project
          </h1>
        )}
        {button && (
          <button className="rounded-full py-2 px-5 border-[1px] border-zinc-50 mt-5">
            Contact Us
          </button>
        )}
        {para && (
          <p className="text-sm text-zinc-500 font-medium">
            Lorem ipsum dolor sit amet.
          </p>
        )}
      </div>
    </motion.div>
  );
}

export default Card;
