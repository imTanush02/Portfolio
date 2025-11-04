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
      className="relative min-h-[200vh] "
      style={{
        clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)",
      }}
    >
      <div className="fixed h-[100vh] w-full bottom-0">
        <div className="w-full flex items-center bottom-0 min-h-screen font-rewritten bg-white text-black">
          <div className="h-[75vh] 2xl:h-[70vh] border-y-[2px] relative border-black p-5 lg:p-8 2xl:p-10 w-full">
            {/* Top text */}
            <h1 className="w-[50vw] lg:text-lg 2xl:text-xl">
              Designed with passion to deliver seamless experiences. Stay
              connected with us for updates and insights.
            </h1>

            {/* Main heading */}
            <h1 className="text-[15vh] 2xl:w-[100vw] lg:text-[23vh] 2xl:text-[20vh]">
              WE MAKE CREATIVE
            </h1>

            {/* Things + Button section */}
            <div className="text-[15vh] lg:text-[23vh] 2xl:text-[20vh] mt-[-8vh] lg:mt-[-10vh] items-center flex gap-5">
              <h1>THINGS</h1>
              <button
                ref={buttonRef}
                className="h-[15vh] w-[15vh] lg:h-[18vh] lg:w-[18vh] 2xl:h-[20vh] 2xl:w-[20vh] 
                     group flex items-center justify-center text-6xl lg:text-7xl 2xl:text-8xl 
                     text-white rounded-lg bg-blue-400"
              >
                <i
                  style={{
                    transform: `rotate(${rotate}deg)`,
                    transition: "transform 0.01s linear", // Even faster for accuracy
                    transformOrigin: "center",
                    display: "inline-block",
                  }}
                  className="ri-arrow-right-up-line"
                />
              </button>
            </div>

            <div className="w-[40vw] h-[30vh] p-5 lg:p-8 2xl:p-10 bottom-0 flex flex-col gap-8 lg:gap-10 right-0 absolute">
              <div className="flex gap-4 lg:gap-5">
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
                                         group w-[12vw] border-zinc-400 px-2 lg:px-3 
                                         text-sm lg:text-base 2xl:text-xl"
                  >
                    {item.text}
                    <div className="relative text-zinc-400  overflow-hidden">
                      <span className="block transition-all duration-300 group-hover:translate-x-[150%] group-hover:translate-y-[-100%]">
                        <i class="ri-arrow-right-up-line text-lg"></i>
                      </span>
                      <span className="absolute top-0 left-0 translate-x-[-150%] transition-all duration-300 translate-y-full group-hover:translate-x-0  group-hover:translate-y-0">
                        <i class="ri-arrow-right-up-line text-lg"></i>
                      </span>
                    </div>
                  </a>
                ))}
              </div>
              <div className="flex gap-4 lg:gap-5">
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
                                         group w-[12vw] border-zinc-400 px-2 lg:px-3
                                         text-sm lg:text-base 2xl:text-xl"
                  >
                    {item.text}
                    <div className="relative text-zinc-400  overflow-hidden">
                      <span className="block transition-all duration-300 group-hover:translate-x-[150%] group-hover:translate-y-[-100%]">
                        <i class="ri-arrow-right-up-line text-lg"></i>
                      </span>
                      <span className="absolute top-0 left-0 translate-x-[-150%] transition-all duration-300 translate-y-full group-hover:translate-x-0  group-hover:translate-y-0">
                        <i class="ri-arrow-right-up-line text-lg"></i>
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="w-full flex absolute bottom-0 items-center px-5 lg:px-8 2xl:px-10 h-[10vh] lg:h-[12vh]">
            <h1 className="text-sm lg:text-base 2xl:text-lg">
              {" "}
              &copy; 2025 Copyrights{" "}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
