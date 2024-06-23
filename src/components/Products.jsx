import React, { useState } from "react";
import Product from "./Product";
import { motion } from "framer-motion";

function Products() {
  var products = [
    {
      title: "Arquitel",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Istequisquam dolores nihil vero culpa, enim eveniet sequi!",
      live: true,
      case: false,
    },
    {
      title: "TTR",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Istequisquam dolores nihil vero culpa, enim eveniet sequi!",
      live: true,
      case: false,
    },
    {
      title: "YIR 2022",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Istequisquam dolores nihil vero culpa, enim eveniet sequi!",
      live: true,
      case: true,
    },
    {
      title: "Yahoo!",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Istequisquam dolores nihil vero culpa, enim eveniet sequi!",
      live: true,
      case: true,
    },
  ];

  const [position, setposition] = useState(0);

  const mover = (val) => {
    setposition(val * 23);
  };

  return (
    <div className="mt-32 relative">
      {products.map((val, index) => (
        <Product index={index} mover={mover} key={index} val={val} />
      ))}
      <div className="absolute top-0 w-full h-full pointer-events-none">
        <motion.div
          initial={{ y: position, x: "-50%" }}
          animate={{ y: position + `rem` }}
          transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
          className="window absolute w-[32rem] h-[23rem] bg-white left-[44%] overflow-hidden"
        >
          <motion.div
            animate={{ y: -position + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="window absolute w-[32rem] h-[23rem] bg-sky-100"
          ></motion.div>
          <motion.div
            animate={{ y: -position + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="window absolute w-[32rem] h-[23rem] bg-sky-300"
          ></motion.div>
          <motion.div
            animate={{ y: -position + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="window absolute w-[32rem] h-[23rem] bg-sky-400"
          ></motion.div>
          <motion.div
            animate={{ y: -position + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="window absolute w-[32rem] h-[23rem] bg-sky-500"
          ></motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default Products;
