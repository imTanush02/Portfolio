import React from "react";
import { motion } from "framer-motion";
import Particles from "./ui/Particles";

const tileVariants = {
  animate: (i) => ({
    scale: [1, 1.2, 1],
    rotate: [0, 90, 180, 270, 360],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      delay: i * 0.2,
      ease: "easeInOut",
    },
  }),
};

export default function Loader() {
  const colors = ["#b2b2b2ff", "#646464ff", "#565656ff", "#6e6e6eff", "#5d5d5dff"];
  return (
    <motion.div
      initial={{ y: 0, opacity: 1 }}
      animate={{ y: 0, opacity: 1, transition: { duration: 2, ease: "easeInOut" }}}
      exit={{ y: -100, opacity: 0, transition: { duration: 1, ease: "easeInOut" } }}
      className="fixed inset-0 flex items-center justify-center bg-[#121212] z-[9999]"
    >
      <div className="absolute inset-0 h-full w-full">
        <Particles
          particleColors={["#ffffff", "#ffffff"]}
          particleCount={300}
          particleSpread={20}
          speed={0.2}
          particleBaseSize={100}
          moveParticlesOnHover={false}
          particleHoverFactor={0.1}
          alphaParticles={false}
          disableRotation={true}
        />
      </div>
      <div className="grid grid-cols-2 gap-2">
        {Array.from({ length: 4 }).map((_, i) => (
          <motion.div
            key={i}
            custom={i}
            variants={tileVariants}
            animate="animate"
            className="w-10 h-10 rounded-md"
            style={{ backgroundColor: colors[i % colors.length] }}
          />
        ))}
      </div>
      
      {/* Progress Bar */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gray-800">
        <motion.div
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 10, ease: "linear" }}
          className="h-full bg-gradient-to-r from-gray-400 via-gray-300 to-white"
        />
      </div>
    </motion.div>
  );
}
