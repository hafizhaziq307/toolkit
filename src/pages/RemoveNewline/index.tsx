import { useState } from "react";
import { Button, ClearButton, CopyButton } from "../../components/Buttons";
import { Textarea } from "../../components/Textarea";

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
          <Textarea
            value={text}
            onChange={(e: any) => setText(e.target.value)}
          />

          <div>
            <Button title="Remove All Newlines" onClick={removeAllNewlines} />
          </div>
        </div>
      </div>
    </>
  );
};
