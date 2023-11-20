"use client";

import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from "@chakra-ui/react";
import { FaDiscord, FaTelegram, FaTwitter } from "react-icons/fa";
import { ReactNode } from "react";
import LogoIcon from "../../public/smallRING.png";
import Image from "next/image";

const Logo = (props) => {
  return (
    <Box
      // as={Button}
      // rounded={"full"}
      // variant={"link"}
      cursor={"pointer"}
      minW={0}
    >
      <p className="flex items-center text-[#fff] font-['Satoshi'] text-[32px] z-10">
        F{" "}
        <span className="">
          <Image src={LogoIcon} alt="Logo" height={30} width={30} />
        </span>{" "}
        SONIC
      </p>
    </Box>
  );
};

const SocialButton = ({ children, label, href }) => {
  return (
    <chakra.button
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function MainFooter() {
  return (
    <Box color={"white"}>
      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        spacing={4}
        justify={"center"}
        align={"center"}
      >
        <Logo />
        <Stack spacing={6}>
          <Text maxW={"450px"} textAlign={"center"} className="z-10">
            FSONIC is a crypto meme coin on Fantom network.
            <span className="text-[12px] block">
              Created and designed by{" "}
              <a
                href="https://twitter.com/lukechidubem"
                target="_blank"
                className="text-yellow-300"
              >
                LukeChidubem X
              </a>{" "}
            </span>
          </Text>
        </Stack>
      </Container>

      <Box
        borderTopWidth={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.700")}
      >
        <Container
          as={Stack}
          maxW={"6xl"}
          py={4}
          direction={{ base: "column", md: "row" }}
          spacing={4}
          justify={{ base: "center", md: "space-between" }}
          align={{ base: "center", md: "center" }}
        >
          <Text textAlign={"center"} className="z-10">
            © 2023 FSONIC. All Rights Reserved. contact@fsonic.world
          </Text>
          <Stack direction={"row"} spacing={6}>
            <SocialButton label={"Twitter"} href={"#"}>
              <FaTwitter className="text-2xl" />
            </SocialButton>
            <SocialButton label={"Discord"} href={"#"}>
              <FaDiscord className="text-2xl" />
            </SocialButton>
            <SocialButton label={"Telegram"} href={"#"}>
              <FaTelegram className="text-2xl" />
            </SocialButton>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}
