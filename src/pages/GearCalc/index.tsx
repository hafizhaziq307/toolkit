import { useState } from "react";
import { HandThumbUpIcon } from "@heroicons/react/24/solid";

import { isEmpty } from "../../helpers";
import { gear_calc_data } from "../../data";
import { InputSubstatValue } from "./InputSubstatValue";
import { ClearButton } from "../../components/Buttons/ClearButton";
import { SelectSubstatType } from "./SelectSubstatType";
import { SelectEnhanceLevel } from "./SelectEnhanceLevel";
import { SelectGearRarity } from "./SelectGearRarity";
import { SelectGearLevel } from "./SelectGearLevel";

export const GearCalc = () => {
  const [currentSubstats, setCurrentSubstats] = useState<any>([
    {
      id: 1,
      substatId: "",
      value: "",
    },
    {
      id: 2,
      substatId: "",
      value: "",
    },
    {
      id: 3,
      substatId: "",
      value: "",
    },
    {
      id: 4,
      substatId: "",
      value: "",
    },
  ]);
  const [currentGearLevel, setCurrentGearLevel] = useState<any>("");
  const [currentEnchanceLevel, setCurrentEnchanceLevel] = useState<any>("");
  const [currentGearRarity, setCurrentGearRarity] = useState<any>("");
  const [result, setResult] = useState<any>([]);
  const [score, setScore] = useState(0);
  const [scoreDesc, setScoreDesc] = useState("");

  const generateResult = (currentSubstats: any) => {
    if (isEmpty(currentSubstats)) return;

    let tempResult = [];
    for (const [index, currentSubstat] of currentSubstats.entries()) {
      const searchedSubstat: any = gear_calc_data.substats.find(
        (item) => item.id == currentSubstat.substatId
      );

      if (!isEmpty(searchedSubstat)) {
        const countRolls = Math.ceil(
          currentSubstat.value / searchedSubstat.maxPerRoll
        );
        tempResult.push({
          id: index + 1,
          title: searchedSubstat.label,
          countRolls: countRolls,
          value: currentSubstat.value,
          miss: searchedSubstat.maxPerRoll * countRolls - currentSubstat.value,
          score: currentSubstat.value * searchedSubstat.scoreMultiplier,
        });
      }
    }

    let totalScore: number = tempResult.reduce(
      (total, item) => total + item.score,
      0
    );

    const maxScore: number =
      Number(currentGearLevel) *
      (Number(currentEnchanceLevel) + Number(currentGearRarity));

    totalScore = isEmpty(totalScore)
      ? 0
      : Math.round((totalScore / maxScore) * 100);

    switch (true) {
      case totalScore >= 80:
        setScoreDesc("Excellent Gear");
        break;
      case totalScore >= 75 && totalScore < 80:
        setScoreDesc("Great Gear");
        break;
      case totalScore >= 70 && totalScore < 75:
        setScoreDesc("Good Gear");
        break;
      default:
        setScoreDesc("Bad Gear");
        break;
    }

    setScore(totalScore);
    setResult(tempResult);
  };

  const clear = () => {
    setCurrentSubstats([
      {
        id: 1,
        substatId: "",
        value: "",
      },
      {
        id: 2,
        substatId: "",
        value: "",
      },
      {
        id: 3,
        substatId: "",
        value: "",
      },
      {
        id: 4,
        substatId: "",
        value: "",
      },
    ]);
    setCurrentGearLevel("");
    setCurrentEnchanceLevel("");
    setCurrentGearRarity("");
    setResult([]);
    setScore(0);
    setScoreDesc("");
  };

  return (
    <>
      <header className="text-lg font-medium">Gear Calc</header>

      <div className="space-y-6 text-sm lg:text-base">
        <div className="card">
          <header className="card-header flex justify-end">
            <ClearButton onClick={clear} />
          </header>

          <div className="card-body space-y-4">
            <section className="flex gap-4">
              <SelectGearRarity
                setCurrentGearRarity={setCurrentGearRarity}
                currentGearRarity={currentGearRarity}
              />
              <SelectGearLevel
                setCurrentGearLevel={setCurrentGearLevel}
                currentGearLevel={currentGearLevel}
              />
              <SelectEnhanceLevel
                setCurrentEnchanceLevel={setCurrentEnchanceLevel}
                currentEnchanceLevel={currentEnchanceLevel}
              />
            </section>

            <section>
              <header className="mb-2">Substats</header>
              <div className="space-y-2">
                {currentSubstats.map((currentSubstat: any) => (
                  <article
                    className="grid grid-cols-5 gap-4"
                    key={currentSubstat.id}
                  >
                    <SelectSubstatType
                      currentSubstat={currentSubstat}
                      currentSubstats={currentSubstats}
                      setCurrentSubstats={setCurrentSubstats}
                    />
                    <InputSubstatValue
                      currentSubstat={currentSubstat}
                      currentSubstats={currentSubstats}
                      setCurrentSubstats={setCurrentSubstats}
                    />
                  </article>
                ))}
              </div>
            </section>

            <section>
              <button
                className="btn-primary"
                onClick={() => generateResult(currentSubstats)}
              >
                Calculate
              </button>
            </section>
          </div>
        </div>

        {!isEmpty(result) && (
          <div className="card">
            <header className="card-header">Result</header>

            <div className="card-body space-y-6">
              <table className="w-full table-auto border-collapse">
                <tr className="odd:bg-gray-700 even:bg-gray-800">
                  <th className="border border-gray-500 p-3">Title</th>
                  <th className="border border-gray-500 p-3">Value</th>
                  <th className="border border-gray-500 p-3">Missed</th>
                  <th className="border border-gray-500 p-3">Rolled</th>
                </tr>
                {result.map((item: any) => (
                  <tr
                    className="odd:bg-gray-700 even:bg-gray-800"
                    key={item.id}
                  >
                    <td className="border border-gray-500 p-3 capitalize">
                      {item.title}
                    </td>
                    <td className="border border-gray-500 p-3">{item.value}</td>
                    <td className="border border-gray-500 p-3 font-medium text-red-600">
                      {item.miss}
                    </td>
                    <td
                      className={`border border-gray-500 p-3 ${
                        item.countRolls >= 4
                          ? "flex items-center justify-between"
                          : ""
                      }`}
                    >
                      {item.countRolls} times
                      {item.countRolls >= 4 && (
                        <HandThumbUpIcon className="h-5 w-5 text-green-500" />
                      )}
                    </td>
                  </tr>
                ))}
              </table>

              <section className="text-xl">
                {score}% | {scoreDesc}
              </section>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
