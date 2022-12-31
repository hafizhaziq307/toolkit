import { gear_calc_data } from "../../data";

export const SelectGearRarity = (props: any) => {
  return (
    <select
      value={props.currentGearRarity}
      onChange={(e) => props.setCurrentGearRarity(e.target.value)}
      className="col-span-4 w-full rounded bg-gray-700 p-2 capitalize"
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
