import { useState } from "react";
import { PageTitle, Textarea, Select, } from "../components";
import { CopyButton, ClearButton, PrimaryButton } from "../components/buttons";
import { TextInput } from "../components/inputs";
import { isEmpty } from "../helpers";

export default function TextAdded() {
    const [text, setText] = useState("");
    const [rowType, setRowType] = useState("");
    const [start, setStart] = useState("");
    const [end, setEnd] = useState("");


    const addText = () => {
        if (isEmpty(rowType)) {
            alert("Choose row type!");
            return;
        }

        let temp = '';
        if (rowType == 1) {
            temp = `${start}${text}${end}`;

        } else if (rowType == 2) {
            let rows = text.split('\n');
            temp = rows.map((row) => `${start}${row}${end}`).join('\n');
        }

        setText(temp);
    }

    const clear = () => {
        setText("");
        setRowType("");
        setStart("");
        setEnd("");
    };

    const copy = () => {
        navigator.clipboard.writeText(text).then(
            () => alert(`Copied!`),
            (err) => alert(`Copy failed! ${err}`)
        );
    };

    return (
        <>
            <PageTitle title="Text Added" />

            <div className="card mb-4">
                <header className="card-header space-y-4">
                    <div className="flex justify-between gap-2">
                        <Select
                            value={rowType}
                            onChange={(e) => setRowType(e.target.value)}
                            placeholder="Choose rowType"
                            options={[
                                { id: 1, title: "single-rowType", value: "1" },
                                { id: 2, title: "multi-rows", value: "2" },

                            ]}
                        />

                        <div className="flex">
                            <CopyButton onClick={copy} />
                            <ClearButton onClick={clear} />
                        </div>
                    </div>


                </header>

                <div className="card-body space-y-4">
                    <div className="grid grid-cols-3 gap-2 items-center">
                        <TextInput
                            placeholder="Start"
                            value={start}
                            onChange={(e) => setStart(e.target.value)}
                        />
                        <div className="text-center truncate">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti, modi.</div>
                        <TextInput
                            placeholder="End"
                            value={end}
                            onChange={(e) => setEnd(e.target.value)}
                        />
                    </div>

                    <Textarea rows="18"
                        onChange={(e) => setText(e.target.value)}
                        value={text}
                    />

                    <div>
                        <PrimaryButton title="Add" onClick={addText} />
                    </div>
                </div>
            </div>
        </>
    );
}