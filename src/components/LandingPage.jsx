import React from "react";
import { HoverBorderGradientDemo } from "../Functions/HoverBorderGradient";

const LandingPage = () => {
  return (
    <div className="p-3 sm:p-5 md:p-10">
      <div className="text-white w-full rounded-lg border-zinc-800 font-rogshire border-b-[1.5px] border-x-[1.5px] min-h-[70vh] sm:min-h-[80vh] lg:min-h-[90vh] bg-transparent">
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center w-full px-3 sm:px-5 lg:px-10 py-3 sm:py-5 gap-3 sm:gap-0">
          <a
            href="/Tanush Singh.pdf"
            download="Tanush_Singh_Resume.pdf"
            className="bg-white px-4 py-2 lg:px-8 text-xl lg:text-3xl text-black rounded-lg inline-block cursor-pointer hover:bg-zinc-100 transition-colors duration-300"
          >
            RESUME
          </a>

          <div className="flex text-zinc-300 text-xl lg:text-3xl gap-3 lg:gap-10">
            {[
              { text: "About", id: "about" },
              { text: "Works", id: "works" },
              { text: "Contact", id: "contact" },
            ].map((item, idx) => (
              <button
                key={idx}
                className="relative group overflow-hidden cursor-pointer"
                onClick={() => {
                  const element = document.getElementById(item.id);
                  if (element) {
                    element.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                  }
                }}
              >
                <span className="block transition-all duration-300 group-hover:translate-y-[-100%]">
                  {item.text}
                </span>
                <span className="absolute top-0 left-0 text-zinc-400 transition-all duration-300 translate-y-full group-hover:translate-y-0">
                  {item.text}
                </span>
                <div className="h-[2px] w-full bg-zinc-500 scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100"></div>
              </button>
            ))}
          </div>
        </div>

        {/* Services Section */}
        <div className="flex flex-col text-2xl lg:text-4xl text-zinc-300 ml-5 lg:ml-10 mt-3 py-5 px-10 lg:px-20">
          <h1 className="-mb-2 lg:-mb-4">—FULLSTACK DEVELOPER</h1>
          <h1 className="-mb-2 lg:-mb-4">—FREELANCER</h1>
          <h1>—VIDEO EDITOR</h1>
        </div>

        {/* Main Content Section */}
        <div className="flex w-full relative justify-start h-[30vh] lg:h-[40vh] text-zinc-300 items-center">
          <div className="w-1/4 p-5 lg:p-10 flex font-light text-lg lg:text-2xl flex-col gap-3 lg:gap-4">
            <a
              href="https://www.linkedin.com/in/tanush-singh-"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors duration-300"
            >
              <i className="ri-linkedin-fill"></i>
            </a>
            <a
              href="https://www.instagram.com/tanushhh4/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors duration-300"
            >
              <i className="ri-instagram-line"></i>
            </a>
            <a
              href="https://github.com/imTanush02"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors duration-300"
            >
              <i className="ri-github-line"></i>
            </a>
          </div>
          <div className="w-1/2 text-[12vh] lg:text-[30vh] flex flex-col justify-center h-full">
            <h1 className="mb-[-12vh] lg:mb-[-26vh] relative">
              Web{" "}
              <span className="text-zinc-500 ml-2 lg:ml-4 absolute z-[9]">
                {" "}
                Designer
              </span>
            </h1>
            <h1>
              <span className="text-zinc-500">&</span> Developer
            </h1>
            <HoverBorderGradientDemo />
          </div>
          <div className="w-[10%] h-full bg-zinc-300"></div>
          <div className="w-[5%] mt-[15vh] lg:mt-[30vh] h-[5vh] lg:h-[10vh] bg-zinc-300"></div>

          <div className="absolute right-0 lg:right-[-3%] mt-[2%] lg:mt-[4%] 2xl:mt-[8%] pointer-events-none w-1/2 lg:w-[55%] 2xl:w-[48%]">
            <img src="/assets/Modelimg.png" alt="" className="w-full h-auto" />
          </div>
        </div>

        {/* Footer Section */}
        <div className="flex w-full mt-3 h-[8vh] lg:h-[10vh] justify-center items-center">
          <div className="w-[20%] lg:w-[10%] h-full ml-[30vw] lg:ml-[35vw] bg-zinc-300"></div>
        </div>

        <div className=" text-white mt-[10vh] relative 2xl:top-[-4vh] 2xl:mt-[20vh] lg:top-[-6vh] lg:mt-[25vh] items-center text-4xl lg:text-6xl">
          <h1 className="font-rewritten absolute">CREATIVE</h1>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
