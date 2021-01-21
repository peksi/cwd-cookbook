import { Heading, Box, Code, Flex } from "@chakra-ui/react";
import React from "react";
import Image from "next/image";
import { CodeBox } from "../components/CodeBox";

export const HTMLSection = () => {
  return (
    <>
      <Heading as="h2" size="lg">
        HTML
      </Heading>

      <Box>
        <Flex justifyContent="center" mt={16}>
          <Image
            src="/images/DOM-model.svg"
            alt="Dom tree"
            width="428px"
            height="443px"
          />
        </Flex>
        <Box mb={16} textAlign="center" fontSize="xs">
          Picture from{" "}
          <a href="https://en.wikipedia.org/wiki/Document_Object_Model#/media/File:DOM-model.svg">
            Wikipedia
          </a>
          . (CC BY-SA 3.0)
        </Box>
        <Box mb={8}>
          The DOM represents a document with a logical tree. With the Javascript
          you can <br />
          <br />
          <ul>
            <li>Add, modify or delete any of the elements and attributes</li>
            <li>Change any CSS styles</li>
            <li>React to events that are tied to the tree</li>
            <li>Create new events</li>
          </ul>
        </Box>
        <Box>
          <CodeBox
            heading="Basics"
            language="html"
            code={`
<!DOCTYPE html>
<html lang="en">
  <head>
      <meta charset="UTF-8" />
      <meta 
        name="viewport"
        content="width=device-width, initial-scale=1.0"
      />
      <title>Document</title>
  </head>
  <body>
      
  </body>
</html>          
          `}
            description={
              "Every html file should have at least doctype, html, head and body tags."
            }
          />
        </Box>
        <CodeBox
          heading="Commenting"
          code={`
<!-- This is a comment -->        
        `}
          language="html"
        />
        <Box pl={8} my={16}>
          Todo:
          <ul>
            <li>div</li>
            <li>span</li>
            <li>img</li>
            <li>all the semantic html5 tags</li>
            <li>where to find more resources</li>
          </ul>
        </Box>
      </Box>
    </>
  );
};
