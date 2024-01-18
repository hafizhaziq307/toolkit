<script>
    import ClearButton from "../lib/buttons/Clear.svelte";
    import CopyButton from "../lib/buttons/Copy.svelte";
    import PageTitle from "../lib/PageTitle.svelte";
    import { isEmpty } from "../assets/js/helper.js";
    
    let color = "";
    let image;
    let files = [];

    $: if (!isEmpty(files)) {
        const file = files[0];

        image.src = URL.createObjectURL(file);

        (async () => {
            const result = await extractColor(image);
            color = result.color.hexcode;
        })();
	}

    const extractColor = async (imageElement) => {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
    
        await new Promise(
            (resolve) => (imageElement.onload = () => resolve(imageElement))
        );
    
        canvas.width = imageElement.width;
        canvas.height = imageElement.height;
        ctx.drawImage(imageElement, 0, 0, canvas.width, canvas.height);
    
        // Get the image data from the canvas
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const data = imageData.data;
    
        let r = 0;
        let g = 0;
        let b = 0;
        let count = 0;
    
        for (let i = 0; i < data.length; i += 4) {
            r += data[i];
            g += data[i + 1];
            b += data[i + 2];
            count++;
        }
        r = Math.floor(r / count);
        g = Math.floor(g / count);
        b = Math.floor(b / count);
    
        const brightness = (r * 299 + g * 587 + b * 114) / 1000;
        const isDark = brightness <= 125;
    
        return {
            color: {
                rgb: `rgb(${r}, ${g}, ${b})`,
                hexcode: `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`.toUpperCase(),
            },
            isDark: isDark,
        };
    };
    
    const copy = () => {
        navigator.clipboard.writeText(color).then(
            () => alert(`Copied!`),
            (err) => alert(`Copy failed! ${err}`)
        );
    };
    
    const clear = () => {
        image.src = "";
        color = "";
        files = [];
    };
</script>

<PageTitle title="Color Extractor" />

<div class="card">
    <header class="card-header flex justify-between gap-2">
        <input type="file" bind:files={files} accept="image/*" />
        <ClearButton on:click={clear} />
    </header>

    <div class="card-body {!isEmpty(files) ? '' : 'hidden'}">
        <img bind:this={image} src="" alt="img" class="h-[20rem] object-scale-down object-left" />
    </div>

    {#if !isEmpty(color)}
        <footer class="card-footer flex items-center justify-between gap-2">
            <div class="flex items-center gap-2">
                <div class="h-10 w-10 border" style="background-color: {color};" />
                <span class="text-xl">{color}</span>
            </div>

            <CopyButton on:click={copy} />
        </footer>
    {/if}
</div>