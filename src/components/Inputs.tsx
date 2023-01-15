export const InputFile = (props: any) => {
  return (
    <input
      type="file"
      ref={props.ref}
      onChange={props.onchange}
      accept={props.accept}
      className="block w-full overflow-hidden  rounded  bg-gray-700 p-1 text-sm file:mr-4 file:rounded file:border-0 file:bg-blue-600 file:py-2 file:px-4 file:text-sm file:font-semibold file:text-white hover:file:bg-blue-500"
    />
  );
};

export const InputText = (props: any) => {
  return (
    <input
      type="text"
      className="w-full rounded bg-gray-700 p-2 placeholder:italic"
      value={props.value}
      placeholder={props.placeholder}
      onChange={props.onChange}
      maxLength={props.maxLength}
    />
  );
};
