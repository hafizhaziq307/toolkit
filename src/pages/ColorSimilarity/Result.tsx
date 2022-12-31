export const Result = (props: any) => {
  return (
    <article className="flex rounded border border-gray-600">
      <div className="grid w-20 place-content-center border-r border-gray-600 text-xl font-medium">
        {props.index + 1}
      </div>
      <div className="w-full space-y-1 p-3">
        <header className="flex justify-between">
          <div className="font-medium">{props.color.title}</div>
          <div className="font-medium">{props.color.percentage}%</div>
        </header>

        <div className="h-3 w-full overflow-hidden rounded-full bg-gray-700">
          <div
            className="h-full bg-blue-600"
            style={{ width: props.color.percentage + "80%" }}
          />
        </div>
      </div>
    </article>
  );
};
