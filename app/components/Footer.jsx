import React from "react";
import FAQ from "./FAQ";
import MainFooter from "./MainFooter";
import FaqBg2 from "../../public/F_OH3VQWEAA6d-v-transformed.png";
import FaqBg3 from "../../public/F-fDwFdW4AAn-nd-transformed.png";

const Footer = () => {
  return (
    <div
      className="relative"
      style={{
        // background: "linear-gradient(6deg,#5353fb 10%, #f5efce 90%)",
        background: "linear-gradient(0deg,#5353fb 10%, #f5efce 90%)",
      }}
    >
      <div
        
         
      
        className="absolute  h-40 w-40  md:w-64 md:h-64"
      ></div>

      <div
        style={{
          backgroundImage: `url(${FaqBg3.src})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
        className="absolute md:bottom-12 bottom-44 right-0 h-40 w-40  md:w-64 md:h-64"
      ></div>
      <FAQ />
      <MainFooter />
    </div>
  );
};

export default Footer;
