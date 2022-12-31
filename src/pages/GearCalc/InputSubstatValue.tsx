export const InputSubstatValue = (props: any) => {
  return (
    <input
      type="text"
      className="rounded bg-gray-700 p-2"
      placeholder="0"
      value={props.currentSubstat.value}
      onChange={(e) =>
        props.setCurrentSubstats(
          props.currentSubstats.map((item: any) =>
            item.id == props.currentSubstat.id
              ? { ...item, value: e.target.value }
              : item
          )
        )
      }
    />
  );
};
