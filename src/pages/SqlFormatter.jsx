import { useState } from "react";
import { PageTitle, Textarea, Select } from "../components";
import { CopyButton, ClearButton, PrimaryButton } from "../components/buttons";
import { format } from 'sql-formatter';
import { isEmpty } from "../helpers";

export default function SqlFormatter() {
    const [text, setText] = useState("");
    const [formatTo, setFormatTo] = useState("");

    const runFormat = () => {
        if (isEmpty(formatTo)) {
            alert("Choose database type to format!");
            return;
        }

        const result = format(text, { language: formatTo, keywordCase: "upper" })

        setText(result);
    };

    const clear = () => {
        setText("");
        setFormatTo("");
    };

    const copy = () => {
        navigator.clipboard.writeText(text).then(
            () => alert(`Copied!`),
            (err) => alert(`Copy failed! ${err}`)
        );
    };

    return (
        <>
            <PageTitle title="SQL Formatter" />

            <div className="card mb-4">
                <header className="card-header flex justify-between gap-2">
                    <Select
                        value={formatTo}
                        onChange={(e) => setFormatTo(e.target.value)}
                        placeholder="convert to"
                        options={[
                            { id: 1, title: "SQL Server", value: "tsql" },
                            { id: 2, title: "PostgreSQL", value: "postgresql" },
                            { id: 3, title: "MySQL", value: "mysql" },
                            { id: 4, title: "MariaDB", value: "mariadb" },

                        ]}
                    />

                    <div className="flex">
                        <CopyButton onClick={copy} />
                        <ClearButton onClick={clear} />
                    </div>
                </header>

                <div className="card-body space-y-4">
                    <Textarea
                        onChange={(e) => setText(e.target.value)}
                        value={text}
                    />

                    <div>
                        <PrimaryButton title="Format" onClick={runFormat} />
                    </div>
                </div>
            </div>
        </>
    );
}