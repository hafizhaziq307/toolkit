<script>
    import { Link } from "svelte-routing";
    import { tags } from "../assets/js/data.js";
    import { isEmpty } from "../assets/js/helper.js";

    export let tool;


    // const [tag, setTag] = useState({
    //     id: 0,
    //     title: "-",
    //     icon: <></>,
    // });

    // useEffect(() => {
    //     let findTag = tags.find((tag) => tag.id === tool.tagId);
    //     if (!isEmpty(findTag)) setTag(findTag);
    // }, []);
</script>

<Link to={tool.link} class="space-y-2 rounded-lg bg-gray-800 p-3 hover:brightness-95">
    <header class="items-center gap-3 sm:flex">
        <div class="grid h-11 w-11 place-content-center rounded bg-gray-700">
            {@html tool.icon}
        </div>

        <div class="text-lg font-bold capitalize text-gray-200 line-clamp-1">
            {tool.title}
        </div>
    </header>

    <div class="hidden h-[50px] font-light text-gray-400 line-clamp-2 sm:block">
        {tool.description}
    </div>

    <!-- <footer class="flex gap-2">
        <span class="rounded bg-gray-700 py-0.5 px-2 text-xs font-bold uppercase text-gray-300">
            {tag.title}
        </span>
    </footer> -->
</Link>