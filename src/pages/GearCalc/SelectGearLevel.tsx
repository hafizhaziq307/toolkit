import { gear_calc_data } from "../../data";

export const SelectGearLevel = (props: any) => {
  return (
    <select
      value={props.currentGearLevel}
      onChange={(e) => props.setCurrentGearLevel(e.target.value)}
      className="select"
    >
      <option value="">Gear Level</option>
      {gear_calc_data.gearLevels.map((item) => (
        <option key={item.id} value={item.value}>
          {item.label}
        </option>
      ))}
    </select>
  );
};
