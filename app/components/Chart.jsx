import React from "react";
import Tv from "../../public/tv.png";

const Chart = () => {
  return (
    <div className="flex flex-col items-center justify-center  bg-[#5353FB] mb-10 py-6 lg:py-16 lg:px-10 px-4">
      <div
        id="chart"
        className="lg:h-[737px] lg:w-[80%] w-[95dvw] rounded-[25px] lg:p-10 p-5 mb-10"
        style={{
          backgroundImage: `url(${Tv.src})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          //   position: "relative",
        }}
      >
        <div className="flex items-end  justify-end mb-10">
          <div className="lg:w-[800px] h-1 border border-b-2 bg-[#5455FF]"></div>
          <div className=" text-right text-indigo-500 xl:text-[57px] lg:text-[40px] text-[30px] font-[Inter]  leading-[46.17px]">
            CHART
          </div>
        </div>

        <div className="flex items-center justify-center ">
          <div>
            <div className="xl:w-[704px] lg:h-[452px] w-[100%] h-[420px] bg-neutral-700 mt-10 rounded-lg">
              <iframe
                src="https://dexscreener.com/fantom/0x767520fa98e1e24b3326fd42b24c9dcfce8bce14?embed=1&trades=0&info=1&theme=dark"
                title="External Content"
                width="100%"
                height="100%"
                className="rounded-lg"
              />
            </div>
            <div className="flex items-center gap-6 my-5">
              <div className="w-[17px] h-[17px] rounded-full border-2 border-indigo-500"></div>

              <div className=" text-indigo-500 text-2xl font-normal font-['Satoshi'] leading-[28.80px] tracking-widest">
                Keep your eyes on the prize !
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="tokenomics" className="md:mt-28 mt-10 w-[100%]">
        <div className="flex items-end  justify-end mb-10">
          <div className="lg:w-[850px]    border-b-2 bg-amber-100"></div>
          <div className=" text-right text-amber-100 xl:text-[57px] lg:text-[40px] text-[30px] font-[Inter]  lg:leading-[46.17px]">
            TOKENOMICS
          </div>
        </div>

        <div className="text-4xl text-amber-100">2,410 Tokens</div>

        <div className="md:mt-24 mt-10 flex items-center sm:justify-between  justify-center flex-wrap">
          <div className="my-8">
            <div
              className="mb-12 border-l-8 border-t-8 border-black w-80 h-[179px] flex items-center justify-center"
              style={{
                boxShadow: "-8px -8px 3px 5px rgba(56,50,50,0.57)",
              }}
            >
              <p
                className="bg-amber-100 p-2 font-['Satoshi'] text-2xl min-w-[80%] text-center"
                style={{ boxShadow: "6px 7px 5px 0px rgba(0,0,0,0.75)" }}
              >
                Liquidity <span className="text-indigo-800 ml-5 ">30%</span>
              </p>
            </div>
            <div
              className="mt-12 border-r-8 border-b-8 border-black w-80 h-[179px] flex items-center justify-center"
              style={{
                boxShadow: "8px 8px 3px 5px rgba(56,50,50,0.57)",
              }}
            >
              <p
                className="bg-amber-100 p-2 font-['Satoshi'] text-2xl min-w-[80%] text-center"
                style={{ boxShadow: "-6px -7px 5px 0px rgba(0,0,0,0.75)" }}
              >
                NFT dapp
                <span className="text-indigo-800 ml-5">15%</span>
              </p>
            </div>
          </div>

          <div className="my-8">
            <div
              className="mb-12 border-l-8 border-t-8 border-black w-80 h-[179px] flex items-center justify-center"
              style={{
                boxShadow: "-8px -8px 3px 5px rgba(56,50,50,0.57)",
              }}
            >
              <p
                className="bg-amber-100 p-2 font-['Satoshi'] text-2xl min-w-[80%] text-center "
                style={{ boxShadow: "6px 7px 5px 0px rgba(0,0,0,0.75)" }}
              >
                Marketing <span className="text-indigo-800 ml-5">10%</span>
              </p>
            </div>
            <div
              className="mt-12 border-r-8 border-b-8 border-black w-80 h-[179px] flex items-center justify-center"
              style={{
                boxShadow: "8px 8px 3px 5px rgba(56,50,50,0.57)",
              }}
            >
              <p
                className="bg-amber-100 p-2 font-['Satoshi'] text-2xl min-w-[80%] text-center"
                style={{ boxShadow: "-6px -7px 5px 0px rgba(0,0,0,0.75)" }}
              >
                Arcade game <span className="text-indigo-800 ml-5">15%</span>
              </p>
            </div>
          </div>

          <div className="my-8">
            <div
              className="mb-12 border-l-8 border-t-8 border-black w-80 h-[179px] flex items-center justify-center"
              style={{
                boxShadow: "-8px -8px 3px 5px rgba(56,50,50,0.57)",
              }}
            >
              <p
                className="bg-amber-100 p-2 font-['Satoshi'] text-2xl min-w-[80%] text-center"
                style={{ boxShadow: "6px 7px 5px 0px rgba(0,0,0,0.75)" }}
              >
                Team <span className="text-indigo-800 ml-5">15%</span>
              </p>
            </div>
            <div
              className="mt-12 border-r-8 border-b-8 border-black w-80 h-[179px] flex items-center justify-center"
              style={{
                boxShadow: "8px 8px 3px 5px rgba(56,50,50,0.57)",
              }}
            >
              <p
                className="bg-amber-100 p-2 font-['Satoshi'] text-2xl min-w-[80%] text-center"
                style={{ boxShadow: "-6px -7px 5px 0px rgba(0,0,0,0.75)" }}
              >
                Kekbook <span className="text-indigo-800 ml-5">15%</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chart;
