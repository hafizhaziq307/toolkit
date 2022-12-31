import { Link } from "react-router-dom";
import { Tag } from "../../Tag";

export const Tool = (props: any) => {
  return (
    <Link
      to={props.tool.link}
      className="space-y-2 rounded-lg bg-gray-800 p-3 hover:brightness-95"
    >
      <header className="items-center gap-3 md:flex">
        <div className="grid h-11 w-11 place-content-center rounded bg-gray-700">
          {props.tool.icon}
        </div>
        <div className="text-lg font-bold capitalize text-gray-200 line-clamp-1">
          {props.tool.title}
        </div>
      </header>

      <div className="hidden h-[50px] font-light text-gray-400 line-clamp-2 md:block">
        {props.tool.description}
      </div>

      <footer className="flex gap-2">
        <Tag tag={props.tool.tag} />
      </footer>
    </Link>
  );
};
