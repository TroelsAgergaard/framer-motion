import { useState } from "react";
import { motion } from "framer-motion";
import "animate.css";

const ToggleNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const variants = {
    open: { height: 0 },
    closed: { height: "auto", padding: '10px' },
  };
  return (
    <>
      <div
        style={{ backgroundColor: "lightpink", height: "70px" }}
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      ></div>
      <motion.section
        layout
        animate={isOpen ? "open" : "closed"}
        variants={variants}
        style={{ backgroundColor: "purple", overflow: "hidden" }}
      >
        <div>Test</div>
        <div>Test</div>
        <div>Test</div>
        <div>Test</div>
        <div>Test</div>
        <div>Test</div>
        <div>Test</div>
        <div>Test</div>
        <div>Test</div>
        <div>Test</div>
        <div>Test</div>
        <div>Test</div>
      </motion.section>
    </>
  );
};

export default ToggleNav;
