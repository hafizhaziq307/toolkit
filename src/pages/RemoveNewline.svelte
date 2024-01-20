<script>
    import ClearButton from "../lib/buttons/Clear.svelte";
    import CopyButton from "../lib/buttons/Copy.svelte";
    import PageTitle from "../lib/PageTitle.svelte";
    import { isEmpty, copy } from "../assets/js/helper.js";

    let text = "";

    const removeAllNewlines = () => {
        text = text.replace(/[\n\r]/g, "");
    };

    const clear = () => {
        text = "";
    };
</script>

<PageTitle title="Remove Newline" />

<div class="card">
    <header class="card-header flex justify-end">
        <CopyButton on:click={() => copy(text)} />
        <ClearButton on:click={clear} />
    </header>

    <div class="card-body">
        <textarea bind:value={text} rows="15" placeholder="Write something..."></textarea>
    </div>
    
    <footer class="card-footer">
        <button on:click={removeAllNewlines} class="btn-primary" disabled={isEmpty(text) ? 'disabled' : ''}>Remove All Newlines</button>
    </footer>
</div>
