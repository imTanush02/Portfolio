import React from "react";
import { GlowingEffect } from "/src/components/ui/glowing-effect";

const Main = () => {
  return (
    <div
      id="about"
      className="w-full py-10 lg:py-20 2xl:py-20 flex flex-col mt-10 items-center gap-3 px-5 sm:px-10 lg:px-20 2xl:px-20 bg-black text-white min-h-screen"
    >
      <h1 className="font-rogshire text-6xl sm:text-5xl lg:text-6xl 2xl:text-8xl text-zinc-300">
        About Myself
      </h1>
      <p className="font-rogshire text-zinc-300 text-2xl sm:text-3xl lg:text-4xl 2xl:text-5xl w-full sm:w-[80%] lg:w-[60%] 2xl:w-[45vw] text-center">
        I turn concepts into code, blending creativity and logic to shape
        meaningful digital experiences.
      </p>

      <div className="flex flex-col lg:flex-row gap-4 mt-6 w-full lg:w-[80%] 2xl:w-[60vw]">
        <div className="w-full lg:w-1/2 flex flex-col gap-4">
          <div className="bentoBox1 relative rounded-2xl">
            <GlowingEffect
              spread={40}
              glow={true}
              disabled={false}
              proximity={64}
              inactiveZone={0.01}
            />
            <div className="w-full h-[30vh] sm:h-[40vh]  lg:px-5 lg:py-2 lg:h-[60vh]  bg-zinc-900/20 relative">
              <div className="flex justify-between items-center h-16 w-full px-4 py-16 ">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl 2xl:text-5xl font-rogshire h-full flex items-center">
                  Where design speaks code, and every pixel has purpose.
                </h2>
                <div className="w-5 h-5  bg-white rounded-full p-6 flex items-center justify-center">
                  <i className="ri-arrow-right-up-line text-black text-xl sm:text-2xl"></i>
                </div>
              </div>
              <div className="relative w-full h-[calc(100%-4rem)]  px-4 sm:px-[1vw]">
                <p className="text-lg sm:text-xl lg:text-2xl 2xl:text-3xl text-[#FFFFFF] w-[90%] relative z-[99] font-rogshire leading-none">
                  I’m <span className="text-zinc-400 ">Tanush Singh</span>, a
                  <span className="text-zinc-400 "> MERN Stack Developer</span>
                  who blends creativity and logic to build immersive,
                  high-performance web experiences. From code to motion, every
                  detail reflects precision and passion.
                </p>
                <img
                  src="/assets/BentoLaptopScreen.png"
                  alt="Design and Code"
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50%] h-[80%] object-cover rounded-lg z-[9]"
                />
              </div>
            </div>
          </div>

          <div className="bentoBox2 relative rounded-2xl">
            <GlowingEffect
              spread={40}
              glow={true}
              disabled={false}
              proximity={64}
              inactiveZone={0.01}
            />
            <div className="w-full h-[40vh] sm:h-[50vh] rounded-2xl lg:px-5 lg:h-[70vh] 2xl:h-[70vh] bg-zinc-900/30 relative overflow-hidden">
              <div className="flex justify-between items-center h-16 w-full px-4  py-16 ">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl 2xl:text-5xl font-rogshire h-full flex items-center">
                  Hackathon Second Runner Up.
                </h2>
                <div className="w-5 h-5  bg-white rounded-full p-6 flex items-center justify-center">
                  <i className="ri-arrow-right-up-line text-black text-xl sm:text-2xl"></i>
                </div>
              </div>
              <div className="relative w-full h-[calc(100%-4rem)] px-4 sm:px-[1vw]">
                <p className="text-lg sm:text-xl lg:text-2xl 2xl:text-3xl text-[#FFFFFF] w-[90%] relative z-[99] font-rogshire leading-none">
                  I have participated in several hackathons, where I not only
                  showcased my skills but also secured victories. These
                  experiences have allowed me to push my limits, collaborate
                  with talented individuals, and develop innovative solutions
                  under pressure. Additionally, I have actively joined numerous
                  coding events, continuously learning and connecting with
                  like-minded enthusiasts to stay ahead in the tech world.
                </p>
                <img
                  src="/assets/SinglePhone.png"
                  alt="Design and Code"
                  className="2xl:mt-[3vw] opacity-50 lg:mt-[20vh] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[20%] lg:w-[60%] 2xl:w-[60%] h-auto max-h-[80%] object-contain rounded-lg z-[9]"
                />
              </div>
            </div>
          </div>

          <div className="bentoBox3 relative rounded-2xl">
            <GlowingEffect
              spread={40}
              glow={true}
              disabled={false}
              proximity={64}
              inactiveZone={0.01}
            />
            <div className="w-full h-[30vh] rounded-2xl sm:h-[40vh] lg:px-5  lg:h-[70vh] 2xl:h-[50vh] bg-zinc-900/20 relative overflow-hidden">
              <div className="flex justify-between items-center h-16 w-full px-4  py-10">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl 2xl:text-5xl font-rogshire h-full flex items-center">
                  Editing Journey.
                </h2>
                <div className="w-5 h-5  bg-white rounded-full p-6 flex items-center justify-center">
                  <i className="ri-arrow-right-up-line text-black text-xl sm:text-2xl"></i>
                </div>
              </div>
              <div className="relative w-full h-[calc(100%-4rem)] px-4 sm:px-[1vw]">
                <p className="text-lg sm:text-xl lg:text-2xl 2xl:text-3xl text-[#FFFFFF] w-[90%] relative z-[99] font-rogshire leading-none">
                  My editing journey began on{" "}
                  <span className="text-zinc-200">CapCut</span>, where I first
                  explored storytelling through visuals. Later, I leveled up
                  with <span className="text-zinc-200">Alight Motion</span> to
                  master motion blur and transitions. Now, with my PC setup, I
                  bring cinematic precision to life using{" "}
                  <span className="text-zinc-200">After Effects</span>, blending
                  visuals, rhythm, and emotion into every frame.
                </p>
                <img
                  src="https://imgs.search.brave.com/UrG3svUvr4u8kkszhJlptgXeooq5ORuRA-0xK2z-aMk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJhY2Nlc3Mu/Y29tL2Z1bGwvMzk1/NDAwNi5qcGc"
                  alt="Design and Code"
                  className="2xl:mt-[3vw] lg:mt-[20vh] opacity-50 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 lg:w-[60%] 2xl:w-[100%] h-auto max-h-[80%] object-contain rounded-lg z-[9]"
                  style={{ filter: 'saturate(0.2)' }}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/2 flex flex-col gap-4">
          <div className="bentoBox4 relative rounded-2xl">
            <GlowingEffect
              spread={40}
              glow={true}
              disabled={false}
              proximity={64}
              inactiveZone={0.01}
            />
            <div className="w-full h-[50vh] sm:h-[60vh] rounded-2xl overflow-hidden px-5 lg:h-[80vh] 2xl:h-[70vh] bg-zinc-900/30 relative">
              <div className="flex justify-between items-center h-16 w-full px-4  py-10">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl 2xl:text-5xl font-rogshire h-full flex items-center">
                  From India.
                </h2>
                <div className="w-5 h-5  bg-white rounded-full p-6 flex items-center justify-center">
                  <i className="ri-arrow-right-up-line text-black text-xl sm:text-2xl"></i>
                </div>
              </div>
              <div className="relative w-full h-[calc(100%-4rem)] px-4 sm:px-[1vw]">
                <p className="text-lg sm:text-xl lg:text-2xl 2xl:text-3xl text-[#FFFFFF] w-[80%] relative z-[99] font-rogshire leading-none">
                  From the vibrant heart of India, I code stories into reality.
                  Blending design and development, I craft immersive,
                  user-driven digital experiences — clean, elegant, and alive
                  with creativity and precision.
                </p>
                <img
                  src="/assets/Bentoplanet.png"
                  alt="Design and Code"
                  className="2xl:mt-[3vw] lg:mt-[20vh] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[20%] w-[100%] h-auto max-h-[100%] object-contain rounded-lg z-[9]"
                />
              </div>
            </div>
          </div>

          <div className="bentoBox5 relative rounded-2xl bg-[#E6E3E5]">
            <GlowingEffect
              spread={40}
              glow={true}
              disabled={false}
              proximity={64}
              inactiveZone={0.01}
            />
            <div className="w-full h-[45vh] sm:h-[30vh] rounded-2xl lg:h-[60vh] 2xl:h-[50vh] bg-zinc-[#EDEDED] relative">
              <div className="flex justify-between items-center h-16 w-full px-4 sm:px-[1vw] py-2 sm:py-[2vw]">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl 2xl:text-5xl font-rogshire h-full flex items-center text-[#08090A]">
                  Transform
                </h2>
                <div className="w-10 h-10 sm:w-14 sm:h-14 bg-[#141414] rounded-full flex items-center justify-center">
                  <i className="ri-arrow-right-up-line text-white text-xl sm:text-2xl"></i>
                </div>
              </div>
              <div className="flex justify-between items-center h-10 w-full px-4 sm:px-[1.2vw]">
                <h4 className="text-2xl sm:text-3xl lg:text-3xl 2xl:text-3xl font-rogshire flex items-center text-[#08090A] mb-[3vw]">
                  ideas into stunning realities.
                </h4>
              </div>
              <div className="relative w-full h-[calc(100%-4rem)] px-4 sm:px-[1vw]">
                <div className="rounded-xl border-[0.6px] border-black bg-transparent px-8 sm:px-14 py-2 text-[#08090A] text-2xl sm:text-3xl lg:text-4xl 2xl:text-4xl font-rogshire relative z-[99] flex items-center justify-center mt-[-1vw]">
                  Create ‧ Innovate ‧ Inspire
                </div>
                <img
                  src="/assets/Marshall.png"
                  alt="Design and Code"
                  className="mt-[1vw] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-auto max-h-[100%] object-contain rounded-lg z-[9]"
                />
              </div>
            </div>
          </div>

          <div className="bentoBox6 relative rounded-2xl">
            <GlowingEffect
              spread={40}
              glow={true}
              disabled={false}
              proximity={64}
              inactiveZone={0.01}
            />
            <div className="w-full h-[30vh] sm:h-[40vh] rounded-2xl lg:h-[60vh] 2xl:h-[60vh] bg-zinc-900/30 relative">
              <div className="flex justify-between items-center h-16 w-full px-4 sm:px-[1vw] py-10">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl 2xl:text-5xl font-rogshire h-full flex items-center">
                  Where Innovation Finds Form.
                </h2>
                <div className="w-10 h-10 sm:w-14 sm:h-14 bg-white rounded-full flex items-center justify-center">
                  <i className="ri-arrow-right-up-line text-black text-xl sm:text-2xl"></i>
                </div>
              </div>
              <div className="relative w-full h-[calc(100%-4rem)] px-4 sm:px-[1vw]">
                <p className="text-lg sm:text-xl lg:text-2xl 2xl:text-3xl text-[#FFFFFF] w-[90%] relative z-[99] font-rogshire leading-none">
                  Every line of code I write is shaped by design, emotion, and
                  intent. I don’t just build interfaces — I craft experiences
                  that connect, inspire, and leave a mark. It’s more than
                  development — it’s digital art in motion.
                </p>
                <img
                  src="/assets/BentoLaptopScreen.png"
                  alt="Design and Code"
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50%] h-[80%] object-cover rounded-lg z-[9]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
