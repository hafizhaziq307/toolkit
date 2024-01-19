<script>
    import { convertFileSrc, invoke } from "@tauri-apps/api/tauri";
    import { open } from "@tauri-apps/api/dialog";  
    import PageTitle from "../lib/PageTitle.svelte";
    import ClearButton from "../lib/buttons/Clear.svelte";
    import CopyButton from "../lib/buttons/Copy.svelte";
    import { isEmpty } from "../assets/js/helper.js";
    
    let inputImage;
    let path;

    const openDialog = async () => {
        path = await open({
            multiple: false,
            directory: false,
        });

        if (isEmpty(path)) {
            return;
        }

        inputImage.src = convertFileSrc(path);
    };

    const run = async () => {
        if (isEmpty(path)) {
            return;
        }

        const res = await invoke("image_format_converter", { 
            path: path,
            convertTo: "png",
            timestamp: (Math.floor(Date.now() / 1000)).toString(),
        });

        console.log(res);
    }
</script>

<PageTitle title="Image Format Converter" />


<div class="card">
    <header class="card-header">
       
    </header>

    <div class="card-body space-y-4">
        <button on:click={openDialog} class="bg-green-500 rounded px-4 py-2">Upload</button>

        <img src="" alt="img" bind:this={inputImage} class="max-w-[50rem] rounded">
        
        <select>
            <option value="" disabled selected>Convert to</option>
            <option value="png">Png</option>
            <option value="jpg">Jpg</option>
        </select>
    </div>

    <footer class="card-footer">
        <button class="btn-primary" on:click={run}>Download</button>
    </footer>
</div>