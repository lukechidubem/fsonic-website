"use client";
import Image from "next/image";
import { Box, Spinner } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import SonicGotThrough from "./components/SonicGotThrough";
import AlmostYours from "./components/AlmostYours";
import Chart from "./components/Chart";
import Roadmap from "./components/Roadmap";
import Footer from "./components/Footer";

export default function Home() {
  const [domLoaded, setDomLoaded] = useState(false);

  // console.log(Date.now(), new Date());

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  return !domLoaded ? (
    <section className="h-screen w-screen flex justify-center items-center">
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="blue.500"
        size="xl"
      />{" "}
    </section>
  ) : (
    <div style={{ background: "#F5EFCE" }}>
      <NavBar />
      <Hero />
      <SonicGotThrough />
      <AlmostYours />
      <Chart />
      <Roadmap />
      <Footer />
    </div>
  );
}

// Made By Luke Dubem: X @lukechidubem
