
<script>
    import PageTitle from "../lib/PageTitle.svelte";
    import ClearButton from "../lib/buttons/Clear.svelte";
    import CopyButton from "../lib/buttons/Copy.svelte";
    import { format } from 'sql-formatter';
    import { isEmpty, copy } from "../assets/js/helper.js";
    
    let text = "";
    let convertTo = "";

    const execute = () => {
        if (isEmpty(convertTo)) {
            alert("Choose database type to format!");
            return;
        }

        text = format(text, { language: convertTo, keywordCase: "upper" });
    };

    const clear = () => {
        text = "";
        convertTo = "";
    };
</script>

<PageTitle title="SQL Formatter" />

<div class="card mb-4">
    <header class="card-header flex justify-between gap-2">
        <select bind:value={convertTo}>
            <option value="" disabled selected>convert to</option>
            <option value="tsql">SQL Server</option>
            <option value="postgresql">PostgreSQL</option>
            <option value="mysql">MySQL</option>
            <option value="mariadb">MariaDB</option>
        </select>

        <div class="flex">
            <CopyButton on:click={() => copy(text)} />
            <ClearButton on:click={clear} />
        </div>
    </header>

    <div class="card-body">
        <textarea bind:value={text} rows="15" placeholder="Write something..."></textarea>
    </div>
    
    <footer class="card-footer">
        <button on:click={execute} class="btn-primary" disabled={(isEmpty(text) || isEmpty(convertTo)) ? 'disabled' : ''}>Format</button>
    </footer>
</div>