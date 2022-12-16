import { Tool } from "./Tool";

export const Tools = (props: any) => {
  return (
    <>
      <header className="text-lg font-medium">Home</header>

      <div className="scrollbar-component h-[85vh] overflow-y-auto p-1">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {props.filteredTools.map((tool: any) => (
            <Tool key={tool.title} tool={tool} />
          ))}
        </div>
      </div>
    </>
  );
};
