import { Heading, Box } from "@chakra-ui/react";
import React from "react";
import { CodeBox } from "../components/CodeBox";

export const JSSection = () => {
  return (
    <>
      <Heading as="h2" size="lg">
        JS
      </Heading>
      <CodeBox
        heading="Creating empty iterable array"
        code={`
const iterableArray = Array(100).fill(undefined)          
          `}
      />
      <Box>
        Returns an array with a hundred members filled with [undefined,
        undefined, undefined ...
      </Box>
      <CodeBox
        heading="Map"
        code={`
const animals = ["cat", "dog", "kitten"];
animals.map((animal) => animal.length); // [3, 3, 6]
          `}
      />
      <Box>
        Mapping things to other things is a fundamental part of programming.
        Make sure you learn it well.
      </Box>

      <CodeBox
        heading="Selecting DOM components"
        code={`
document.getElementById('idOfTheComponent')
// returns only one component

document.getElementsByClassName('className')
// returns an array of components. 

document.getElementsByClassName('className')[0]
// you can take the first one from the array with this

document.getElementsByTagName('div')
// get all the divs
          `}
      />

      <CodeBox
        heading="Alter CSS of DOM components"
        code={`
document.getElementsByClassName('layer3')[0].style.top = '100px';
// alter the top css prop
          `}
      />
    </>
  );
};
