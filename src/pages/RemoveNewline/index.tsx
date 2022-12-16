import {
  ClipboardDocumentListIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";

export const RemoveNewline = () => {
  const [text, setText] = useState("");

  const removeAllNewlines = () => {
    setText(text.replace(/[\n\r]/g, ""));
  };

  const clear = () => {
    setText("");
  };

  return (
    <>
      <header className="text-lg font-medium">Remove Newline</header>

      <div className="mb-4 w-full rounded-lg border border-gray-600 bg-gray-800">
        <header className="flex items-center justify-between border-b border-gray-600 p-2">
          <div className="flex gap-3">
            <button
              type="button"
              className="rounded bg-blue-600 p-2 text-sm hover:bg-blue-700"
              title="capitalize"
              onClick={removeAllNewlines}
            >
              Remove All Newlines
            </button>
          </div>

          <div className="flex items-center gap-1">
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
          </div>
        </header>

        <div className="rounded-b-lg py-2 px-4">
          <textarea
            onChange={(e) => setText(e.target.value)}
            value={text}
            rows={20}
            className="w-full bg-transparent text-sm text-white placeholder-gray-400 focus:outline-none"
            placeholder="Write something..."
          ></textarea>
        </div>
      </div>
    </>
  );
};
