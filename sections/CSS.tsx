import { Heading, List, ListItem } from "@chakra-ui/react";
import React from "react";
import { CodeBox } from "../components/CodeBox";

export const CSSSection = () => {
  return (
    <>
      <Heading as="h2" size="lg">
        CSS
      </Heading>
      <CodeBox
        heading="Basics"
        code={`
selector {
  property name: property value;
}
      `}
      />
      <CodeBox
        heading="Comment"
        language="css"
        code={`
/* You can comment things like this */      


/* Works 
also
as a
multiline 
comment */
      `}
      />

      <CodeBox
        heading="IDs and classes"
        code={`
.box {
  color: green;
}

#one-specific-box {
  color: gray;
}
`}
        language="css"
      />

      <CodeBox
        heading="Pseudo-classess"
        language="css"
        code={`
/* Note the two ::*/

box::first-letter {
  font-size: 2rem;
}

button:hover {
  background-color: #ff0000;
}

/* Give your tables a better readability */

.zebra-table:nth-child(2) {
  background-color: gray;
} 
      `}
      />
      <Heading as="h3" size="md" mb={4}>
        Helpful resources for you to master css
      </Heading>
      <List mb={8}>
        <ListItem>
          <a href="https://flukeout.github.io/">✅ Mastering selectors</a>
        </ListItem>
        <ListItem>
          <a href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/">
            ✅ A bible for flexbox positioning
          </a>
        </ListItem>
        <ListItem>
          <a href="https://flexboxfroggy.com/">
            ✅ Practice your flexbox skills
          </a>
        </ListItem>
      </List>
    </>
  );
};
