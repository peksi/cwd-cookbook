import { Heading, Box, Code, Divider } from "@chakra-ui/react";
import React from "react";
import { CodeBox } from "../components/CodeBox";

export const ReactSection = () => {
  return (
    <>
      <Heading as="h2" size="lg">
        React
      </Heading>
      <CodeBox
        heading="Basic Component"
        code={`const Block = (params) => {
  return (
    <div>
      {params.name}
    </div>
  )
}
`}
      />
      <Box>
        You can simplify complicated structures by abstracting them behind a
        React component. Passing parameters is optional.
      </Box>
      <Box mt={4} pl={8}>
        <ul>
          <li>
            Don't forget to <Code>return</Code> what you want to render
          </li>
          <li>
            Wrap javascript inside the return function with{" "}
            <Code>{"{curly.brackets}"}</Code>
          </li>
          <li>React component needs to start with Capital letter</li>
        </ul>
      </Box>
      <CodeBox
        heading="Using components"
        language="html"
        code={`
<Block />        
        `}
      />
      <CodeBox
        heading="Tieing React to html"
        code={`
ReactDOM.render(<App />, root);
            `}
      />
      <Heading as="h2" size="lg">
        React hooks
      </Heading>

      <Divider />
    </>
  );
};
