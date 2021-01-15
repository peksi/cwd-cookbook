import { List, ListItem, ListIcon, Box, Heading } from "@chakra-ui/react";
import React from "react";
import { MdCheckCircle, MdSettings } from "react-icons/md";
import { ImHtmlFive } from "react-icons/im";
import { SiCsswizardry, SiJavascript, SiReact } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import { BsCodeSlash } from "react-icons/bs";

import { BiCodeCurly } from "react-icons/bi";

export const Fundamentals = () => {
  return (
    <Box my={8}>
      <Heading as="h2" size="lg">
        Fundamentals
      </Heading>
      <br />
      You win the game by understanding these
      <br />
      <br />
      <List spacing={3}>
        <ListItem>HTML</ListItem>
        <ListItem>
          <ListIcon fontSize={"xl"} as={BsCodeSlash} color="green.500" />
          Understand what is a DOM and how HTML is tied to it
        </ListItem>
        <br />
        <ListItem>CSS</ListItem>
        <ListItem>
          <ListIcon fontSize={"xl"} as={BiCodeCurly} color="green.500" />
          CSS styling, positioning, alignment, transitions and animations
        </ListItem>
        <ListItem>
          <ListIcon fontSize={"xl"} as={BiCodeCurly} color="green.500" />
          Responsive design (media queries)
        </ListItem>
        <br />
        <ListItem>Javascript</ListItem>
        <ListItem>
          <ListIcon fontSize={"xl"} as={IoLogoJavascript} color="green.500" />
          Variables, arrays, funcitons, loops
        </ListItem>
        <ListItem>
          <ListIcon fontSize={"xl"} as={IoLogoJavascript} color="green.500" />
          DOM manipulation and styling
        </ListItem>
        <ListItem>
          <ListIcon fontSize={"xl"} as={IoLogoJavascript} color="green.500" />
          Array methods ( foreach, map, filter, reduce )
        </ListItem>
        <br />
        <ListItem>React</ListItem>
        <ListItem>
          <ListIcon fontSize={"xl"} as={SiReact} color="green.500" />
          Functional components
        </ListItem>
        <ListItem>
          <ListIcon fontSize={"xl"} as={SiReact} color="green.500" />
          Hooks (useEffect, useState)
        </ListItem>
      </List>
    </Box>
  );
};
