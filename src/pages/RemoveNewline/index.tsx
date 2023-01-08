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

      <div className="card">
        <header className="card-header flex justify-end">
          <CopyButton onClick={copy} />
          <ClearButton onClick={clear} />
        </header>

        <div className="card-body space-y-4">
          <textarea
            onChange={(e) => setText(e.target.value)}
            value={text}
            rows={20}
            className="textarea"
            placeholder="Write something..."
          ></textarea>

          <div>
            <button
              className="btn-primary"
              title="capitalize"
              onClick={removeAllNewlines}
            >
              Remove All Newlines
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
