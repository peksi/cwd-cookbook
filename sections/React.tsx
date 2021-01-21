import { Heading, Box, Code, Divider, Button } from "@chakra-ui/react";
import React, { useState } from "react";
import { CodeBox } from "../components/CodeBox";

const CountExample = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>You clicked {count} times</p>
      <Button onClick={() => setCount(count + 1)}>Click me</Button>
    </div>
  );
};

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
      <Box mt={4} fontWeight="bold">
        What and why?
      </Box>
      <Box>
        When you declare something in React, it will be loaded only once when
        the component is rendered. However if you want something to change along
        the way so that React knows it, you need to wrap it in a hook!
      </Box>
      <CodeBox
        heading="useState"
        description="Whenever the button is clicked, the function gets triggered, the {count} gets updated and it renders the element again!"
        code={`
import React, { useState } from 'react';

function Example() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
`}
      />
      <Box border="1px solid black" rounded="md" padding={4} maxW="20rem">
        <CountExample />
      </Box>
      <CodeBox
        heading="useEffect"
        code={`
import React, { useEffect } from 'react';

const YourReactComponent = () => {

  useEffect(() => {
    // this will happen every time your function gets rerendered
  })

  useEffect(() => {
    // this will trigger only on the initial render
  }, [])

  useEffect(() => {
    // this will trigger only when the variable1 gets changed 
  }, [variable1])

  return (
    <div>👀</div>
  )
}

        `}
        description="By using this hook you tell React that your component needs to do something after render. It will run after every render, unless otherwise specified (using the second parameter as an array)."
      />

      <Divider />
    </>
  );
};
