import { gear_calc_data } from "../../data";

let options: any = [];
for (const substat of gear_calc_data.substats) {
  options.push({
    value: substat.id,
    label: substat.label,
  });
}

export const SelectSubstatType = (props: any) => {
  return (
    <>
      <select
        value={props.currentSubstat.substatId}
        className="select col-span-4"
        onChange={(e) =>
          props.setCurrentSubstats(
            props.currentSubstats.map((item: any) =>
              item.id == props.currentSubstat.id
                ? { ...item, substatId: e.target.value }
                : item
            )
          )
        }
      >
        <option value="">type</option>
        {gear_calc_data.substats.map((substat) => (
          <option key={substat.id} value={substat.id}>
            {substat.label}
          </option>
        ))}
      </select>
    </>
  );
};
