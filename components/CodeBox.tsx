import { Box, Heading } from "@chakra-ui/react";
import React from "react";

import Highlight from "react-highlight.js";

interface Props {
  heading: string;
  code: string;
  description?: string;
  language?: string;
}

export const CodeBox = (props: Props) => {
  return (
    <Box my={4} fontSize="sm">
      <Heading as="h3" size="md" mb={4}>
        {props.heading}
      </Heading>
      <Highlight language={props.language ?? "javascript"}>
        {props.code}
      </Highlight>
      <Box>{props.description}</Box>
    </Box>
  );
};
