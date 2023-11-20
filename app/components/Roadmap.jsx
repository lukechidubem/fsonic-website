import Image from "next/image";
import React from "react";

import Ball from "../../public/ball.png";

const Roadmap = () => {
  return (
    <div
      id="roadmap"
      className=" flex flex-col lg:h-[745px] my-20 mx-4 md:mx-10 bg-white rounded-[42px] shadow md:p-7 p-3"
    >
      <div className="flex items-end  justify-end mb-8">
        <div className="lg:w-[850px] h-1 border border-b-2 bg-[#5455FF]"></div>
        <div className=" text-right text-indigo-500 xl:text-[57px] lg:text-[40px] text-[30px]  font-[Inter]  leading-[46.17px]">
          ROADMAP
        </div>
      </div>

      <div className="flex items-center justify-end mt-12 flex-wrap">
        <div className="flex items-center md:gap-10 gap-3 my-3 xl:my-7">
          <Image src={Ball} alt="Roamap Item" />
          <div className="md:w-[450px] w-[250px] text-black text-xl font-normal font-['Satoshi'] md:leading-[23px]">
            1) Launch on 24.10
          </div>
        </div>

        <div className="flex items-center md:gap-10 gap-3 my-3 xl:my-7">
          <Image src={Ball} alt="Roamap Item" />
          <div className="md:w-[450px] w-[250px] text-black text-xl font-normal font-['Satoshi'] leading-[23px]">
            2) Equal Gauge | deep liquidity
          </div>
        </div>

        <div className="flex items-center md:gap-10 gap-3 my-3 xl:my-7">
          <Image src={Ball} alt="Roamap Item" />
          <div className="md:w-[450px] w-[250px] text-black text-xl font-normal font-['Satoshi'] leading-[23px]">
            3) Website
          </div>
        </div>

        <div className="flex items-center md:gap-10 gap-3 my-3 xl:my-7">
          <Image src={Ball} alt="Roamap Item" />
          <div className="md:w-[450px] w-[250px] text-black text-xl font-normal font-['Satoshi'] leading-[23px]">
            4) NFT dApp | NFT collections
          </div>
        </div>

        <div className="flex items-center md:gap-10 gap-3 my-3 xl:my-7">
          <Image src={Ball} alt="Roamap Item" />
          <div className="md:w-[450px] w-[250px] text-black text-xl font-normal font-['Satoshi'] leading-[23px]">
            5) Arcade Game
          </div>
        </div>

        <div className="flex items-center md:gap-10 gap-3 my-3 xl:my-7">
          <Image src={Ball} alt="Roamap Item" />
          <div className="md:w-[450px] w-[250px] text-black text-xl font-normal font-['Satoshi'] leading-[23px]">
            6) KekBook
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
