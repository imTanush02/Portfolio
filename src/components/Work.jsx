import React, { useEffect, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";
gsap.registerPlugin(ScrollTrigger);

const Work = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const works = [
    {
      sno: "01",
      name: "XPLODE",
      text: "XPLODE redefines gaming discovery with smooth UI, dynamic visuals, and power.",
      vid: "/videos/Xplode.mp4",
      link: "https://xplode-kappa.vercel.app/",
    },
    {
      sno: "02",
      name: "CYPHERS",
      text: "Whether it's motion, interaction, or depth — Cyphers perfects them all.",
      vid: "/videos/Cyphers.mp4",
      link: "https://cyphers-final-round.vercel.app/",
    },
    {
      sno: "03",
      name: "MARSHALL",
      text: "Whether you're animating UI, SVG, or rebuilding Marshall — Cyphers crafts magic.",
      vid: "/videos/Marshall.mp4",
      link: "https://skillvarz-round2-cyphers-ns9j.vercel.app/",
    },
    {
      sno: "04",
      name: "SHADOWS",
      text: "Whether you're animating UI, SVG, or launching Assassin's Creed Shadows.",
      vid: "/videos/Shadows.mp4",
      link: "https://skillvarz-team-cyphers.vercel.app/",
    },
    {
      sno: "05",
      name: "EDITORS AT WORK",
      text: "Whether it's crafting sleek UI, fluid animations, or building Editors at Work — creativity drives everything.",
      vid: "/videos/EAW.mp4",
      link: "https://editors-at-work.vercel.app/",
    },
    {
      sno: "06",
      name: "CYBERPUNK",
      text: "Whether it's crafting sleek UI, fluid animations, or building a Cyberpunk world in Three.js — pure fun.",
      vid: "/videos/Cyber Punk.mp4",
      link: "https://3-js-one.vercel.app/",
    },
  ];

  useEffect(() => {
    // Only apply animation on desktop (lg screens and above)
    if (windowWidth < 1024) {
      // For mobile: simple layout without animation
      gsap.utils.toArray(".work-item").forEach((item, i) => {
        gsap.set(item, { 
          y: 0, 
          rotate: 0, 
          opacity: 1,
          position: 'relative',
          zIndex: 1
        });
      });
      return;
    }

    // Desktop animation
    let yValue;
    if (windowWidth > 1440) {
      yValue = 220; // Desktop
    } else if (windowWidth > 1305) {
      yValue = 120; // 15-inch laptop
    } else {
      yValue = 220; // Smaller laptops
    }

    gsap.utils.toArray(".work-item").forEach((item, i) => {
      gsap.set(item, { zIndex: works.length - i });

      gsap.to(item, {
        y: yValue * i, // Use dynamic y value
        rotate: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: item,
          start: "top 50%",
          end: "bottom 20%",
          scrub: 0.3,
        },
      });
    });

    ScrollTrigger.refresh();
  }, [windowWidth]);

  return (
    <div
      id="works"
      className="w-full lg:h-[220vh] relative font-rogshire mt-[100%] lg:mt-20 min-h-screen bg-black text-white p-5 lg:p-10 overflow-hidden"
    >
      <h1 className="text-6xl lg:text-8xl font-rogshire text-center lg:text-start text-zinc-300">
        Best Works
      </h1>
      
      <div className="w-full mt-10 rounded-2xl duration-300 flex flex-col gap-8 lg:gap-5">
        {works.map((work, idx) => (
          <Link to={work.link}
            key={idx}
            className="work-item w-full lg:rotate-[-5deg] border-b-[1.5px] lg:border-b-[1.5px] 2xl:mt-5 px-3 lg:px-5 py-3 lg:py-1 border-zinc-600 rounded-xl h-auto lg:h-[25vh] flex flex-col lg:flex-row bg-black relative lg:absolute left-0"
            style={{
              transformOrigin: "center", 
            }}
          >
            {/* Mobile Layout */}
            <div className="lg:hidden flex flex-col w-full">
              {/* Header with number and name */}
              <div className="flex justify-between items-center w-full mb-3">
                <div className="text-2xl italic text-zinc-400">
                  {work.sno}
                </div>
                <div className="text-xl font-bold text-right">
                  {work.name}
                </div>
              </div>
              
              {/* Video */}
              <div className="w-full h-40 mb-3">
                <video
                  className="h-full w-full object-cover rounded-lg"
                  autoPlay
                  loop
                  muted
                  playsInline
                >
                  <source src={work.vid} type="video/mp4" />
                </video>
              </div>
              
              {/* Description */}
              <div className="w-full text-sm text-zinc-300 leading-relaxed">
                {work.text}
              </div>
            </div>

            {/* Desktop Layout */}
            <div className="hidden lg:flex w-[10%] lg:w-[5%] text-end text-6xl italic h-full items-center justify-end">
              {work.sno}
            </div>
            <div className="hidden lg:flex w-[40%] lg:w-[20%] p-2 lg:p-5 text-6xl h-full items-center">
              {work.name}
            </div>
            <div className="hidden lg:flex w-[25%] p-5 items-center text-2xl h-full">
              {work.text}
            </div>
            <div className="hidden lg:flex w-[25%] p-5 items-center text-2xl h-full">
              {work.desc}
            </div>
            <div className="hidden lg:flex w-[50%] lg:w-[25%] text-6xl h-full">
              <video
                className="h-full w-full object-cover"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src={work.vid} type="video/mp4" />
              </video>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Work;