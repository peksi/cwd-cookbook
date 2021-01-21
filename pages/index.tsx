import Head from "next/head";
import { Box, Code, Divider, Heading } from "@chakra-ui/react";
import { CodeBox } from "../components/CodeBox";
import { ReactSection } from "../sections/React";
import { HTMLSection } from "../sections/HTML";
import React from "react";
import { CSSSection } from "../sections/CSS";
import { CombineSkillsSection } from "../sections/CombineSkills";
import { Fundamentals } from "../sections/Fundamentals";
import { JSSection } from "../sections/JS";

/*


basic html classess

event triggers
* onclick
* onscroll
* on keypress



useEffect hook
useState hook



*/

export default function Home() {
  return (
    <div>
      <Head>
        <title>Contemporary Web Development Cook Book</title>
        <link
          rel="stylesheet"
          href="https://highlightjs.org/static/demo/styles/railscasts.css"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Box maxW={"40rem"} margin={"auto"} px={"1rem"}>
          <Box fontSize="70px" textAlign="center">
            🍲📖
          </Box>
          <Heading textAlign="center">
            Contemporary Web Development Cook Book
          </Heading>

          <Fundamentals />

          <HTMLSection />
          <CSSSection />
          <JSSection />
          <ReactSection />
          <CombineSkillsSection />
        </Box>
      </main>
      <Divider my={8} />

      <footer>
        <Box maxW={"40rem"} margin={"auto"} my={16} textAlign={"center"}>
          Made for CWD course
        </Box>
      </footer>
    </div>
  );
}
