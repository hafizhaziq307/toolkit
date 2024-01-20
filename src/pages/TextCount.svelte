<script>
    import PageTitle from "../lib/PageTitle.svelte";
    import ClearButton from "../lib/buttons/Clear.svelte";
    import CopyButton from "../lib/buttons/Copy.svelte";

    let word = "";
    let wordCount = 0;
    let charcount = 0;
    let charNoSpacecount = 0;

    const handleChange = (e) => {
        if (word.length === 0) {
            wordCount = 0;
            charcount = 0;
            charNoSpacecount = 0;
            return;
        }

        wordCount = word.trim().replace(/\s+/gi, " ").split(" ").length;
        charcount = word.length;
        charNoSpacecount = word.replace(/\s+/gi, "").length;
    };

    const clear = () => {
        word = "";
        wordCount = 0;
        charcount = 0;
        charNoSpacecount = 0;
    };
</script>

<PageTitle title="Text Count" />

<div class="card">
    <header class="card-header flex justify-end">
        <ClearButton on:click={clear} />
    </header>

    <div class="card-body">
        <textarea bind:value={word} on:input={handleChange} rows="15" placeholder="Write something..."></textarea>
    </div>

    <footer class="card-footer grid grid-cols-3 divide-x-2 divide-gray-600">
        <div class="text-center">
            <div class="text-2xl font-medium text-blue-600">
                {wordCount}
            </div>
            <div class="text-sm font-[350]">Words</div>
        </div>
        <div class="text-center">
            <div class="text-2xl font-medium text-blue-600">
                {charcount}
            </div>
            <div class="text-sm font-[350]">Characters</div>
        </div>
        <div class="text-center">
            <div class="text-2xl font-medium text-blue-600">
                {charNoSpacecount}
            </div>
            <div class="text-sm font-[350]">Characters Without Space</div>
        </div>
    </footer>
</div>