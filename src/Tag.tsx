export const Tag = (props: any) => {
  return (
    <span
      key={props.tag}
      className="rounded bg-gray-700 py-0.5 px-2 text-xs font-bold uppercase text-gray-300"
    >
      {props.tag}
    </span>
  );
};
