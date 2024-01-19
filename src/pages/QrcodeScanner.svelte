<script>
    import QrScanner from "qr-scanner";
    import { IconExclamationCircle, IconLink } from '@tabler/icons-svelte';
    import ClearButton from "../lib/buttons/Clear.svelte";
    import { isEmpty } from "../assets/js/helper.js";
    import PageTitle from "../lib/PageTitle.svelte";

    let image = "";
    let url = "";
    let files = [];

    $: if (!isEmpty(files)) {
        const file = files[0];

        image = URL.createObjectURL(file);

        QrScanner.scanImage(file, { returnDetailedScanResult: true })
            .then(res => url = res.data)
            .catch(error => console.error(error));
	}

    const clear = () => {
        image = "";
        url = "";
        files = [];
    };
</script>

<PageTitle title="QR Code Scanner" />

<div class="card">
    <header class="card-header flex justify-between gap-2">
        <input type="file" bind:files={files} accept="image/*" />
        <ClearButton on:click={clear} />
    </header>

    {#if !isEmpty(image)}
        <div class="card-body space-y-4">
            <img class="aspect-video w-[40rem] bg-gray-700 object-scale-down object-left" src={image} alt="img" />
        </div>

        <footer class="card-footer">
            {#if isEmpty(url)}
                <div class="flex items-center gap-1 rounded-lg bg-red-100 p-4 text-sm text-red-700">
                    <IconExclamationCircle class="h-6 w-6 text-red-700" />
                    <div class="font-medium">No QR Code found!</div>
                </div>
            {:else}
                <div class="rounded bg-gray-800 p-3">
                    <div target="_blank" class="flex items-center gap-2">
                        <IconLink class="h-6 w-6 text-white" />
                        <a href={url} target="_blank" class="underline-offset-2 hover:underline">{url}</a>
                    </div>
                </div>
            {/if}
        </footer>
    {/if}
</div>