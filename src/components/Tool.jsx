import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { tags } from "../data";
import { isEmpty } from "../helpers";

export default function Tool(props) {
    const [tag, setTag] = useState({
        id: 0,
        title: "-",
        icon: <></>,
    });

    useEffect(() => {
        let findTag = tags.find((tag) => tag.id === props.tool.tagId);
        if (!isEmpty(findTag)) setTag(findTag);
    }, []);

    return (
        <Link
            to={props.tool.link}
            className="space-y-2 rounded-lg bg-gray-800 p-3 hover:brightness-95"
        >
            <header className="items-center gap-3 sm:flex">
                <div className="grid h-11 w-11 place-content-center rounded bg-gray-700">
                    {props.tool.icon}
                </div>
                <div className="text-lg font-bold capitalize text-gray-200 line-clamp-1">
                    {props.tool.title}
                </div>
            </header>

            <div className="hidden h-[50px] font-light text-gray-400 line-clamp-2 sm:block">
                {props.tool.description}
            </div>

            <footer className="flex gap-2">
                <span className="rounded bg-gray-700 py-0.5 px-2 text-xs font-bold uppercase text-gray-300">
                    {tag.title}
                </span>
            </footer>
        </Link>
    );
}