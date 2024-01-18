<script>
    import { createEventDispatcher } from 'svelte';
    import { IconCopy } from "@tabler/icons-svelte";

    const dispatch = createEventDispatcher();
</script>

<button class="rounded p-2 text-gray-400 hover:bg-gray-600 hover:text-white" on:click={() => dispatch('click')}>
    <IconCopy class="h-6 w-6" title="copy" />
</button>