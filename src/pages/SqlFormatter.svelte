
<script>
    import PageTitle from "../lib/PageTitle.svelte";
    import ClearButton from "../lib/buttons/Clear.svelte";
    import CopyButton from "../lib/buttons/Copy.svelte";
    import { format } from 'sql-formatter';
    import { isEmpty } from "../assets/js/helper.js";
    
    let text = "";
    let formatTo = "";

    const execute = () => {
        if (isEmpty(formatTo)) {
            alert("Choose database type to format!");
            return;
        }

        text = format(text, { language: formatTo, keywordCase: "upper" });
    };

    const clear = () => {
        text = "";
        formatTo = "";
    };

    const copy = () => {
        navigator.clipboard.writeText(text).then(
            () => alert(`Copied!`),
            (err) => alert(`Copy failed! ${err}`)
        );
    };
</script>

<PageTitle title="SQL Formatter" />

<div class="card mb-4">
    <header class="card-header flex justify-between gap-2">
        <select bind:value={formatTo}>
            <option value="" disabled selected>convert to</option>
            <option value="tsql">SQL Server</option>
            <option value="postgresql">PostgreSQL</option>
            <option value="mysql">MySQL</option>
            <option value="mariadb">MariaDB</option>
        </select>

        <div class="flex">
            <CopyButton on:click={copy} />
            <ClearButton on:click={clear} />
        </div>
    </header>

    <div class="card-body space-y-4">
        <textarea bind:value={text} rows="15" placeholder="Write something..."></textarea>

        <div>
            <button on:click={execute} class="btn-primary">Format</button>
        </div>
    </div>
</div>