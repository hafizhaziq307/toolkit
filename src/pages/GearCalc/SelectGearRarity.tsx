import { gear_calc_data } from "../../data";

export const SelectGearRarity = (props: any) => {
  return (
    <select
      value={props.currentGearRarity}
      onChange={(e) => props.setCurrentGearRarity(e.target.value)}
      className="select col-span-4"
    >
      <option value="">Gear Rarity</option>
      {gear_calc_data.rarities.map((item) => (
        <option key={item.id} value={item.value}>
          {item.label}
        </option>
      ))}
    </select>
  );
};
