import { TbTrash } from "react-icons/tb";

export default function Clear(props) {
    return (
        <button
            className="rounded p-2 text-gray-400 hover:bg-gray-600 hover:text-white"
            onClick={props.onClick}
        >
            <TbTrash strokeWidth={1.5} className="h-6 w-6" title="clear" />
        </button>
    );
}