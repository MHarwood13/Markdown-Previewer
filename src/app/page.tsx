"use client"
import Editor from './_components/Editor';
import Previewer from './_components/Previewer';
import { useState } from 'react';
import Script from "next/script";

export default function Home() {

  const defaultMarkdown = `
  # Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

**Here's some inline code**, \`<div></div>\`, between 2 backticks.

\`\`\`

// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}

\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.michaelharwood.dev), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
2. Like so.

![And Images](/earth-background.jpg)

  `
  const [markdown, setMarkdown] = useState(defaultMarkdown);
  return (
    <>
      <main className="bg-pastelPurpleDark grid justify-center pt-[25px] h-full">
          <Editor markdown={markdown} setMarkdown={setMarkdown}/>
          <Previewer markdown={markdown}/>
      </main>
    </>
  );
}
