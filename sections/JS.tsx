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
        heading="Variables"
        code={`
var year = 2020;
year = 2021;
console.log(2021); // prints 2021

const cat = "Garfield"; // immutable
cat = Tigger // 🚨 Error

let city = "Helsinki"; // mutable
city = "Stockholm"; // ✅
          `}
        description={
          "With ES6 there has been new ways to declare variables with const and let"
        }
      />
      <CodeBox
        heading="Functions"
        code={`
// ES5 way of typing out things

function double(parameter) {
    return parameter * 2;
}

double(4) // outputs 8


// ES6 way of typing out things. More common nowadays.

const double = (parameter) => {
    return parameter * 2;
}

double(4) // outputs 8

          `}
        description={
          "(There are some semantic details that we won't go into. Output is equal.)"
        }
      />
      <CodeBox
        heading="Ternary operation"
        code={`
// ternary operation

// condition ? truthy output : falsy output;

const weekday = "Monday";
const info = weekday == "Monday" ? "No lecture!" : "Go to the lecture!";

console.log(info) // outputs Monday
          `}
        description={
          "(There are some semantic details that we won't go into. Output is equal.)"
        }
      />
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
