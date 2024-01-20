<script>
    import { convertFileSrc, invoke } from "@tauri-apps/api/tauri";
    import { open } from "@tauri-apps/api/dialog";  
    import PageTitle from "../lib/PageTitle.svelte";
    import ClearButton from "../lib/buttons/Clear.svelte";
    import CopyButton from "../lib/buttons/Copy.svelte";
    import { isEmpty } from "../assets/js/helper.js";
    import LoadingModal from "../lib/modals/Loading.svelte";
    
    let image;
    let path;
    let convertTo = "";
    let isOpen = false;

    const openDialog = async () => {
        path = await open({
            multiple: false,
            directory: false,
            filters: [{
                name: 'Image',
                extensions: ['png', 'jpeg', 'jpg']
            }]
        });

        if (isEmpty(path)) {
            return;
        }

        image.src = convertFileSrc(path);
    };

    const run = async () => {
        if (isEmpty(path)) {
            return;
        }

        isOpen = true;

        const res = await invoke("image_format_converter", { 
            path: path,
            convertTo: convertTo,
            timestamp: (Math.floor(Date.now() / 1000)).toString(),
        });

        isOpen = false;
    }
</script>

<PageTitle title="Image Format Converter" />

<div class="card">
    <header class="card-header flex justify-between gap-2">
        <button on:click={openDialog} class="rounded bg-emerald-600 px-4 py-2 font-semibold text-white hover:bg-emerald-500">Upload</button>
       
        <select bind:value={convertTo} class="capitalize">
            <option value="" disabled selected>Convert to</option>
            <option value="png">png</option>
            <option value="jpg">jpg</option>
            <option value="webp">webp</option>
            <option value="ico">ico</option>
        </select>
    </header>

    <div class="card-body space-y-4 {path ? '' : 'hidden'}">
        <img src="" alt="img" bind:this={image} class="max-w-[50rem] rounded w-full">
    </div>

    <footer class="card-footer">
        <button class="btn-primary" on:click={run}>Download</button>
    </footer>
</div>

<LoadingModal open={isOpen} />