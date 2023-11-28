import React from "react";
import {
  Box,
  Button,
  Flex,
  Image,
  Link,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

import avatarUrl from "../../public/F_OH3VQWEAA6d-v-transformed.png";

function FsonicNFTModal({ isOpen, onClose }) {
  const items = [
    {
      dappUrl: "https://nft.fsonic.world/",
      description:
        "This is a cool description  description about the about the DApp. This is description about the This is a cool description about the DApp.",
      dappName: "NFT Beta",
      avatarUrl: "../../public/F_OH3VQWEAA6d-v-transformed.png",
    },
    {
      dappUrl: "https://nft.fsonic.world/",
      description:
        "This is a cool description about the DApp. This is a  is description about the This is a cool description about description about the DApp.",
      dappName: "NFT Alpha",
    },
    {
      dappUrl: "https://nft.fsonic.world/",
      description:
        "This is a cool description about the DApp. This is a cool description about the DApp. This is a cool description about the DApp.",
      dappName: "NFT Omega",
    },
  ];

  const OverlayTwo = () => (
    <ModalOverlay
      bg="none"
      backdropFilter="auto"
      backdropInvert="80%"
      backdropBlur="2px"
    />
  );

  const [overlay, setOverlay] = React.useState(<OverlayTwo />);

  return (
    <>
      <Modal
        isCentered
        isOpen={isOpen}
        onClose={onClose}
        // size="xl"
        size={{ base: "xl", lg: "full" }}
      >
        {overlay}
        <ModalContent bg="blackAlpha.700" color={"#fff"}>
          <ModalHeader>
            <Flex justify="space-between" align="center">
              <Text fontSize="2xl" fontWeight="bold">
                Welcome to Fsonic NFTs
              </Text>
            </Flex>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              <Flex
                direction={{ base: "column", md: "row" }}
                align="center"
                justify={{ base: "center", lg: "space-between" }}
                p={"10px"}
                gap={5}
                flexWrap={"wrap"}
              >
                {items.map((item, i) => (
                  <Flex
                    direction={{ base: "column", md: "row" }}
                    align="center"
                    as={motion.div}
                    whileHover={{ scale: 1.05 }}
                    p={"20px"}
                    border={"1px solid blue"}
                    borderRadius={"8px"}
                    maxWidth={"500px"}
                  >
                    <Box
                      mr={{ base: 0, md: 4 }}
                      mb={{ base: 4, md: 0 }}
                      textAlign={{ base: "center", md: "left" }}
                      variants={{
                        hover: { scale: 1.1 },
                        initial: { scale: 1 },
                      }}
                      whileHover="hover"
                      initial="initial"
                      whileTap={{ scale: 0.9 }}
                      as={motion.div}
                    >
                      <Image
                        src={avatarUrl.src}
                        alt="Avatar"
                        borderRadius="full"
                        boxSize="150px"
                        height={"100px"}
                        width={"100px"}
                        border={"2px solid blue"}
                        mb={4}
                        mx="auto"
                        boxShadow="0px 4px 20px rgba(0, 0, 0, 0.1)"
                        _hover={{
                          transform: "scale(1.1)",
                          transition: "transform 0.3s ease",
                        }}
                      />
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                      >
                        <Link href={item.dappUrl} isExternal>
                          <Button colorScheme="blue" size="sm">
                            Visit {item.dappName}
                          </Button>
                        </Link>
                      </motion.div>
                    </Box>
                    <Box>
                      <Text fontSize="15px" mb={4}>
                        {item.description}
                      </Text>
                    </Box>
                  </Flex>
                ))}
              </Flex>
            </motion.div>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default FsonicNFTModal;
