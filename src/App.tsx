import { Routes, Route, Link } from "react-router-dom";
import { useEffect } from "react";
import ToolList from "./pages/ToolList";
import WordCount from "./pages/text/WordCount";
import RemoveNewline from "./pages/text/RemoveNewline";
import WordTranform from "./pages/text/WordTransform";

function App() {
  useEffect(() => {
    // 👇 add class to body element
    document.body.classList.add("bg-stone-50");
  }, []);

  return (
    <>
      <div className="mx-auto max-w-4xl space-y-4 p-4">
        <Routes>
          <Route path="/" element={<ToolList />} />
          <Route path="/text_tool_word_count" element={<WordCount />} />
          <Route path="/text_tool_remove_newline" element={<RemoveNewline />} />
          <Route path="/text_tool_word_transforms" element={<WordTranform />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
