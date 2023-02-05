import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { ClearButton } from "../../../components/Buttons";
import { InputText } from "../../../components/Inputs";
import { PageTitle } from "../../../components/PageTitle";
import { tailwind_colors } from "../../../data";

export default function ColorSimilarity() {
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

  const hexToRgb = (hex: string) => {
    hex = hex.slice(1);
    let r = parseInt(hex.substring(0, 2), 16);
    let g = parseInt(hex.substring(2, 4), 16);
    let b = parseInt(hex.substring(4, 6), 16);

    return {
      r: r,
      g: g,
      b: b,
    };
  };

  const compareColors = (hex1: string, hex2: string) => {
    const rgb1 = hexToRgb(hex1);
    const rgb2 = hexToRgb(hex2);

    const red = (rgb1.r >= rgb2.r ? rgb2.r / rgb1.r : rgb1.r / rgb2.r) * 100;
    const green = (rgb1.g >= rgb2.g ? rgb2.g / rgb1.g : rgb1.g / rgb2.g) * 100;
    const blue = (rgb1.b >= rgb2.b ? rgb2.b / rgb1.b : rgb1.b / rgb2.b) * 100;

    return (red + green + blue) / 3;
  };

  const clear = () => {
    setText("");
    setResultColors([]);
  };

  return (
    <>
      <PageTitle title="Tailwind Color Similarity" />

      <div className="card mb-4">
        <header
          className={`flex items-center justify-between gap-4 p-2 text-sm ${
            resultColors.length !== 0 ? "border-b border-gray-600" : ""
          }`}
        >
          <InputText
            placeholder="#FF5566"
            maxLength={7}
            value={text.toUpperCase()}
            onChange={(e: any) => setText(e.target.value)}
          />

          <div className="flex">
            <button
              className="rounded p-2 text-gray-400 hover:bg-gray-600 hover:text-white"
              onClick={calcColors}
            >
              <MagnifyingGlassIcon className="h-5 w-5" title="search" />
            </button>

            <ClearButton onClick={clear} />
          </div>
        </header>

        {resultColors.length !== 0 && (
          <div className="card-body">
            <header className="mb-3 text-lg font-medium">Result</header>

            <div className="space-y-6">
              {resultColors.map((color: any, index: any) => (
                <article
                  key={index}
                  className="flex rounded border border-gray-600"
                >
                  <div className="grid w-20 place-content-center border-r border-gray-600 text-xl font-medium">
                    {index + 1}
                  </div>
                  <div className="w-full space-y-1 p-3">
                    <header className="flex justify-between">
                      <div className="font-medium">{color.title}</div>
                      <div className="font-medium">{color.percentage}%</div>
                    </header>

                    <div className="h-3 w-full overflow-hidden rounded-full bg-gray-700">
                      <div
                        className="h-full bg-blue-600"
                        style={{ width: color.percentage + "80%" }}
                      />
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
