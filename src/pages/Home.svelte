<script>
    import { Svroller } from 'svrollbar';
    import { tags, tools } from "../assets/js/data.js";
    import Tool from "../lib/Tool.svelte";
    import PageTitle from "../lib/PageTitle.svelte";

    let filteredTools = tools;
    let activeTagId = 0;

    const searching = (id) => {
        if (id == 0) {
            filteredTools = tools
        } else {
            filteredTools = tools.filter((tool) => tool.tagId === id)
        }
       
        activeTagId = id;
    };
</script>
    

<PageTitle title="Home" />

<section class="card">
    <div class="card-body flex flex-wrap gap-3 p-2">
        {#each tags as tag}
            <button on:click={() => searching(tag.id)} class="flex items-center gap-1 rounded py-1.5 px-2.5 text-xs font-medium uppercase {tag.id == activeTagId ? 'bg-blue-600 text-white' : 'bg-gray-700 hover:bg-gray-600'}">
                {@html tag.icon}
                <span class="uppercase">{tag.title}</span>
            </button>
        {/each}
    </div>
</section>


<Svroller alwaysVisible={true} class="p-4" width="1" height="77vh" margin={{ right: 2 }}>
    <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {#each tools as tool}
            <Tool tool={tool} />
        {/each}
    </div>
</Svroller>