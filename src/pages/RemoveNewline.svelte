<script>
    import ClearButton from "../lib/buttons/Clear.svelte";
    import CopyButton from "../lib/buttons/Copy.svelte";
    import PageTitle from "../lib/PageTitle.svelte";
    
    let text = "";

    const removeAllNewlines = () => {
        text = text.replace(/[\n\r]/g, "");
    };

    const clear = () => {
        text = "";
    };

    const copy = () => {
        navigator.clipboard.writeText(text).then(
            () => alert(`Copied!`),
            (err) => alert(`Copy failed! ${err}`)
        );
    };
</script>

<PageTitle title="Remove Newline" />

<div class="card">
    <header class="card-header flex justify-end">
        <CopyButton on:click={copy} />
        <ClearButton on:click={clear} />
    </header>

    <div class="card-body space-y-4">
        <textarea bind:value={text} rows="15" placeholder="Write something..."></textarea>

        <div>
            <button on:click={removeAllNewlines}>Remove All Newlines</button>
        </div>
    </div>
</div>
