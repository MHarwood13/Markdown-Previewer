"use client"
import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';

interface PreviewerProps {
  markdown: string;
}

const Previewer = ({markdown}: PreviewerProps) => {

    return (
      <div className="w-[60vw] h-[full] mb-[40px] overflow-visible">
        <div className='border-black border-solid border-[1px] bg-pastelPurpleDarkest'>
            <h1 className='text-white pl-2'>Previewer</h1>
        </div>
         <div
        className='w-full h-full border-black border-solid border-[1px] bg-pastelPurpleLight m-auto'
        id="preview"
        >
        <ReactMarkdown remarkPlugins={[gfm]} className="prose lg:prose-xl pt-5 m-auto markdown w-full h-full">{markdown}</ReactMarkdown>
      </div>
      </div>
    );
};

export default Previewer;

// Previewer.js
// "use client"
// import React, { useState } from 'react';
// import ReactMarkdown from 'react-markdown';
// import Editor from './Editor';

// const Previewer = () => {
//   const [markdown, setMarkdown] = useState('');

//   return (
//     <div className="w-[60vw] h-[100vh] mb-[40px] overflow-visible">
//       <div className='border-black border-solid border-[1px] bg-pastelPurpleDarkest'>
//         <h1 className='text-white'>Previewer</h1>
//       </div>
//       {/* <Editor markdown={markdown} setMarkdown={setMarkdown} />  */}
//       <div id="preview">
//         <ReactMarkdown>{markdown}</ReactMarkdown>
//       </div>
//     </div>
//   );
// };

// export default Previewer;
