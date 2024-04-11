"use client"

interface EditorProps {
    markdown: string;
    setMarkdown: (value: string) => void;
  }

const Editor = ({ markdown, setMarkdown }: EditorProps) => {
    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setMarkdown(e.target.value);
      };
    return (
        <div className="w-[35vw] h-[30vh] mb-[40px]">
            <div className="border-black border-solid border-[1px] bg-pastelPurpleDarkest">
                <h1 className="text-white pl-2">Editor</h1>
            </div>

        <textarea value={markdown} onChange={handleChange} className="markdown pl-5 m-auto w-full h-full border-black border-solid border-[1px] overflow-scroll overflow-x-hidden" id="editor" rows={10} cols={50}></textarea>
        </div>
    );
}

export default Editor;
