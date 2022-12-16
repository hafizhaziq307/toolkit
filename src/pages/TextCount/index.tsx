import {
  ClipboardDocumentListIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";

export const TextCount = () => {
  const [wordCount, setWordCount] = useState(0);
  const [charcount, setCharCount] = useState(0);
  const [charNoSpacecount, setCharNoSpaceCount] = useState(0);
  const [word, setWord] = useState("");

  const handleChange = (e: any) => {
    setWord(e.target.value);

    if (e.target.value.length === 0) {
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
      <header className="text-lg font-medium">Text Count</header>

      <div className="mb-4 w-full rounded-lg border border-gray-600 bg-gray-800">
        <header className="flex items-center justify-end border-b border-gray-600 p-2">
          <button
            type="button"
            className="rounded p-2 text-gray-400 hover:bg-gray-600 hover:text-white"
          >
            <ClipboardDocumentListIcon className="h-5 w-5" title="copy" />
          </button>

          <button
            type="button"
            className="rounded p-2 text-gray-400 hover:bg-gray-600 hover:text-white"
            onClick={clear}
          >
            <TrashIcon className="h-5 w-5" title="clear" />
          </button>
        </header>

        <div className="rounded-b-lg py-2 px-4">
          <textarea
            onChange={handleChange}
            value={word}
            rows={20}
            className="w-full bg-transparent text-sm text-white placeholder-gray-400 focus:outline-none"
            placeholder="Write something..."
          ></textarea>
        </div>

        <footer className="grid grid-cols-3 divide-x-2 divide-gray-600 border-t border-gray-600 p-3">
          <div className="text-center">
            <div className="text-2xl font-medium text-blue-600">
              {wordCount}
            </div>
            <div className="text-sm font-[350]">Words</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-medium text-blue-600">
              {charcount}
            </div>
            <div className="text-sm font-[350]">Characters</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-medium text-blue-600">
              {charNoSpacecount}
            </div>
            <div className="text-sm font-[350]">Characters Without Space</div>
          </div>
        </footer>
      </div>
    </>
  );
};
