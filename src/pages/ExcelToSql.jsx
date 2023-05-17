/* eslint-disable react-hooks/exhaustive-deps */
import { useRef, useState, useEffect } from "react";
import { ExcelRenderer } from "react-excel-renderer";
import { ClearButton, PrimaryButton } from "../components/buttons";
import { FileInput, TextInput } from "../components/inputs";
import { PageTitle, Select } from "../components";
import { isEmpty, saveFile, fillEmptySlots } from "../helpers";

export default function ExcelToSql() {
    const [tablename, setTablename] = useState("");
    const [uploadFile, setUploadFile] = useState("");
    const [convertTo, setConvertTo] = useState("");

    const [rows, setRows] = useState([]);
    const [fields, setFields] = useState([]);
    const [values, setValues] = useState([]);

    const uploadFileRef = useRef();

    useEffect(() => {
        if (isEmpty(rows)) return;

        let temp = rows;
        setFields(temp[0]);

        temp.shift();
        setValues(temp);
    }, [rows]);

    useEffect(() => {
        if (isEmpty(fields) || isEmpty(values)) return;

        let content = "";
        switch (convertTo) {
            case "sql server":
                content = convertToSqlServer(tablename, fields, values);
                break;

            default:
                content = "error occurs!";
                break;
        }

        saveFile(content, `${tablename}.sql`);
    }, [fields, values]);

    const renderFile = () => {
        if (
            isEmpty(tablename) ||
            isEmpty(convertTo) ||
            isEmpty(uploadFileRef.current.value)
        ) {
            alert("Please fill all the form!");
            return;
        }

        ExcelRenderer(uploadFile, (err, resp) => {
            if (err) {
                alert(err);
            } else {
                let rows = resp.rows
                    .filter((item) => !isEmpty(item)) // remove empty cell
                    .map((row) => fillEmptySlots(row, "NULL")); // change undefined to ""

                // change ' ' to 'NULL'
                rows = rows.map((fields) =>
                    fields.map((field) => {
                        if (typeof field != "string") return field;
                        if (!isEmpty(field.trim())) return field;
                        return "NULL";
                    })
                );

                setRows(rows);
            }
        });
    };

    const convertToSqlServer = (
        tablename,
        fields,
        listValues
    ) => {
        const columns = fields.map((field) => `[${field}]`).join(", ");

        let queries = [];
        for (let values of listValues) {
            values = values.map((value) => `N'${value}'`).join(", ");

            queries.push(
                `INSERT INTO [dbo].[${tablename}] (${columns}) VALUES (${values});`
            );
        }

        return queries.join("\r\n");
    };

    const clear = () => {
        uploadFileRef.current.value = "";
        setTablename("");
        setUploadFile("");
        setConvertTo("");
        setFields([]);
        setValues([]);
    };

    return (
        <>
            <PageTitle title="Excel to SQL" />

            <div className=" card">
                <header className="card-header flex justify-end">
                    <ClearButton onClick={clear} />
                </header>

                <div className="card-body space-y-4">
                    <FileInput
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
                    </div>

                    <PrimaryButton onClick={renderFile} title="Convert" />
                </div>
            </div>
        </>
    );
}
