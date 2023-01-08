import { Routes, Route } from "react-router-dom";

import { TextCount } from "./pages/TextCount";
import { RemoveNewline } from "./pages/RemoveNewline";
import { TextTransform } from "./pages/TextTransform";
import { QrCodeScanner } from "./pages/QrCodeScanner";
import { AverageColorExtractor } from "./pages/AverageColorExtractor";
import { ColorSimilarity } from "./pages/ColorSimilarity";
import { Tools } from "./pages/Tools";
import { Aside } from "./components/Aside";
import { useState } from "react";
import { tools } from "./data";
import { GearCalc } from "./pages/GearCalc";
import { ExcelToSql } from "./pages/ExcelToSql";

function App() {
  const [filteredTools, setFilteredTools] = useState(tools);
  const [activeTag, setActiveTag] = useState("");

  const searching = (valSearch: any) => {
    if (valSearch === "") {
      setFilteredTools(tools);
    } else {
      setFilteredTools(
        tools.filter(
          (tool) => tool.tag.toLowerCase() === valSearch.toLowerCase()
        )
      );
    }

    setActiveTag(valSearch);
  };

  return (
    <>
      <div className="flex min-h-screen w-full gap-4 p-4">
        <Aside searching={searching} activeTag={activeTag} />

        <main className="mt-2 w-full space-y-6">
          <Routes>
            <Route path="/" element={<Tools filteredTools={filteredTools} />} />
            <Route path="/text_tool_word_count" element={<TextCount />} />
            <Route path="/remove_newline" element={<RemoveNewline />} />
            <Route path="/text_transform" element={<TextTransform />} />
            <Route path="/qrcode_scanner" element={<QrCodeScanner />} />
            <Route path="/color_similarity" element={<ColorSimilarity />} />
            <Route path="/excel_to_sql" element={<ExcelToSql />} />
            <Route
              path="/average_color_extractor"
              element={<AverageColorExtractor />}
            />
            <Route path="/gear_calc" element={<GearCalc />} />
          </Routes>
        </main>
      </div>
    </>
  );
}

export default App;
