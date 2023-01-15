export const Textarea = (props: any) => {
  return (
    <textarea
      onChange={props.onchange}
      value={props.value}
      rows={20}
      className="w-full bg-transparent text-sm text-white placeholder-gray-400 focus:outline-none"
      placeholder="Write something..."
    ></textarea>
  );
};
