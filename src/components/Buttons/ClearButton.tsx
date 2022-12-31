import { TrashIcon } from "@heroicons/react/24/outline";

export const ClearButton = (props: any) => {
  return (
    <button
      type="button"
      className="rounded p-2 text-gray-400 hover:bg-gray-600 hover:text-white"
      onClick={props.onClick}
    >
      <TrashIcon className="h-5 w-5" title="clear" />
    </button>
  );
};
