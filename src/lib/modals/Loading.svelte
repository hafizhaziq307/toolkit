<script>
    import { IconLoader3 } from '@tabler/icons-svelte';

    export let open = false;
</script>

<div class="bg-slate-900 bg-opacity-50 flex justify-center items-center p-6 {open ? 'fixed inset-0' : 'hidden'}">
    <!-- overlay -->
    <div class="fixed inset-0 -z-10"></div>
    
    <!-- modal -->
    <div class="bg-gray-500 py-5 rounded-md max-w-md w-full">
        <div class="flex items-center justify-center gap-2">
            <IconLoader3 class="w-14 h-14 animate-spin"/>
            <div class="text-xl font-bold">Loading...</div>
        </div>
    </div>
</div>