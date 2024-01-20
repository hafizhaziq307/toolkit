<script>
    import PageTitle from "../lib/PageTitle.svelte";
    import ClearButton from "../lib/buttons/Clear.svelte";
    import CopyButton from "../lib/buttons/Copy.svelte";
    import { isEmpty, copy } from "../assets/js/helper.js";

    let text = "";

    const capitalize = () => {
        const arr_text = text.toLowerCase().split(" ");

        for (let i = 0; i < arr_text.length; i++) {
            arr_text[i] = arr_text[i][0].toUpperCase() + arr_text[i].substr(1);
        }

        text = arr_text.join(" ");
    };

    const lowercase = () => {
        text = text.toLowerCase();
    };

    const uppercase = () => {
        text = text.toUpperCase();
    };

    const clear = () => {
        text = "";
    };
</script>

<PageTitle title="Text Transforms" />

<div class="card mb-4">
    <header class="card-header flex justify-end">
        <CopyButton on:click={() => copy(text)} />
        <ClearButton on:click={clear} />
    </header>

    <div class="card-body space-y-4">
        <textarea bind:value={text} rows="15" placeholder="Write something..."></textarea>
    </div>
    
    <footer class="card-footer flex gap-2">
        <button on:click={capitalize} class="btn-primary" disabled={isEmpty(text) ? 'disabled' : ''}>Capitalize</button>
        <button on:click={lowercase} class="btn-primary" disabled={isEmpty(text) ? 'disabled' : ''}>Lowercase</button>
        <button on:click={uppercase} class="btn-primary" disabled={isEmpty(text) ? 'disabled' : ''}>Uppercase</button>
    </footer>
</div>