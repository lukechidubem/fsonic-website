"use client";

import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Flex,
  useColorModeValue,
  Text,
  Container,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";
import FaqBg from "../../public/F--qNUsbcAA3_46-transformed.png";

export default function FAQ() {
  return (
    <Flex
      minH={"60vh"}
      minW={"90vw"}
      align={"center"}
      justify={"center"}
      className="font-['Satoshi']"
    >
      <div
        style={{
          backgroundImage: `url(${FaqBg.src})`,
          // backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
        className=" lg:min-w-[900px]"
      >
        <Text textAlign={"center"} p={3} fontSize="xl">
          FAQs
        </Text>
        <Accordion minW={"80vw"} allowToggle>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  What is FSONIC?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} color={"#434343"}>
              FSONIC is a crypto meme coin for entertainment purposes on Fantom
              network.
              For the time being users can use $fsonic to buy NFTs & participate in some Defi plays , in the future $fsonic can be used as currency for FsonicArcade : Game & Kekbook : Sofi.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  Where can i buy FSONIC ?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} color={"#434343"}>
              You can buy FSONIC on Firebird or on Equalizer , more dexes
              and possibly Cexes in the near future.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  what is special about FSONIC ?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} color={"#434343"}>
              Fsonic is the very first meme that is tryng to create an AIO NFT , Gamefi , Defi and Sofi on fantom network !
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  How can i reach out for partnership ?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} color={"#434343"}>
              Contact us  : contact@fsonic.world
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </div>
    </Flex>
  );
}
