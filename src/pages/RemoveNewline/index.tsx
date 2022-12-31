import { useState } from "react";
import { ClearButton } from "../../components/Buttons/ClearButton";
import { CopyButton } from "../../components/Buttons/CopyButton";

export const RemoveNewline = () => {
  const [text, setText] = useState("");

  const removeAllNewlines = () => {
    setText(text.replace(/[\n\r]/g, ""));
  };

  const clear = () => {
    setText("");
  };

  const copy = () => {
    navigator.clipboard
      .writeText(text)
      .then(() => alert(`Copied!`))
      .catch((error) => alert(`Copy failed! ${error}`));
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
            <CopyButton onClick={copy} />
            <ClearButton onClick={clear} />
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
