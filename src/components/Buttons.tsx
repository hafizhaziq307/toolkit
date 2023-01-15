import {
  TrashIcon,
  ClipboardDocumentListIcon,
} from "@heroicons/react/24/outline";

// blue button
export const Button = (props: any) => {
  return (
    <button
      onClick={props.onClick}
      className="w-full rounded bg-blue-600 px-4 py-2 font-semibold text-white hover:bg-blue-500"
    >
      {props.title}
    </button>
  );
};

// clear button
export const ClearButton = (props: any) => {
  return (
    <button
      className="rounded p-2 text-gray-400 hover:bg-gray-600 hover:text-white"
      onClick={props.onClick}
    >
      <TrashIcon className="h-5 w-5" title="clear" />
    </button>
  );
};

// copy button
export const CopyButton = (props: any) => {
  return (
    <button
      className="rounded p-2 text-gray-400 hover:bg-gray-600 hover:text-white"
      onClick={props.onClick}
    >
      <ClipboardDocumentListIcon className="h-5 w-5" title="copy" />
    </button>
  );
};
