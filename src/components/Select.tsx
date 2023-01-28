import { isEmpty } from "../helpers";

export const Select = (props: any) => {
  return (
    <select
      value={props.value}
      onChange={props.onChange}
      className={`w-full rounded bg-gray-700 p-2 capitalize ${
        isEmpty(props.value) ? "text-gray-400" : "text-white"
      } ${props.className}`}
    >
      <option value="" className="text-gray-400">
        {props.placeholder}
      </option>
      {props.options.map((option: any) => (
        <option key={option.id} value={option.value} className="text-white">
          {option.title}
        </option>
      ))}
    </select>
  );
};