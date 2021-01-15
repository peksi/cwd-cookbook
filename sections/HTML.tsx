import { Heading, Box, Code } from "@chakra-ui/react";
import React from "react";
import { CodeBox } from "../components/CodeBox";

export const HTMLSection = () => {
  return (
    <>
      <Heading as="h2" size="lg">
        HTML
      </Heading>

      <Box>
        <Box>
          <Code>{`<div>`}</Code> is the foundation of everything
        </Box>
        <Box>
          <Code>{`<span>`}</Code> is the inline div
        </Box>
      </Box>
    </>
  );
};
