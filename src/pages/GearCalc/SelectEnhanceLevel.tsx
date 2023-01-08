import { gear_calc_data } from "../../data";

export const SelectEnhanceLevel = (props: any) => {
  return (
    <select
      value={props.currentEnchanceLevel}
      onChange={(e) => props.setCurrentEnchanceLevel(e.target.value)}
      className="select col-span-4"
    >
      <option value="">Enhance Level</option>
      {gear_calc_data.enhanceLevels.map((item) => (
        <option key={item.id} value={item.value}>
          {item.label}
        </option>
      ))}
    </select>
  );
};
