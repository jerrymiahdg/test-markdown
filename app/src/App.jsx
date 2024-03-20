import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import data from "./markdown/md.md";
import ReactMarkdown from "react-markdown";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  console.log(data);

  for (let i = 0; i < data.length; i++) {}

  return (
    <>
      <div className="flex justify-center py-56">
        <ReactMarkdown className="max-w-4xl w-full text-left prose prose-invert">
          {data}
        </ReactMarkdown>
      </div>
    </>
  );
}

export default App;
