import { useRef, useState, useEffect } from "react";
import { ExcelRenderer } from "react-excel-renderer";
import { ClearButton, PrimaryButton } from "../components/buttons";
import { FileInput, TextInput } from "../components/inputs";
import { PageTitle, Select } from "../components";
import { isEmpty, saveFile, fillEmptySlots } from "../helpers";

const previewTable = () => {
    let string = "CREATE TABLE foo (col1 text PRIMARY KEY NOT NULL, col2 text, col3 text)";

    const regex = /\((.*?)\)/;
    const fieldsStr = string.match(regex)[1];
    const rawFields = fieldsStr.split(',').map(x => x.trim());
    const fields = rawFields.map(x => x.split(' ')[0]);
    console.log(fields);
}

export default function SqlToExcel() {
    return (
        <>
            <PageTitle title="SQL to Excel" />

            <div className=" card">
                <header className="card-header flex justify-end">
                    {/* <ClearButton onClick={clear} /> */}
                </header>

                <div className="card-body space-y-4">
                    {/* <FileInput
                        fileRef={uploadFileRef}
                        accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
                        onChange={(e) => setUploadFile(e.target.files[0])}
                    />

                    <div className="grid grid-cols-2 gap-4">
                        <TextInput
                            value={tablename}
                            placeholder="table name"
                            onChange={(e) => setTablename(e.target.value)}
                        />

                        <Select
                            value={convertTo}
                            onChange={(e) => setConvertTo(e.target.value)}
                            placeholder="convert to"
                            options={[{ id: 1, title: "SQL Server", value: "sql server" }]}
                        />
                    </div> */}

                    <PrimaryButton onClick={previewTable} title="previewTable" />
                </div>
            </div>
        </>
    );
}