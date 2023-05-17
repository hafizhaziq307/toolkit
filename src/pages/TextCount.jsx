import { useState } from "react";
import { ClearButton } from "../components/buttons";
import { PageTitle, Textarea } from "../components";

export default function TextCount() {
    const [word, setWord] = useState("");
    const [wordCount, setWordCount] = useState(0);
    const [charcount, setCharCount] = useState(0);
    const [charNoSpacecount, setCharNoSpaceCount] = useState(0);

    const handleChange = (e) => {
        setWord(e.target.value);

        if (e.target.value.length === 0) {
            setWordCount(0);
            setCharCount(0);
            setCharNoSpaceCount(0);
            return;
        }

        setWordCount(e.target.value.trim().replace(/\s+/gi, " ").split(" ").length);
        setCharCount(e.target.value.length);
        setCharNoSpaceCount(e.target.value.replace(/\s+/gi, "").length);
    };

    const clear = () => {
        setWord("");
        setWordCount(0);
        setCharCount(0);
        setCharNoSpaceCount(0);
    };

    return (
        <>
            <PageTitle title="Text Count" />

            <div className="card">
                <header className="card-header flex justify-end">
                    <ClearButton onClick={clear} />
                </header>

                <div className="card-body">
                    <Textarea onChange={handleChange} value={word} />
                </div>

                <footer className="card-footer grid grid-cols-3 divide-x-2 divide-gray-600">
                    <div className="text-center">
                        <div className="text-2xl font-medium text-blue-600">
                            {wordCount}
                        </div>
                        <div className="text-sm font-[350]">Words</div>
                    </div>
                    <div className="text-center">
                        <div className="text-2xl font-medium text-blue-600">
                            {charcount}
                        </div>
                        <div className="text-sm font-[350]">Characters</div>
                    </div>
                    <div className="text-center">
                        <div className="text-2xl font-medium text-blue-600">
                            {charNoSpacecount}
                        </div>
                        <div className="text-sm font-[350]">Characters Without Space</div>
                    </div>
                </footer>
            </div>
        </>
    );
}
