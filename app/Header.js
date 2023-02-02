import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";

export default function Header() {
  return (
    <Box
      textAlign={{ base: "left", md: "left", lg: "center" }}
      pl="15px"
      bg="#6B46C1"
      pt="90px"
      pb="250px"
      color="white"
    >
      <Heading>Simple Pricing for your Business</Heading>
      <Text>Plans That are carefully Created for your business</Text>
    </Box>
  );
}
