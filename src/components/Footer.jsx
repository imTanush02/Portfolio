import React, { useEffect, useState, useRef } from "react";

const Footer = () => {
  const [rotate, setRotate] = useState(0);
  const buttonRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!buttonRef.current) return;

      const rect = buttonRef.current.getBoundingClientRect();
      const buttonCenterX = rect.left + rect.width / 2;
      const buttonCenterY = rect.top + rect.height / 2;

      // Calculate distance from button center to mouse
      const deltaX = e.clientX - buttonCenterX;
      const deltaY = e.clientY - buttonCenterY;

      // Calculate angle and add 45 degrees to account for the default angle of the icon
      const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI) + 45;

      // Smoothing the rotation
      const smoothingFactor = 0.15;
      const targetRotation = angle;
      const currentRotation = rotate;
      const newRotation =
        currentRotation + (targetRotation - currentRotation) * smoothingFactor;

      setRotate(newRotation);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [rotate]);

  return (
    <div
      id="contact"
      className="relative min-h-[100vh] lg:min-h-[200vh]"
      style={{
        clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)",
      }}
    >
      <div className="fixed h-[100vh] w-full bottom-0">
        <div className="w-full flex items-center bottom-0 min-h-screen font-rewritten bg-white text-black">
          <div className="h-auto lg:h-[75vh] 2xl:h-[70vh] border-y-[2px] relative border-black p-5 lg:p-8 2xl:p-10 w-full flex flex-col justify-between">
            {/* Top section */}
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
              {/* Top text */}
              <h1 className="lg:w-[50vw] w-full text-sm lg:text-lg 2xl:text-xl mb-6 lg:mb-0">
                Designed with passion to deliver seamless experiences. Stay
                connected with us for updates and insights.
              </h1>

              {/* Social links - Mobile top placement */}
              <div className="lg:hidden w-full h-auto p-3 mb-6 flex flex-col gap-4">
                <div className="flex flex-wrap gap-3 justify-start">
                  {[
                    { text: "INSTAGRAM", link: "https://www.instagram.com/tanushhh4/" },
                    { text: "LINKED IN", link: "https://www.linkedin.com/in/tanush-singh-" },
                  ].map((item) => (
                    <a
                      key={item.text}
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border-t-[2px] flex gap-2 justify-center items-center 
                                         group w-auto border-zinc-400 px-3 py-1
                                         text-xs"
                    >
                      {item.text}
                      <div className="relative text-zinc-400 overflow-hidden">
                        <span className="block transition-all duration-300 group-hover:translate-x-[150%] group-hover:translate-y-[-100%]">
                          <i className="ri-arrow-right-up-line text-sm"></i>
                        </span>
                      </div>
                    </a>
                  ))}
                </div>
                <div className="flex flex-wrap gap-3 justify-start">
                  {[
                    { text: "CONTACT", link: "mailto:tanushsingh843@gmail.com" },
                    { text: "GITHUB", link: "https://github.com/imTanush02" },
                  ].map((item) => (
                    <a
                      key={item.text}
                      href={item.link}
                      target={item.text === "CONTACT" ? "_self" : "_blank"}
                      rel={item.text === "CONTACT" ? "" : "noopener noreferrer"}
                      className="border-t-[2px] flex gap-2 justify-center items-center 
                                         group w-auto border-zinc-400 px-3 py-1
                                         text-xs"
                    >
                      {item.text}
                      <div className="relative text-zinc-400 overflow-hidden">
                        <span className="block transition-all duration-300 group-hover:translate-x-[150%] group-hover:translate-y-[-100%]">
                          <i className="ri-arrow-right-up-line text-sm"></i>
                        </span>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Main heading section */}
            <div className="flex flex-col">
              {/* Main heading */}
              <h1 className="w-full text-3xl sm:text-4xl md:text-5xl lg:text-[12vh] xl:text-[16vh] 2xl:text-[20vh] leading-tight lg:leading-normal">
                LET'S MAKE CREATIVE
              </h1>

              {/* Things + Button section */}
              <div className="text-3xl sm:text-3xl md:text-4xl lg:text-[12vh] xl:text-[16vh] 2xl:text-[20vh] items-center flex flex-wrap gap-3 lg:gap-5 ">
                <h1 className="leading-tight lg:leading-normal">THINGS</h1>
                <button
                  ref={buttonRef}
                  className="h-[5vh] w-[5vh]  lg:h-[15vh] lg:w-[15vh] xl:h-[18vh] xl:w-[18vh] 2xl:h-[20vh] 2xl:w-[20vh] 
                     group flex items-center justify-center text-3xl sm:text-4xl lg:text-5xl xl:text-6xl 2xl:text-8xl 
                     text-white rounded-lg bg-blue-400 mt-2 lg:mt-0"
                >
                  <i
                    style={{
                      transform: `rotate(${rotate}deg)`,
                      transition: "transform 0.01s linear",
                      transformOrigin: "center",
                      display: "inline-block",
                    }}
                    className="ri-arrow-right-up-line"
                  />
                </button>
              </div>
            </div>

            {/* Social links - Desktop placement */}
            <div className="hidden lg:flex w-[40vw] h-[30vh] p-5 lg:p-8 2xl:p-10 bottom-0 flex-col justify-start lg:justify-center right-0 gap-4 lg:gap-10 absolute">
              <div className="flex flex-wrap gap-4 lg:gap-5">
                {[
                  { text: "INSTAGRAM", link: "https://www.instagram.com/tanushhh4/" },
                  { text: "LINKED IN", link: "https://www.linkedin.com/in/tanush-singh-" },
                ].map((item) => (
                  <a
                    key={item.text}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-t-[2px] flex gap-2 lg:gap-3 justify-center items-center 
                                         group w-auto lg:w-[12vw] border-zinc-400 px-3 lg:px-3 py-1
                                         text-sm lg:text-base 2xl:text-xl"
                  >
                    {item.text}
                    <div className="relative text-zinc-400 overflow-hidden">
                      <span className="block transition-all duration-300 group-hover:translate-x-[150%] group-hover:translate-y-[-100%]">
                        <i className="ri-arrow-right-up-line text-lg"></i>
                      </span>
                      <span className="absolute top-0 left-0 translate-x-[-150%] transition-all duration-300 translate-y-full group-hover:translate-x-0 group-hover:translate-y-0">
                        <i className="ri-arrow-right-up-line text-lg"></i>
                      </span>
                    </div>
                  </a>
                ))}
              </div>
              <div className="flex flex-wrap gap-4 lg:gap-5">
                {[
                  { text: "CONTACT", link: "mailto:tanushsingh843@gmail.com" },
                  { text: "GITHUB", link: "https://github.com/imTanush02" },
                ].map((item) => (
                  <a
                    key={item.text}
                    href={item.link}
                    target={item.text === "CONTACT" ? "_self" : "_blank"}
                    rel={item.text === "CONTACT" ? "" : "noopener noreferrer"}
                    className="border-t-[2px] flex gap-2 lg:gap-3 justify-center items-center 
                                         group w-auto lg:w-[12vw] border-zinc-400 px-3 lg:px-3 py-1
                                         text-sm lg:text-base 2xl:text-xl"
                  >
                    {item.text}
                    <div className="relative text-zinc-400 overflow-hidden">
                      <span className="block transition-all duration-300 group-hover:translate-x-[150%] group-hover:translate-y-[-100%]">
                        <i className="ri-arrow-right-up-line text-lg"></i>
                      </span>
                      <span className="absolute top-0 left-0 translate-x-[-150%] transition-all duration-300 translate-y-full group-hover:translate-x-0 group-hover:translate-y-0">
                        <i className="ri-arrow-right-up-line text-lg"></i>
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Footer bottom */}
          <div className="w-full flex absolute bottom-0 items-center px-5 lg:px-8 2xl:px-10 h-[8vh] lg:h-[12vh]">
            <h1 className="text-xs sm:text-sm lg:text-base 2xl:text-lg">
              &copy; 2025 Copyrights
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;