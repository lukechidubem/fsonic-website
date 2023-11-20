import React from "react";
import Spooky from "../../public/addicted.png";
import Logo from "../../public/smallRING.png";
import Image from "next/image";

const AlmostYours = () => {
  return (
    <div
      id="buy-now"
      className=" flex flex-col lg:h-[745px] lg:mb-32  lg:mt-32 my-20 lg:mx-10 mx-2 md:mx-5 bg-white rounded-[42px] shadow lg:p-7 p-3"
    >
      <div className="flex items-end  justify-end mb-4">
        <div className="lg:w-[750px]  h-1 border border-b-2 bg-[#5455FF]"></div>
        <div className=" text-right text-indigo-500 xl:text-[57px] lg:text-[40px] text-[30px] font-[Inter]  lg:leading-[46.17px]">
          IS ALMOST YOURS
        </div>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-center gap-5 lg:gap-32 w-[100%] h-full">
        <div>
          <div
            className="md:w-[429px] h-[304px] w-[95%]"
            style={{
              backgroundImage: `url(${Spooky.src})`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              boxShadow: "1px 9px 0px -1px rgba(0,0,0,0.1)",
            }}
          ></div>

          <div className="flex items-center gap-6 my-10">
            <div className="w-[17px] h-[17px] rounded-full border-2 border-red-500"></div>

            <div className="">
        <span className="text-red-500 text-indigo-500 md:text-2xl text-xl font-bold font-['Satoshi'] md:leading-[28.80px] tracking-wider">
  WARNING:
</span>
              <span className="text-indigo-500 text-xl md:text-2xl font-normal font-['Satoshi'] md:leading-[28.80px] tracking-wider">
                {" "}
                Addicted to the Game !
              </span>
            </div>
          </div>
        </div>

        <div>
          <div className="relative">
            <div
              className="z-10 absolute -top-3 -left-3   w-[323px] h-[323px] bg-[#5455FF] flex items-center justify-center"
              style={{ boxShadow: "-1px 10px 4px -4px rgba(0,0,0,0.5)" }}
            >
              <Image src={Logo} alt="" height={225} width={237} />
            </div>

            <div
              className=" w-[323px] h-[323px] bg-black"
              style={{
                boxShadow: "3px 5px 4px 3px rgba(0,0,0,0.5)",
              }}
            ></div>
          </div>

          <div className="flex items-center w-full justify-center my-6">
            <button
              style={{ boxShadow: "12px 13px 0px -3px rgba(0,0,0,0.91)" }}
              className="w-[262px] h-[55px] bg-[#5455FF] text-center text-neutral-100 text-[32px] font-bold font-['Satoshi'] leading-relaxed"
            >
              <a href="https://app.firebird.finance/swap" target="_blank" >BUY NOW</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlmostYours;
