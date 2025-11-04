import React from "react";
import Svg from "./ui/Svg";

const Skills = () => {
  return (
    <div className="w-full flex flex-col justify-between pb-[30vh] items-end min-h-screen text-white">
      <div className="flex flex-col items-end">
        <h1 className="font-rogshire text-8xl text-end">Skills</h1>
        <p className="text-end text-3xl w-[30vw]">
          Whether you're animating UI, SVG or creating immersive WebGL
          experiences, GSAP has your back.
        </p>
      </div>

      <div>
        <div className="h-[3px] w-[90vw] flex gap-44 relative text-black text-3xl bg-zinc-300">
          {/* React & Next.js */}
          <div className="h-[50px] w-[50px] mt-[-4vh] relative flex justify-center items-center bg-zinc-900 rounded-full border border-cyan-400 shadow-[0_0_15px_#00ffff50] hover:shadow-[0_0_25px_#00ffff] transition-all duration-300">
            <i className="ri-reactjs-fill text-cyan-400 text-3xl "></i>
            <div className="absolute top-[30vh] left-5 gap-3 flex">
              <div className="translate-y-[-50%] scale-[210%]">
                <Svg />
              </div>
              <div className="w-[20vw] mt-[-15vh] text-white h-[30vh]">
                <h1 className="text-5xl">React.js & Next.js</h1>
                <p className="text-4xl text-zinc-300">
                  Building blazing-fast, interactive UIs with reusable
                  components and smooth routing — where performance meets
                  precision.
                </p>
              </div>
            </div>
          </div>

          {/* GSAP & Framer Motion */}
          <div className="h-[50px] w-[50px] mt-[-4vh] relative flex justify-center items-center bg-zinc-900 rounded-full border border-pink-400 shadow-[0_0_15px_#ff00ff50] hover:shadow-[0_0_25px_#ff00ff] transition-all duration-300">
            <i className="ri-bubble-chart-fill text-pink-400 text-3xl "></i>
            <div className="absolute top-[-20vh] left-5 gap-10 flex">
              <div className="translate-y-[-50%] scale-[210%]">
                <Svg />
              </div>
              <div className="w-[20vw] mt-[-15vh] text-white h-[30vh]">
                <h1 className="text-5xl">GSAP & Framer Motion</h1>
                <p className="text-4xl text-zinc-300">
                  Animating pixels with purpose — creating seamless transitions,
                  fluid motions, and scroll-based storytelling that feel alive.
                </p>
              </div>
            </div>
          </div>

          {/* Node.js & Express.js */}
          <div className="h-[50px] w-[50px] mt-[-4vh] relative flex justify-center items-center bg-zinc-900 rounded-full border border-green-400 shadow-[0_0_15px_#00ff0050] hover:shadow-[0_0_25px_#00ff00] transition-all duration-300">
            <i className="ri-nodejs-line text-green-400 text-3xl "></i>
            <div className="absolute top-[30vh] left-5 gap-3 flex">
              <div className="translate-y-[-50%] scale-[210%]">
                <Svg />
              </div>
              <div className="w-[20vw] mt-[-15vh] text-white h-[30vh]">
                <h1 className="text-5xl">Node.js & Express.js</h1>
                <p className="text-4xl text-zinc-300">
                  From logic to execution — powering secure APIs, real-time
                  responses, and scalable backend architectures with precision.
                </p>
              </div>
            </div>
          </div>

          {/* MongoDB & Mongoose */}
          <div className="h-[50px] w-[50px] mt-[-4vh] relative flex justify-center items-center bg-zinc-900 rounded-full border border-emerald-400 shadow-[0_0_15px_#00ffaa50] hover:shadow-[0_0_25px_#00ffaa] transition-all duration-300">
            <i className="ri-database-2-fill text-emerald-400 text-3xl "></i>
            <div className="absolute top-[-20vh] left-5 gap-3 flex">
              <div className="translate-y-[-50%] scale-[210%]">
                <Svg />
              </div>
              <div className="w-[20vw] mt-[-15vh] text-white h-[30vh]">
                <h1 className="text-5xl">MongoDB & Mongoose</h1>
                <p className="text-4xl text-zinc-300">
                  Crafting structured chaos — flexible, efficient, and optimized
                  data flows that make every query count.
                </p>
              </div>
            </div>
          </div>

          {/* Video Editing */}
          <div className="h-[50px] w-[50px] mt-[-4vh] relative flex justify-center items-center bg-zinc-900 rounded-full border border-yellow-400 shadow-[0_0_15px_#ffff0050] hover:shadow-[0_0_25px_#ffff00] transition-all duration-300">
            <i className="ri-clapperboard-fill text-yellow-400 text-3xl "></i>
            <div className="absolute top-[30vh] left-5 gap-3 flex">
              <div className="translate-y-[-50%] scale-[210%]">
                <Svg />
              </div>
              <div className="w-[20vw] mt-[-15vh] text-white h-[30vh]">
                <h1 className="text-5xl">Video Editing</h1>
                <p className="text-4xl text-zinc-300">
                  Transforming visuals into stories — blending rhythm, motion,
                  and emotion using After Effects for cinematic perfection.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
