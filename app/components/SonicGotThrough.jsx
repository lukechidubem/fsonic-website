import React from "react";

const SonicGotThrough = () => {
  return (
    <div
      id="about"
      className="lg:w-[100%] w-[100dvw] lg:h-[903px] h-[603px]  bg-indigo-600 flex justify-end items-end md:px-10 px-3"
    >
      <div className="flex flex-col gap-16 items-center">
        <div className="flex items-end ">
          <div className="lg:w-[450px] border-b-2 bg-white"></div>
          <div className=" text-right text-white xl:text-[57px] lg:text-[40px] text-[30px] font-['Literata Variable'] lg:leading-[46.17px] ">
            SONIC GOT THROUGH
          </div>
        </div>

        <div className="flex items-start lg:gap-6 gap-5">
          <div className="lg:w-[17px] lg:h-[17px] w-[30px] h-[10px] rounded-full border-2 border-yellow-300"></div>

          <div className="lg:w-[774px] h-[391px] text-neutral-100 lg:text-2xl text-xl font-normal font-['Satoshi'] leading-[28.80px] tracking-widest">
            Fantom Sonic, also known as Fsonic, the new meme coin on the Fantom
            (FTM) blockchain, is ready to revolutionize the FTM meme landscape.
            A product of the efforts of a well-known team, Fsonic aims to be the
            primary meme coin on FTM, created by degens for degens
          </div>
        </div>
      </div>
    </div>
  );
};

export default SonicGotThrough;
