<script>
    import { ExcelRenderer } from "react-excel-renderer";
    import ClearButton from "../lib/buttons/Clear.svelte";
    import PageTitle from "../lib/PageTitle.svelte";
    import { isEmpty, saveFile, fillEmptySlots } from "../assets/js/helper.js";

    let files;
    let tablename = "";
    let uploadFile = "";
    let convertTo = "";
    
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
        table = "";
        uploadFile = "";
        convertTo = "";
        fields = [];
        values = [];
    };
</script>

<PageTitle title="Excel to SQL" />

<div class=" card">
    <header class="card-header flex justify-end">
        <ClearButton on:click={clear} />
    </header>

    <div class="card-body space-y-4">
        <input type="file" bind:files={files} accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel" />

        <div class="grid grid-cols-2 gap-4">
            <input type="text" bind:value={tablename} placeholder="table name">

            <select bind:value={convertTo}>
                <option disabled selected>convert to</option>
                <option value="sql server">SQL Server</option>
            </select>
        </div>

        <button class="btn-primary" on:click={renderFile}>Convert</button>
    </div>
</div>