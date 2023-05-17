import { useState } from "react";
import { CopyButton, ClearButton, PrimaryButton } from "../components/buttons";
import { PageTitle, Textarea } from "../components";

export default function RemoveNewline() {
    const [text, setText] = useState("");

    const removeAllNewlines = () => {
        setText(text.replace(/[\n\r]/g, ""));
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
            <PageTitle title="Remove Newline" />

            <div className="card">
                <header className="card-header flex justify-end">
                    <CopyButton onClick={copy} />
                    <ClearButton onClick={clear} />
                </header>

                <div className="card-body space-y-4">
                    <Textarea
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                    />

                    <div>
                        <PrimaryButton title="Remove All Newlines" onClick={removeAllNewlines} />
                    </div>
                </div>
            </div>
        </>
    );
}
