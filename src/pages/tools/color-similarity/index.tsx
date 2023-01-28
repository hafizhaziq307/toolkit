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
