import React from "react";
import Svg from "./ui/Svg";

const Skills = () => {
  return (
    <div className="w-full flex flex-col lg:justify-between py-[10vh] pb-[20vh] items-start lg:items-end min-h-screen text-white">
      <div className="flex flex-col w-full items-center lg:items-end">
        <h1 className="font-rogshire text-6xl lg:text-8xl text-start lg:text-end text-zinc-300">
          Skills
        </h1>
        <p className=" text-center text-zinc-300  lg:text-end text-3xl w-[90%] lg:w-[30%]">
          Whether you're animating UI, SVG or creating immersive WebGL
          experiences, GSAP has your back.
        </p>
      </div>

    
        <div className="lg:h-[3px] lg:grid-cols-[5%_5%_5%_5%_5%] lg:w-[90vw] h-fit w-[90vw] mx-auto  flex flex-col lg:flex-row lg:gap-44 gap-4 relative text-black text-3xl lg:bg-zinc-300">
          {/* React & Next.js */}
          <div className="lg:h-[50px] lg:w-[50px] mt-[-4vh] lg:grid hidden relative flex justify-center items-center bg-zinc-900 rounded-full border border-cyan-400 shadow-[0_0_15px_#00ffff50] hover:shadow-[0_0_25px_#00ffff] transition-all duration-300">
            <i className="ri-reactjs-fill text-cyan-400 text-3xl "></i>
            <div className="absolute top-[30vh] left-5 gap-10 flex">
              <div className="translate-y-[-50%] hidden lg:block scale-[210%]">
                <Svg />
              </div>
              <div className="lg:w-[20vw] w-[100vw] mt-[-15vh]  text-white h-[30vh]">
                <h1 className="text-5xl">React.js & Next.js</h1>
                <p className="text-4xl text-zinc-300">
                  Building blazing-fast, interactive UIs with reusable
                  components and smooth routing — where performance meets
                  precision.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:hidden block flex flex-col w-full h-fit p-5">
            <div className="lg:w-[20vw] w-[100%]  text-white ">
              <div className="flex items-center gap-5">
                <div className=" h-[50px] w-[50px]  flex justify-center items-center rounded-full border border-cyan-400 shadow-[0_0_15px_#00ffff50] hover:shadow-[0_0_25px_#00ffff] transition-all duration-300">
                  <i className="ri-reactjs-fill text-cyan-400 text-3xl "></i>
                </div>
                <h1 className="text-5xl">React.js & Next.js</h1>
              </div>
              <p className="text-4xl mt-5 text-zinc-300">
                Building blazing-fast, interactive UIs with reusable components
                and smooth routing — where performance meets precision.
              </p>
            </div>
          </div>

          {/* GSAP & Framer Motion */}
          <div className="h-[50px] w-[50px] mt-[-4vh] relative lg:grid hidden flex justify-center items-center bg-zinc-900 rounded-full border border-pink-400 shadow-[0_0_15px_#ff00ff50] hover:shadow-[0_0_25px_#ff00ff] transition-all duration-300">
            <i className="ri-bubble-chart-fill text-pink-400 text-3xl "></i>
            <div className="absolute top-[-20vh] left-5 gap-10 flex">
              <div className="translate-y-[-50%]  hidden lg:block scale-[210%]">
                <Svg />
              </div>
              <div className="lg:w-[20vw] w-[100vw] mt-[-15vh] text-white h-[30vh]">
                <h1 className="text-5xl">GSAP & Framer Motion</h1>
                <p className="text-4xl text-zinc-300">
                  Animating pixels with purpose — creating seamless transitions,
                  fluid motions, and scroll-based storytelling that feel alive.
                </p>
              </div>
            </div>
          </div>
          <div className="lg:hidden block flex flex-col w-full h-fit p-5">
            <div className="lg:w-[20vw] w-[100%]  text-white ">
              <div className="flex items-center gap-5">
                <div className=" h-[50px] w-[50px] flex justify-center items-center rounded-full border border-pink-400 shadow-[0_0_15px_#ff00ff50] hover:shadow-[0_0_25px_#ff00ff] transition-all duration-300">
                  <i className="ri-bubble-chart-fill text-pink-400 text-3xl "></i>
                </div>
                <h1 className="text-5xl">GSAP & Framer Motion</h1>
              </div>
              <p className="text-4xl mt-5 text-zinc-300">
                Animating pixels with purpose — creating seamless transitions,
                fluid motions, and scroll-based storytelling that feel alive.
              </p>
            </div>
          </div>

          {/* Node.js & Express.js */}
          <div className="h-[50px] w-[50px] mt-[-4vh] relative lg:grid hidden flex justify-center items-center bg-zinc-900 rounded-full border border-green-400 shadow-[0_0_15px_#00ff0050] hover:shadow-[0_0_25px_#00ff00] transition-all duration-300">
            <i className="ri-nodejs-line text-green-400 text-3xl "></i>
            <div className="absolute top-[30vh] left-5  gap-10 flex">
              <div className="translate-y-[-50%] hidden lg:block scale-[210%]">
                <Svg />
              </div>
              <div className="lg:w-[20vw] w-[100vw] mt-[-15vh] text-white h-[30vh]">
                <h1 className="text-5xl">Node.js & Express.js</h1>
                <p className="text-4xl text-zinc-300">
                  From logic to execution — powering secure APIs, real-time
                  responses, and scalable backend architectures with precision.
                </p>
              </div>
            </div>
          </div>
          <div className="lg:hidden block flex flex-col w-full h-fit p-5">
            <div className="lg:w-[20vw] w-[100%]  text-white ">
              <div className="flex items-center gap-5">
                <div className=" h-[50px] w-[50px]  flex justify-center items-center rounded-full border border-green-400 shadow-[0_0_15px_#00ff0050] hover:shadow-[0_0_25px_#00ff00] transition-all duration-300">
                  <i className="ri-reactjs-fill text-cyan-400 text-3xl "></i>
                </div>
                <h1 className="text-5xl">Node.js & Express.js</h1>
              </div>
              <p className="text-4xl text-zinc-300">
                From logic to execution — powering secure APIs, real-time
                responses, and scalable backend architectures with precision.
              </p>
            </div>
          </div>

          {/* MongoDB & Mongoose */}
          <div className="h-[50px] w-[50px] mt-[-4vh] relative lg:grid hidden flex justify-center items-center bg-zinc-900 rounded-full border border-emerald-400 shadow-[0_0_15px_#00ffaa50] hover:shadow-[0_0_25px_#00ffaa] transition-all duration-300">
            <i className="ri-database-2-fill text-emerald-400 text-3xl "></i>
            <div className="absolute top-[-20vh] left-5 gap-10 flex">
              <div className="translate-y-[-50%]  hidden lg:block scale-[210%]">
                <Svg />
              </div>
              <div className="lg:w-[20vw] w-[100vw] mt-[-15vh] text-white h-[30vh]">
                <h1 className="text-5xl">MongoDB & Mongoose</h1>
                <p className="text-4xl text-zinc-300">
                  Crafting structured chaos — flexible, efficient, and optimized
                  data flows that make every query count.
                </p>
              </div>
            </div>
          </div>
          <div className="lg:hidden block flex flex-col w-full h-fit p-5">
            <div className="lg:w-[20vw] w-[100%]  text-white ">
              <div className="flex items-center gap-5">
                <div className=" h-[50px] w-[50px]  flex justify-center items-center rounded-full border border-emerald-400 shadow-[0_0_15px_#00ffaa50] hover:shadow-[0_0_25px_#00ffaa] transition-all duration-300">
                  <i className="ri-database-2-fill text-emerald-400 text-3xl "></i>
                </div>
                <h1 className="text-5xl">MongoDB & Mongoose</h1>
              </div>
              <p className="text-4xl mt-5 text-zinc-300">
                Crafting structured chaos — flexible, efficient, and optimized
                data flows that make every query count.
              </p>
            </div>
          </div>

          {/* Video Editing */}
          <div className="h-[50px] w-[50px] mt-[-4vh] relative lg:grid hidden flex justify-center items-center bg-zinc-900 rounded-full border border-yellow-400 shadow-[0_0_15px_#ffff0050] hover:shadow-[0_0_25px_#ffff00] transition-all duration-300">
            <i className="ri-clapperboard-fill text-yellow-400   text-3xl "></i>
            <div className="absolute top-[30vh] left-5 gap-10 flex">
              <div className="translate-y-[-50%] hidden lg:block scale-[210%]">
                <Svg />
              </div>
              <div className="lg:w-[20vw] w-[100vw] mt-[-15vh] text-white h-[30vh]">
                <h1 className="text-5xl">Video Editing</h1>
                <p className="text-4xl text-zinc-300">
                  Transforming visuals into stories — blending rhythm, motion,
                  and emotion using After Effects for cinematic perfection.
                </p>
              </div>
            </div>
          </div>
          <div className="lg:hidden block flex flex-col w-full h-fit p-5">
            <div className="lg:w-[20vw] w-[100%]  text-white ">
              <div className="flex items-center gap-5">
                <div className=" h-[50px] w-[50px]  flex justify-center items-center rounded-full border border-yellow-400 shadow-[0_0_15px_#ffff0050] hover:shadow-[0_0_25px_#ffff00] transition-all duration-300">
                  <i className="ri-clapperboard-fill text-yellow-400 text-3xl "></i>
                </div>
                <h1 className="text-5xl">Video Editing</h1>
              </div>
              <p className="text-4xl mt-5 text-zinc-300">
                Transforming visuals into stories — blending rhythm, motion, and
                emotion using After Effects for cinematic perfection.
              </p>
            </div>
          </div>
        </div>
      </div>

  );
};

export default Skills;
