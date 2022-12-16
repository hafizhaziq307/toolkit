import { TrashIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { tailwind_colors } from "../../data";
import { Result } from "./Result";

export const TailwindColorSimilarity = () => {
  const [text, setText] = useState("");
  const [resultColors, setResultColors] = useState<any>([]);

  const calcColors = () => {
    let result: any = [];

    tailwind_colors.forEach((color) => {
      let objColor: any = {
        title: color.title,
        percentage: compareColors(text, color.hexcode).toFixed(2),
      };

      if (objColor.percentage > 50) result.push(objColor);
    });

    result.sort((a: any, b: any) => b.percentage - a.percentage);
    setResultColors(result.slice(0, 3));
  };

  const hexToRgb = (rawHex: string) => {
    const validHex = rawHex.toUpperCase().slice(1);
    const rgbHex: any = validHex.match(/.{1,2}/g);

    return rgbHex.map((item: any) => parseInt(item, 16));
  };

  const compareColors = (hex1: string, hex2: string) => {
    const rgb1 = hexToRgb(hex1);
    const rgb2 = hexToRgb(hex2);

    const red =
      rgb1[0] >= rgb2[0]
        ? (rgb2[0] / rgb1[0]) * 100
        : (rgb1[0] / rgb2[0]) * 100;
    const green =
      rgb1[1] >= rgb2[1]
        ? (rgb2[1] / rgb1[1]) * 100
        : (rgb1[1] / rgb2[1]) * 100;
    const black =
      rgb1[2] >= rgb2[2]
        ? (rgb2[2] / rgb1[2]) * 100
        : (rgb1[2] / rgb2[2]) * 100;

    return (red + green + black) / 3;
  };

  const clear = () => {
    setText("");
    setResultColors([]);
  };

  return (
    <>
      <header className="text-lg font-medium">Tailwind Color Similarity</header>

      <div className="mb-4 w-full rounded-lg border border-gray-600 bg-gray-800">
        <header
          className={`flex items-center justify-between gap-4 p-2 text-sm ${
            resultColors.length !== 0 ? "border-b border-gray-600" : ""
          }`}
        >
          <input
            type="text"
            className="w-full border border-none bg-transparent p-2 text-xl focus:outline-none"
            placeholder="Example: #FF5566"
            maxLength={7}
            value={text.toUpperCase()}
            onChange={(event) => setText(event.target.value)}
          />

          <div className="flex">
            <button
              type="button"
              className="rounded p-2 text-gray-400 hover:bg-gray-600 hover:text-white"
              onClick={calcColors}
            >
              <MagnifyingGlassIcon className="h-5 w-5" title="search" />
            </button>
            <button
              type="button"
              className="rounded p-2 text-gray-400 hover:bg-gray-600 hover:text-white"
              onClick={clear}
            >
              <TrashIcon className="h-5 w-5" title="clear" />
            </button>
          </div>
        </header>

        {resultColors.length !== 0 && (
          <div className="rounded-b-lg py-2 px-4">
            <header className="mb-3 text-lg font-medium">Result</header>

            <div className="space-y-6">
              {resultColors.map((color: any, index: any) => (
                <Result key={color.title} index={index} color={color} />
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
};
