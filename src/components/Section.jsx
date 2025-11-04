import React from "react";
import { GridBackgroundDemo } from "../Functions/Background";
import Skills from "./Skills";
import Work from "./Work";

const Section = () => {
  return (
    <div className="text-white mt-10 sm:mt-20 md:mt-40 relative w-full font-rogshire bg-black">
      <GridBackgroundDemo />
      <div className="w-full min-h-screen border-zinc-300 px-3 sm:px-5 md:px-10 absolute top-[-10vh] sm:top-[-15vh] md:top-[-20vh] bg-transparent">
        <Skills />
      </div>
    </div>
  );
};

export default Section;
