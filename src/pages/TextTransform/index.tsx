import { useState } from "react";
import { CopyButton } from "../../components/Buttons/CopyButton";
import { ClearButton } from "../../components/Buttons/ClearButton";

export const TextTransform = () => {
  const [text, setText] = useState("");

  const capitalize = () => {
    const arr_text = text.toLowerCase().split(" ");

    for (let i = 0; i < arr_text.length; i++) {
      arr_text[i] = arr_text[i][0].toUpperCase() + arr_text[i].substr(1);
    }

    setText(arr_text.join(" "));
  };

  const lowercase = () => {
    setText(text.toLowerCase());
  };

  const uppercase = () => {
    setText(text.toUpperCase());
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
      <header className="text-lg font-medium">Text Transform</header>

      <div className="mb-4 w-full rounded-lg border border-gray-600 bg-gray-800">
        <header className="flex items-center justify-between border-b border-gray-600 p-2">
          <div className="flex gap-3">
            <button
              type="button"
              className="rounded bg-blue-600 p-2 text-sm hover:bg-blue-700"
              title="capitalize"
              onClick={capitalize}
            >
              Capitalize
            </button>

            <button
              type="button"
              className="rounded bg-blue-600 p-2 text-sm hover:bg-blue-700"
              title="lowercase"
              onClick={lowercase}
            >
              Lowercase
            </button>

            <button
              type="button"
              className="rounded bg-blue-600 p-2 text-sm hover:bg-blue-700"
              title="uppercase"
              onClick={uppercase}
            >
              Uppercase
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
