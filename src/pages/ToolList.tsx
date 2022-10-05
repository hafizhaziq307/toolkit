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
        <div className="text-lg font-medium text-amber-600">Home</div>
      </header>

      <section className="relative">
        <input
          onChange={searching}
          className="w-full rounded bg-[#1B2026] py-2 pl-2 pr-10 text-sm ring-1 ring-transparent focus:outline-none  focus:ring-amber-600"
          type="text"
          placeholder="Search"
        />

        <span className="pointer-events-none absolute top-1/2 right-4 -translate-y-1/2">
          <svg
            className="h-5 w-5 "
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            fill="currentColor"
          >
            <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352c79.5 0 144-64.5 144-144s-64.5-144-144-144S64 128.5 64 208s64.5 144 144 144z" />
          </svg>
        </span>
      </section>

      <section className="grid grid-cols-4 gap-4 rounded-sm p-5 ring-2 ring-[#1B2026]">
        {filteredSearch.map((tool) => (
          <Link
            className="group relative block text-sm font-medium focus:outline-none"
            to={tool.link}
          >
            <span className="grid h-full w-full place-content-center whitespace-pre-wrap rounded-md bg-[#1B2026] py-2 text-center text-lg capitalize shadow-md transition-transform group-hover:-translate-y-1.5 group-hover:text-amber-600">
              {tool.title.replace(/\s/g, "\n")}
            </span>
          </Link>
        ))}
      </section>
    </>
  );
}

export default ToolList;
