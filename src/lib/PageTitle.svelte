<script>
    import { Link } from "svelte-routing";

    export let title;
</script>

{#if title == "Home"}
    <header class="font-medium">
        <div>{title}</div>
    </header>
{:else}
    <header class="flex gap-2 font-medium">
        <Link to="/">
            <div class="text-blue-500 underline underline-offset-2">Home</div>
        </Link>
        <div>&middot;</div>
        <div>{title}</div>
    </header>
{/if}