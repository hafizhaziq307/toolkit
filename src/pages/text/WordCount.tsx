import { useState } from "react";
import Breadcrumb from "../../components/Breadcrumb";

function WordCount() {
  const [wordCount, setWordCount] = useState(0);
  const [charcount, setCharCount] = useState(0);
  const [charNoSpacecount, setCharNoSpaceCount] = useState(0);
  const [word, setWord] = useState("");

  const handleChange = (e: React.ChangeEvent<any>) => {
    setWord(e.target.value);
    if (e.target.value.length == 0) {
      setWordCount(0);
      setCharCount(0);
      setCharNoSpaceCount(0);
      return;
    }
    setWordCount(e.target.value.trim().replace(/\s+/gi, " ").split(" ").length);
    setCharCount(e.target.value.length);
    setCharNoSpaceCount(e.target.value.replace(/\s+/gi, "").length);
  };

  const clear = () => {
    setWord("");
    setWordCount(0);
    setCharCount(0);
    setCharNoSpaceCount(0);
  };

  return (
    <>
      <Breadcrumb pageName="Word Count" />

      <textarea
        cols={30}
        rows={15}
        onChange={handleChange}
        value={word}
        placeholder="type something..."
        className="w-full resize-none rounded-md bg-[#1B2026] p-3 text-sm shadow-md ring-1 ring-transparent placeholder:text-base focus:shadow-none focus:outline-none focus:ring-2 focus:ring-amber-600"
      ></textarea>

      <div className="grid grid-cols-3 divide-x-8 divide-dotted divide-[#0D1117] rounded-md bg-[#1B2026] p-3 shadow-md ring-1 ring-[#1B2026]">
        <div className="text-center">
          <div className="text-2xl font-medium text-amber-600">{wordCount}</div>
          <div className="text-sm font-[350]">Words</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-medium text-amber-600">{charcount}</div>
          <div className="text-sm font-[350]">Characters</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-medium text-amber-600">
            {charNoSpacecount}
          </div>
          <div className="text-sm font-[350]">Characters Without Space</div>
        </div>
      </div>

      <div className="flex justify-end">
        <button
          onClick={clear}
          type="button"
          className="rounded-md bg-[#1B2026] px-4 py-2 font-medium hover:bg-[#1B2026]/80 hover:text-amber-600"
        >
          Clear
        </button>
      </div>
    </>
  );
}

export default WordCount;
