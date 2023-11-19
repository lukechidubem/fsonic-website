import React from "react";
import FAQ from "./FAQ";
import MainFooter from "./MainFooter";

const Footer = () => {
  return (
    <div
      style={{
        // background: "linear-gradient(6deg,#5353fb 10%, #f5efce 90%)",
        background: "linear-gradient(0deg,#5353fb 10%, #f5efce 90%)",
      }}
    >
      <FAQ />
      <MainFooter />
    </div>
  );
};

export default Footer;
