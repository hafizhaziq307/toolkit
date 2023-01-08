import { ClipboardDocumentListIcon } from "@heroicons/react/24/outline";

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
