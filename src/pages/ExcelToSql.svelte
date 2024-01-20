<script>
    import ClearButton from "../lib/buttons/Clear.svelte";
    import PageTitle from "../lib/PageTitle.svelte";
    import { isEmpty, saveFile, convertExcelToJson } from "../assets/js/helper.js";
    import LoadingModal from "../lib/modals/Loading.svelte";

    let files;
    let tablename = "";
    let convertTo = "";
    let isOpen = false;

    const run = async() => {
        isOpen = true;
        const file = files[0];

        const data = await convertExcelToJson(file);

        switch (convertTo) {
            case "sql server":
                const content = convertToSqlServer(tablename, data);
                saveFile(content, `${tablename}.sql`);
                break;
    
            default:
                console.error("error!");
                break;
        }

        isOpen = false;
    }

    const convertToSqlServer = (tablename, data) => {
        const headers = Object.values(data[0]);

        data.shift(); // remove header columns

        let queries = [];
        for (let i = 0; i < data.length; i++) {
            const row = Object.values(data[i]).map(x => `N'${x}'`);

            queries.push(
                `INSERT INTO [dbo].[${tablename}] (${headers.join(", ")}) VALUES (${row.join(", ")});`
            );
        }

        return queries.join("\r\n");
    };

    const clear = () => {
        files = [];
        tablename ="";
        convertTo = "";
    }
</script>

<PageTitle title="Excel to SQL" />

<div class="card">
    <header class="card-header flex justify-end">
        <ClearButton on:click={clear} />
    </header>

    <div class="card-body space-y-4">
        <input type="file" bind:files={files} accept=".xlsx, .xls" />

        <div class="grid grid-cols-2 gap-4">
            <input type="text" bind:value={tablename} placeholder="table name">

            <select bind:value={convertTo}>
                <option disabled selected>convert to</option>
                <option value="sql server">SQL Server</option>
            </select>
        </div>
    </div>
    
    <footer class="card-footer">
        <button class="btn-primary" on:click={run} disabled={(isEmpty(tablename) || isEmpty(convertTo) || isEmpty(files)) ? 'disabled' : ''}>Convert</button>
    </footer>
</div>

<LoadingModal open={isOpen} />