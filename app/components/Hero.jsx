import React from "react";
import Hero1 from "../../public/fsonic-hero1.gif";
import Hero2 from "../../public/fsonic-hero2.gif";
import Hero3 from "../../public/fsonic-hero3.gif";

import Image from "next/image";

const Hero = () => {
  return (
    <div
      id="home"
      className=" bg-[#F5EFCE] md:pt-8 pt-4 pb-8 h-[100dvh] mb-6 lg:mb-24 w-[95dvw]"
    >
      <div className="flex flex-col xl:flex-row  items-center justify-center w-[100%] h-[75dvh]  sm:h-[80dvh] md:mt-6  mt-3 relative">
        <div className="xl:absolute hidden xl:block z-10 2xl:left-72 left-36 bottom-44">
          <div
            className="absolute top-0 z-10 w-[311px] h-[196px]"
            style={{
              backgroundImage: `url(${Hero1.src})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              position: "relative",
              boxShadow: "13px 4px 2px 2px rgba(31,25,25,0.47)",
            }}
          ></div>
          <div
            className="absolute top-4 left-3 w-[311px] h-[196px] bg-black"
            style={{ boxShadow: "1px 15px 2px 1px rgba(31,25,25,0.47)" }}
          ></div>
        </div>

        <div className="absolute">
          <div
            className="md:w-[642px] z-[2] sm:h-[500px] w-[90dvw] h-[390px]"
            style={{
              backgroundImage: `url(${Hero2.src})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              position: "relative",
              boxShadow: "19px 24px 3px -3px rgba(25,23,23,0.56)",
            }}
          ></div>

          <div
            className="absolute top-12 z-0 left-16 sm:w-[595px] sm:h-[470px] w-[80dvw] h-[370px] bg-black"
            //   style={{ boxShadow: "1px 15px 2px 1px rgba(31,25,25,0.47)" }}
          ></div>
        </div>

        <div className="absolute z-10 2xl:right-72 right-36 bottom-44 hidden xl:block">
          <div
            className="absolute z-10 top-0  w-[435px] h-[304px]"
            style={{
              backgroundImage: `url(${Hero3.src})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              position: "relative",
              boxShadow: "19px 23px 3px -3px rgba(31,25,25,0.47)",
            }}
          ></div>

          <div
            className="absolute top-8 left-3 w-[435px] h-[290px] bg-black"
            style={{ boxShadow: "1px 15px 2px 1px rgba(31,25,25,0.47)" }}
          ></div>
        </div>
      </div>
      <div className="flex items-center md:w-full w-[90dvw]  justify-center">
        <button
          style={{ boxShadow: "12px 13px 0px -3px rgba(0,0,0,0.91)" }}
          className="w-[262px] h-[55px] bg-[#5455FF] text-center text-neutral-100 text-[32px] font-bold font-['Satoshi'] leading-relaxed"
        >
          <a href="h">BUY NOW</a>
        </button>
      </div>
    </div>
  );
};

export default Hero;
