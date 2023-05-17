import { useState } from "react";
import { PrimaryButton, CopyButton, ClearButton } from "../components/buttons";
import { PageTitle, Textarea } from "../components";

export default function TextTransform() {
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
        navigator.clipboard.writeText(text).then(
            () => alert(`Copied!`),
            (err) => alert(`Copy failed! ${err}`)
        );
    };

    return (
        <>
            <PageTitle title="Text Transforms" />

            <div className="card mb-4">
                <header className="card-header flex justify-end">
                    <CopyButton onClick={copy} />
                    <ClearButton onClick={clear} />
                </header>

                <div className="card-body space-y-4">
                    <Textarea
                        onChange={(e) => setText(e.target.value)}
                        value={text}
                    />

                    <div className="flex gap-2">
                        <PrimaryButton title="Capitalize" onClick={capitalize} />
                        <PrimaryButton title="Lowercase" onClick={lowercase} />
                        <PrimaryButton title="Uppercase" onClick={uppercase} />
                    </div>
                </div>
            </div>
        </>
    );
}
