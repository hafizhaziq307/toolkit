import { Link, Outlet } from "react-router-dom";
import { useState } from "react";
import { tags, tools } from "../data";
import { PageTitle, Tool } from "../components";

import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";

const Home = () => {
    const [filteredTools, setFilteredTools] = useState(tools);
    const [activeTagId, setActiveTagId] = useState(0);

    const searching = (id) => {
        id === 0
            ? setFilteredTools(tools)
            : setFilteredTools(tools.filter((tool) => tool.tagId === id));

        setActiveTagId(id);
    };

    return (
        <>
            <PageTitle title="Home" />

            <section className="card ">
                <div className="card-body flex flex-wrap gap-3 p-2">
                    {tags.map((tag) => (
                        <button
                            key={tag.id}
                            onClick={() => searching(tag.id)}
                            className={`flex items-center gap-1 rounded py-1.5 px-2.5 text-xs font-medium uppercase ${tag.id === activeTagId
                                ? "bg-blue-600 text-white"
                                : "bg-gray-700 hover:bg-gray-600"
                                }`}
                        >
                            {tag.icon}
                            <span className="uppercase">{tag.title}</span>
                        </button>
                    ))}
                </div>
            </section>

            <SimpleBar forceVisible="y" autoHide={true} style={{ maxHeight: "75vh" }}>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {filteredTools.map((tool) => (
                        <Tool key={tool.id} tool={tool} />
                    ))}
                </div>
            </SimpleBar>
        </>
    );
};

export default Home;