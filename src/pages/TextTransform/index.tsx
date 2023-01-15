import { useState } from "react";
import { Button, CopyButton, ClearButton } from "../../components/Buttons";
import { Textarea } from "../../components/Textarea";

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

      <div className="card mb-4">
        <header className="card-header flex justify-end">
          <CopyButton onClick={copy} />
          <ClearButton onClick={clear} />
        </header>

        <div className="card-body space-y-4">
          <Textarea
            onChange={(e: any) => setText(e.target.value)}
            value={text}
          />

          <div className="flex gap-2">
            <Button title="Capitalize" onClick={capitalize} />
            <Button title="Lowercase" onClick={lowercase} />
            <Button title="Uppercase" onClick={uppercase} />
          </div>
        </div>
      </div>
    </>
  );
};
