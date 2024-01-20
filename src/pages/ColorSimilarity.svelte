<script>
    import { IconSearch } from '@tabler/icons-svelte';
    import PageTitle from "../lib/PageTitle.svelte";
    import ClearButton from "../lib/buttons/Clear.svelte";
    import { tailwind_colors } from "../assets/js/data.js";

    let text = "";
    let resultColors = [];

    const calcColors = () => {
        let result = [];

        tailwind_colors.forEach((color) => {
            let objColor = {
                title: color.title,
                percentage: compareColors(text, color.hexcode).toFixed(2),
            };

            if (objColor.percentage > 50) result.push(objColor);
        });

        result.sort((a, b) => b.percentage - a.percentage);
        resultColors = result.slice(0, 3);
    };

    const hexToRgb = (hex) => {
        hex = hex.slice(1);
        let r = parseInt(hex.substring(0, 2), 16);
        let g = parseInt(hex.substring(2, 4), 16);
        let b = parseInt(hex.substring(4, 6), 16);

        return {
            r: r,
            g: g,
            b: b,
        };
    };

    const compareColors = (hex1, hex2) => {
        const rgb1 = hexToRgb(hex1);
        const rgb2 = hexToRgb(hex2);

        const red = (rgb1.r >= rgb2.r ? rgb2.r / rgb1.r : rgb1.r / rgb2.r) * 100;
        const green = (rgb1.g >= rgb2.g ? rgb2.g / rgb1.g : rgb1.g / rgb2.g) * 100;
        const blue = (rgb1.b >= rgb2.b ? rgb2.b / rgb1.b : rgb1.b / rgb2.b) * 100;

        return (red + green + blue) / 3;
    };

    const clear = () => {
        text = "";
        resultColors = [];
    };
</script>

<PageTitle title="Tailwind Color Similarity" />

<div class="card mb-4">
    <header
        class={`flex items-center justify-between gap-2 p-2 text-sm ${resultColors.length !== 0 ? "border-b border-gray-600" : ""
            }`}
    >
        <input type="text" placeholder="#FF5566" maxlength="7" bind:value={text} on:input={() => text = text.toUpperCase()}>

        <div class="flex">
            <button class="rounded p-2 text-gray-400 hover:bg-gray-600 hover:text-white" on:click={calcColors}>
                <IconSearch class="h-6 w-6" title="search"/>
            </button>

            <ClearButton on:click={clear} />
        </div>
    </header>

    {#if resultColors.length !== 0}
        <div class="card-body">
            <header class="mb-3 text-lg font-medium">Result</header>

            <div class="space-y-6">
                {#each resultColors as color, i}
                    <article class="flex rounded border border-gray-600">
                        <div class="grid w-20 place-content-center border-r border-gray-600 text-xl font-medium">
                            {i + 1}
                        </div>
                        <div class="w-full space-y-1 p-3">
                            <header class="flex justify-between">
                                <div class="font-medium">{color.title}</div>
                                <div class="font-medium">{color.percentage}%</div>
                            </header>

                            <div class="h-3 w-full overflow-hidden rounded-full bg-gray-700">
                                <div class="h-full bg-blue-600" style={{ width: color.percentage + "80%" }}/>
                            </div>
                        </div>
                    </article>
                {/each}
            </div>
        </div>
    {/if}
</div>