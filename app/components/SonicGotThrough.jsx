import React from "react";

import RingGif from "../../public/Ring.gif";
import FsonicWorldModal from "./FsonicNFTModal";

const SonicGotThrough = () => {
  return (
    <div
      id="about"
      className=" relative lg:w-[100%] w-[100dvw] lg:h-[953px] h-[953px]  bg-[#5353FB] flex justify-end items-end md:px-10 px-3"
    >
      <div className="flex flex-col gap-16 items-center">
        <div className="flex items-end z-10">
          <div className="lg:w-[450px] border-b-2 bg-white"></div>
          <div className="text-right text-white xl:text-[57px] lg:text-[40px] text-[30px] font-['Literata Variable'] lg:leading-[46.17px]">
            SONIC GOT THROUGH
          </div>
        </div>

        <div className="flex items-start lg:gap-6 gap-5">
          <div
            className="ringStyle ringStyle2 absolute flex items-end justify-end "
            style={{
              left: "0",
              bottom: "0",
              width: "50dvw",
              height: "100%",
            }}
          >
            <div
              style={{
                backgroundImage: `url(${RingGif.src})`,
                backgroundSize: "fit",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                width: "100dvw",
                height: "100%",
              }}
              className=" flex items-end justify-start "
            >
              {/*  <img
                src="through.png"
                alt="Image"
                className=""
                style={{
                  width: "455px",
                  height: "455px",
                  opacity: "0.55",
                  // position: "absolute",
                  // left: 0,
                  // bottom: 0,
                  // marginTop: "30vh",
                }}
              />
             */}
            </div>
          </div>
          <div className="lg:w-[17px] lg:h-[17px] w-[30px] h-[10px] rounded-full border-2 border-yellow-300"></div>

          <div className="z-10 lg:w-[774px] h-[691px] text-neutral-100 lg:text-2xl text-xl font-normal font-['Satoshi'] leading-[28.80px] tracking-widest">
            Fantom Sonic, also known as Fsonic, the new meme coin on the Fantom
            (FTM) blockchain, is ready to revolutionize the FTM meme landscape.
            A product of the efforts of a well-known team, Fsonic aims to be the
            primary meme coin on FTM, created by degens for degens
          </div>
        </div>
      </div>
      {/* <FsonicWorldModal /> */}
    </div>
  );
};

export default SonicGotThrough;
