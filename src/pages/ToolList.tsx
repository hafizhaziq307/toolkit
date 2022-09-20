import { Link } from "react-router-dom";
import { useState } from "react";

function ToolList() {
  const tools = [
    {
      title: "word count",
      type: "text",
      link: "text_tool_word_count",
    },
    {
      title: "remove newline",
      type: "text",
      link: "text_tool_remove_newline",
    },
    {
      title: "word transforms",
      type: "text",
      link: "text_tool_word_transforms",
    },
  ];

  const [filteredSearch, setFilteredSearch] = useState<any[]>(tools);

  const searching = (e: React.ChangeEvent<any>) => {
    let search = e.target.value.trim();

    setFilteredSearch(
      tools.filter(
        (tool) =>
          tool.type.toLowerCase().includes(search.toLowerCase()) ||
          tool.title.toLowerCase().includes(search.toLowerCase())
      )
    );
  };

  return (
    <>
      <header className="flex items-center space-x-2">
        <div className="text-lg">Home</div>
      </header>

      <section className="relative">
        <input
          onChange={searching}
          className="w-full rounded py-2 pl-2 pr-10 text-sm ring-1 ring-stone-300 focus:outline-none focus:ring-2 focus:ring-indigo-600"
          type="text"
          placeholder="Search"
        />

        <span className="pointer-events-none absolute top-1/2 right-4 -translate-y-1/2 text-stone-600">
          <svg
            className="h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            fill="currentColor"
          >
            <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352c79.5 0 144-64.5 144-144s-64.5-144-144-144S64 128.5 64 208s64.5 144 144 144z" />
          </svg>
        </span>
      </section>

      <section>
        <div className="flex">
          {filteredSearch.map((tool) => (
            <Link
              className="group relative m-3 block h-40 w-40 text-sm font-medium focus:outline-none"
              to={tool.link}
            >
              <span className="absolute inset-0 h-full w-full border-2 border-dashed border-black"></span>
              <span className="grid h-full w-full place-content-center whitespace-pre-wrap border-2 border-black bg-white text-center text-lg capitalize transition-transform group-hover:-translate-x-1.5 group-hover:-translate-y-1.5">
                {tool.title.replace(/\s/g, "\n")}
              </span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}

export default ToolList;
