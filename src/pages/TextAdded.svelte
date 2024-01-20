<script>
    import PageTitle from "../lib/PageTitle.svelte";
    import ClearButton from "../lib/buttons/Clear.svelte";
    import CopyButton from "../lib/buttons/Copy.svelte";
    import { isEmpty, copy } from "../assets/js/helper.js";

    let text = "";
    let rowType = "";
    let start = "";
    let end = "";

    const addText = () => {
        if (isEmpty(rowType)) {
            alert("Choose row type!");
            return;
        }

        let temp = '';
        if (rowType == 1) {
            temp = `${start}${text}${end}`;

        } else if (rowType == 2) {
            let rows = text.split('\n');
            temp = rows.map((row) => `${start}${row}${end}`).join('\n');
        }

        text = temp;
    }

    const clear = () => {
        text = "";
        rowType = "";
        start = "";
        end = "";
    };
</script>

<PageTitle title="Text Added" />

<div class="card mb-4">
    <header class="card-header space-y-4">
        <div class="flex justify-between gap-2">
            <select bind:value={rowType}>
                <option value="" disabled selected>Choose rowType</option>
                <option value="1">One Row</option>
                <option value="2">Every Rows</option>
            </select>

            <div class="flex">
                <CopyButton on:click={() => copy(text)} />
                <ClearButton on:click={clear} />
            </div>
        </div>
    </header>

    <div class="card-body space-y-4">
        <div class="grid grid-cols-3 gap-2 items-center">
            <input type="text" placeholder="Start" bind:value={start} />
            <div class="text-center truncate">Your text is here!</div>
            <input type="text" placeholder="End" bind:value={end} />
        </div>

        <textarea bind:value={text} rows="15" placeholder="Write something..."></textarea>
    </div>
    
    <footer class="card-footer">
        <button on:click={addText} class="btn-primary"disabled={(isEmpty(text) || isEmpty(rowType) || isEmpty(start) || isEmpty(end)) ? 'disabled' : ''}>Add</button>
    </footer>
</div>