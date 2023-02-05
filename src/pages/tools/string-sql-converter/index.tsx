import { useState } from "react";
import { CopyButton, ClearButton, Button } from "../../../components/Buttons";
import { PageTitle } from "../../../components/PageTitle";
import { Select } from "../../../components/Select";
import { Textarea } from "../../../components/Textarea";

const data = [
  {
    id: 0,
    label: "Text",
    value: "text",
  },
  {
    id: 1,
    label: "JSP",
    value: "jsp",
  },
  {
    id: 2,
    label: "PHP",
    value: "php",
  },
];

export default function StringSQLConverter() {
  const [text, setText] = useState("");
  const [toType, setToType] = useState("");

  const convert = () => {
    let txt = text;
    const lines = txt.split("\n");
    txt = lines.map((line: string) => line.replace(/\+\"/g, "")).join("\n");

    switch (toType) {
      case "jsp":
        const lines = txt.split("\n");
        setText(
          lines
            .map((line: string, i: number) =>
              i === 0 ? `\"${line}\"` : `+ \" ${line}\"`
            )
            .join("\n")
        );
        break;

      case "php":
        setText(`\`${txt}\``);
        break;

      default:
        setText(txt);
        break;
    }
  };

  const clear = () => {
    setText("");
  };

  const copy = () => {
    navigator.clipboard.writeText(text).then(
      () => alert(`Copied!`),
      (err) => alert(`Copy failed! ${err}`)
    );
  };

  return (
    <>
      <PageTitle title="String SQL Converter" />

      <div className="card">
        <header className="card-header flex justify-end">
          <CopyButton onClick={copy} />
          <ClearButton onClick={clear} />
        </header>

        <div className="card-body space-y-4">
          <Select
            value={toType}
            onChange={(e: any) => setToType(e.target.value)}
            placeholder="Convert to"
            options={data.map((item) => {
              return { id: item.id, title: item.label, value: item.value };
            })}
          />

          <Textarea
            value={text}
            onChange={(e: any) => setText(e.target.value)}
          />

          <Button title="Convert" onClick={convert} />
        </div>
      </div>
    </>
  );
}
