import { useRef, useState, useEffect } from "react";
import { ExcelRenderer } from "react-excel-renderer";
import { Button, ClearButton } from "../../components/Buttons";
import { InputFile, InputText } from "../../components/Inputs";
import { Select } from "../../components/Select";
import { isEmpty, saveFile, fillEmptySlots } from "../../helpers";

export const ExcelToSql = () => {
  const [tablename, setTablename] = useState("");
  const [uploadFile, setUploadFile] = useState("");
  const [convertTo, setConvertTo] = useState("");

  const [rows, setRows] = useState([]);
  const [fields, setFields] = useState<any>([]);
  const [values, setValues] = useState<any>([]);

  const uploadFileRef: any = useRef();

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

    ExcelRenderer(uploadFile, (err: any, resp: any) => {
      if (err) {
        alert(err);
      } else {
        let rows = resp.rows
          .filter((item: any) => !isEmpty(item)) // remove empty cell
          .map((row: any) => fillEmptySlots(row, "NULL")); // change undefined to ""

        // change ' ' to 'NULL'
        rows = rows.map((fields: any) =>
          fields.map((field: any) => {
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
    tablename: string,
    fields: any[],
    listValues: any[]
  ) => {
    const columns = fields.map((field: any) => `[${field}]`).join(", ");

    let queries = [];
    for (let values of listValues) {
      values = values.map((value: any) => `N'${value}'`).join(", ");

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
      <header className="text-lg font-medium">Excel to SQL</header>

      <div className=" card">
        <header className="card-header flex justify-end">
          <ClearButton onClick={clear} />
        </header>

        <div className="card-body space-y-4">
          <InputFile
            ref={uploadFileRef}
            accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
            onChange={(e: any) => setUploadFile(e.target.files[0])}
          />

          <div className="grid grid-cols-2 gap-4">
            <InputText
              value={tablename}
              placeholder="table name"
              onChange={(e: any) => setTablename(e.target.value)}
            />

            <Select
              value={convertTo}
              onChange={(e: any) => setConvertTo(e.target.value)}
              placeholder="convert to"
              options={[{ id: 1, title: "SQL Server", value: "sql server" }]}
            />
          </div>

          <Button onClick={renderFile} title="Convert" />
        </div>
      </div>
    </>
  );
};
