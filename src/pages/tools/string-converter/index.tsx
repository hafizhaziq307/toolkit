import { useState } from "react";
import { CopyButton, ClearButton, Button } from "../../../components/Buttons";
import { PageTitle } from "../../../components/PageTitle";
import { Textarea } from "../../../components/Textarea";

export default function StringConverter() {
  const [text, setText] = useState("");
  const [fromType, setFromType] = useState("normal"); // normal, php, jsp
  const [toType, setToType] = useState("jsp");

  const JSPToText = (txt: string) => {
    const lines = txt.split("\n");
    let temp = lines
      .map((line: string) => line.replace(/\+\"/g, ""))
      .join("\n");
    console.log(temp);
  };

  const textToJSP = (txt: string) => {
    const lines = txt.split("\n");
    return lines
      .map((line: string, i: number) =>
        i === 0 ? `\"${line}\"` : `+ \" ${line}\"`
      )
      .join("\n");
  };

  const textToPHP = (txt: string) => {
    return `\`${txt}\``;
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
      <PageTitle title="Remove Newline" />

      <div className="card">
        <header className="card-header flex justify-end">
          <CopyButton onClick={copy} />
          <ClearButton onClick={clear} />
        </header>

        <div className="card-body space-y-4">
          <div></div>

          <Textarea
            value={text}
            onChange={(e: any) => setText(e.target.value)}
          />

          <div className="flex gap-4">
            <Button
              title="Text to JSP"
              onClick={() => setText(textToJSP(text))}
            />
            <Button
              title="Text to PHP"
              onClick={() => setText(textToPHP(text))}
            />
            <Button
              title="JSP to Text"
              onClick={() => setText(JSPToText(text))}
            />
          </div>
        </div>
      </div>
    </>
  );
}
