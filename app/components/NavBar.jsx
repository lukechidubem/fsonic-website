"use client";

import {
  Box,
  Flex,
  HStack,
  IconButton,
  Button,
  useDisclosure,
  Stack,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, ChevronDownIcon } from "@chakra-ui/icons";
import Logo from "../../public/smallRING.png";
import Image from "next/image";
import { Link } from "react-scroll";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const Links = ["ABOUT", "BUY NOW", "CHART", "TOKENOMICS", "ROADMAP"];

const NavLink = (props) => {
  const { children, id } = props;

  return (
    <Link
      to={id.toLowerCase().replace(" ", "-")}
      spy={true}
      smooth={true}
      offset={-70} // Adjust this value for the desired offset
      duration={500}
    >
      <Box
        fontFamily={inter.className}
        as="a"
        px={2}
        py={1}
        rounded={"md"}
        _hover={{
          bg: "gray.200",
          color: "gray.700",
        }}
        href={`#${id.toLowerCase().replace(" ", "-")}`}
      >
        {children}
      </Box>
    </Link>
  );
};

export default function NavBar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box px={4} className="fixed w-full  z-20 bg-[#5353FB]" color={"#fff"}>
        <Flex
          h={16}
          alignItems={"center"}
          justifyContent={"space-between"}
          className=" 2xl:px-10"
        >
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ lg: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <Box
            // as={Button}
            // rounded={"full"}
            // variant={"link"}
            cursor={"pointer"}
            minW={0}
          >
            <p className="flex items-center text-[#F5F5F5] font-['Satoshi'] text-[25px] xl:text-[32px] ">
              F{" "}
              <span className="">
                <Image src={Logo} alt="Logo" height={30} width={30} />
              </span>{" "}
              SONIC
            </p>
          </Box>
          <HStack
            as={"nav"}
            spacing={{ base: 3, xl: 4 }}
            display={{ base: "none", lg: "flex" }}
          >
            {Links.map((link) => (
              <Box
                key={link}
                className="text-white lg:text-lg xl:text-xl 2xl:text-2xl  text-sm font-light font-['Literata Variable'] lg:leading-tight"
              >
                <NavLink id={link}>{link}</NavLink>
              </Box>
            ))}

            <Menu
              style={{ background: "#5353FB" }}
              className="text-sm text-white"
            >
              <MenuButton
                style={{
                  background: "#5353FB",
                  color: "white",
                  textShadow: "4px 4px 2px rgba(52,55,67,0.6)",
                }}
                fontSize={{ base: "16px", lg: "18px", xl: "20px" }}
                as={Button}
                rightIcon={<ChevronDownIcon />}
                className=" text-white font-['Satoshi']"
              >
                Enter the sonic world
              </MenuButton>
              <MenuList
                className="bg-[#5353FB]"
                style={{ background: "#5353FB" }}
              >
                <MenuItem
                  as="a"
                  href="#"
                  style={{ background: "#5353FB" }}
                  _hover={{
                    borderBottom: "1px solid white",
                    color: "gray.200",
                  }}
                >
                  FsonicNFT
                </MenuItem>
                <MenuItem
                  style={{ background: "#5353FB" }}
                  _hover={{
                    borderBottom: "1px solid white",
                    color: "gray.200",
                  }}
                >
                  FsonicArcade <span className="ml-3">(coming soon)</span>
                </MenuItem>
                <MenuItem
                  style={{ background: "#5353FB" }}
                  _hover={{
                    borderBottom: "1px solid white",
                    color: "gray.200",
                  }}
                >
                  Kekbook <span className="ml-3">(coming soon)</span>
                </MenuItem>
              </MenuList>
            </Menu>
          </HStack>
          {/* </HStack> */}
          <Flex alignItems={"center"}>
            <a
              href="https://app.firebird.finance/swap"
              target="_blank"
              className=" text-center text-[#5353FB] hover:text-white hover:bg-[#5353FB] rounded px-2 bg-white text-[18px] md:text-[20px]  2xl:text-[32px] font-bold font-['Satoshi'] lg:leading-relaxed"
            >
              BUY NOW
            </a>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ lg: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map((link) => (
                <Box
                  key={link}
                  className="text-white text-xl font-light font-['Literata Variable'] leading-tight"
                >
                  <NavLink id={link}>{link}</NavLink>
                </Box>
              ))}

              <Menu
                style={{ background: "#5353FB" }}
                className="text-sm text-white"
              >
                <MenuButton
                  style={{
                    background: "#5353FB",
                    color: "white",
                    textShadow: "4px 4px 2px rgba(52,55,67,0.6)",
                  }}
                  fontSize={{ base: "16px", lg: "18px", xl: "20px" }}
                  as={Button}
                  rightIcon={<ChevronDownIcon />}
                  className=" text-white font-['Satoshi']"
                >
                  Enter the sonic world
                </MenuButton>
                <MenuList
                  className="bg-[#5353FB]"
                  style={{ background: "#5353FB" }}
                >
                  <MenuItem
                    as="a"
                    href="#"
                    style={{ background: "#5353FB" }}
                    _hover={{
                      borderBottom: "1px solid white",
                      color: "gray.200",
                    }}
                  >
                    FsonicNFT
                  </MenuItem>
                  <MenuItem
                    style={{ background: "#5353FB" }}
                    _hover={{
                      borderBottom: "1px solid white",
                      color: "gray.200",
                    }}
                  >
                    FsonicArcade <span className="ml-3">(coming soon)</span>
                  </MenuItem>
                  <MenuItem
                    style={{ background: "#5353FB" }}
                    _hover={{
                      borderBottom: "1px solid white",
                      color: "gray.200",
                    }}
                  >
                    Kekbook <span className="ml-3">(coming soon)</span>
                  </MenuItem>
                </MenuList>
              </Menu>
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
