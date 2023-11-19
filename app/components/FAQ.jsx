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
import FaqBg from "../../public/F-fDwFdW4AAn-nd-transformed.png";

import { ChevronDownIcon } from "@chakra-ui/icons";

export default function FAQ() {
  return (
    <Flex
      minH={"60vh"}
      align={"center"}
      justify={"center"}
      className="font-['Satoshi']"
    >
      <div>
        <Text textAlign={"center"} p={3} fontSize="xl">
          FAQs
        </Text>
        <Accordion allowToggle>
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
              You can buy FSONIC on Firebird or on Equal using $ftm , more dexes
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
              liquidity is locked forever , fair launch and amazing roadmap.
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
              Contact us on X : @fantomsonicinu
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </div>
    </Flex>
  );
}
