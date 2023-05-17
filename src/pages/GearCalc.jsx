import { useState } from "react";
import { TbThumbUpFilled } from "react-icons/tb";
import { ClearButton, PrimaryButton } from "../components/buttons";
import { TextInput } from "../components/inputs";
import { enhanceLevels, gearLevels, rarities, substats } from "../data";
import { isEmpty } from "../helpers";
import { PageTitle, Select } from "../components";

export default function GearCalc() {
    const [currentSubstats, setCurrentSubstats] = useState([
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
    const [currentGearLevel, setCurrentGearLevel] = useState("");
    const [currentEnchanceLevel, setCurrentEnchanceLevel] = useState("");
    const [currentGearRarity, setCurrentGearRarity] = useState("");
    const [result, setResult] = useState([]);
    const [score, setScore] = useState(0);
    const [scoreDesc, setScoreDesc] = useState("");

    const generateResult = (currentSubstats) => {
        if (isEmpty(currentSubstats)) return;

        let tempResult = [];
        for (const [index, currentSubstat] of currentSubstats.entries()) {
            const searchedSubstat = substats.find(
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

        let totalScore = tempResult.reduce(
            (total, item) => total + item.score,
            0
        );

        const maxScore =
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
            <PageTitle title="Gear Calc" />

            <div className="space-y-6 text-sm lg:text-base">
                <div className="card">
                    <header className="card-header flex justify-end">
                        <ClearButton onClick={clear} />
                    </header>

                    <div className="card-body space-y-4">
                        <section className="flex gap-4">
                            {/* gear rarity */}
                            <Select
                                value={currentGearRarity}
                                onChange={(e) => setCurrentGearRarity(e.target.value)}
                                placeholder="Gear Rarity"
                                options={rarities.map((item) => {
                                    return { id: item.id, title: item.label, value: item.value };
                                })}
                            />

                            {/* gear level */}
                            <Select
                                value={currentGearLevel}
                                onChange={(e) => setCurrentGearLevel(e.target.value)}
                                placeholder="gear level"
                                options={gearLevels.map((item) => {
                                    return { id: item.id, title: item.label, value: item.value };
                                })}
                            />

                            {/* enhance level */}
                            <Select
                                value={currentEnchanceLevel}
                                onChange={(e) => setCurrentEnchanceLevel(e.target.value)}
                                className="col-span-4"
                                placeholder="enhance level"
                                options={enhanceLevels.map((item) => {
                                    return { id: item.id, title: item.label, value: item.value };
                                })}
                            />
                        </section>

                        <section>
                            <header className="mb-2">Substats</header>
                            <div className="space-y-2">
                                {currentSubstats.map((currentSubstat) => (
                                    <article
                                        className="grid grid-cols-5 gap-4"
                                        key={currentSubstat.id}
                                    >
                                        <Select
                                            value={currentSubstat.substatId}
                                            onChange={(e) =>
                                                setCurrentSubstats(
                                                    currentSubstats.map((item) =>
                                                        item.id == currentSubstat.id
                                                            ? { ...item, substatId: e.target.value }
                                                            : item
                                                    )
                                                )
                                            }
                                            placeholder="type"
                                            options={substats.map((item) => {
                                                return {
                                                    id: item.id,
                                                    title: item.label,
                                                    value: item.id,
                                                };
                                            })}
                                            className="col-span-4"
                                        />

                                        <TextInput
                                            placeholder="0"
                                            value={currentSubstat.value}
                                            onChange={(e) =>
                                                setCurrentSubstats(
                                                    currentSubstats.map((item) =>
                                                        item.id == currentSubstat.id
                                                            ? { ...item, value: e.target.value }
                                                            : item
                                                    )
                                                )
                                            }
                                        />
                                    </article>
                                ))}
                            </div>
                        </section>

                        <section>
                            <PrimaryButton
                                onClick={() => generateResult(currentSubstats)}
                                title="Calculate"
                            />
                        </section>
                    </div>
                </div>

                {!isEmpty(result) && (
                    <div className="card">
                        <header className="card-header">Result</header>

                        <div className="card-body space-y-6">
                            <table className="w-full table-auto border-collapse">
                                <thead>
                                    <tr className="odd:bg-gray-700 even:bg-gray-800">
                                        <th className="border border-gray-500 p-3">Title</th>
                                        <th className="border border-gray-500 p-3">Value</th>
                                        <th className="border border-gray-500 p-3">Missed</th>
                                        <th className="border border-gray-500 p-3">Rolled</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {result.map((item) => (
                                        <tr
                                            className="odd:bg-gray-700 even:bg-gray-800"
                                            key={item.id}
                                        >
                                            <td className="border border-gray-500 p-3 capitalize">
                                                {item.title}
                                            </td>
                                            <td className="border border-gray-500 p-3">
                                                {item.value}
                                            </td>
                                            <td className="border border-gray-500 p-3 font-medium text-red-600">
                                                {item.miss}
                                            </td>
                                            <td
                                                className={`border border-gray-500 p-3 ${item.countRolls >= 4
                                                    ? "flex items-center justify-between"
                                                    : ""
                                                    }`}
                                            >
                                                {item.countRolls} times
                                                {item.countRolls >= 4 && (
                                                    <TbThumbUpFilled strokeWidth={1.5} className="h-5 w-5 text-green-500" />
                                                )}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
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
}
