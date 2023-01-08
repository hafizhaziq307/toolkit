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

      <div className="card mb-4">
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

          <div className="flex gap-2">
            <button
              className="btn-primary"
              title="capitalize"
              onClick={capitalize}
            >
              Capitalize
            </button>

            <button
              className="btn-primary"
              title="lowercase"
              onClick={lowercase}
            >
              Lowercase
            </button>

            <button
              className="btn-primary"
              title="uppercase"
              onClick={uppercase}
            >
              Uppercase
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
