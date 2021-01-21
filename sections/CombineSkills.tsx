import { Box, Heading } from "@chakra-ui/react";
import React from "react";
import { CodeBox } from "../components/CodeBox";

const AnimalList = () => {
  const animals = ["cat", "dog", "kitten"];

  return (
    <ul>
      {animals.map((animal) => {
        return <li key={`animal-${animal}`}>{animal}</li>;
      })}
    </ul>
  );
};

export const CombineSkillsSection = () => {
  return (
    <>
      <Heading as="h2" size="lg">
        Combining your skills
      </Heading>
      <CodeBox
        heading="Map array to React components"
        code={`
const AnimalList = () => {
  const animals = ["cat", "dog", "kitten"];  
  
  return (
    <ul>
      {animals.map((animal) => {
        return(<li>{animal}</li>)
      })}
    </ul>
  )
}
          `}
      />
      <Box>Returns: </Box>
      <Box border="1px solid black" pl={8} w={200} mb={8}>
        <AnimalList />
      </Box>
      <Box>
        By using your knowledge with React and javascript's map function you can
        get far.
      </Box>
    </>
  );
};
