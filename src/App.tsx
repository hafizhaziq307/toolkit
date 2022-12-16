import { Routes, Route } from "react-router-dom";

import { TextCount } from "./pages/TextCount";
import { RemoveNewline } from "./pages/RemoveNewline";
import { TextTransform } from "./pages/TextTransform";
import InsertGenerator from "./pages/InsertGenerator";
import { QrCodeScanner } from "./pages/QrCodeScanner";
import { AverageColorExtractor } from "./pages/AverageColorExtractor";
import { TailwindColorSimilarity } from "./pages/TailwindColorSimilarity";
import { Tools } from "./pages/Tools";
import { Aside } from "./components/Aside";
import { useState } from "react";
import { tools } from "./data";

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
        <Aside
          searching={searching}
          setActiveTag={setActiveTag}
          activeTag={activeTag}
        />

        <main className="mt-2 w-full space-y-6">
          <Routes>
            <Route path="/" element={<Tools filteredTools={filteredTools} />} />

            <Route path="/text_tool_word_count" element={<TextCount />} />
            <Route
              path="/text_tool_remove_newline"
              element={<RemoveNewline />}
            />
            <Route
              path="/text_tool_word_transforms"
              element={<TextTransform />}
            />
            <Route path="/sql_insert_generator" element={<InsertGenerator />} />
            <Route path="/qrcode_scanner" element={<QrCodeScanner />} />
            <Route
              path="/tailwind_color_similarity"
              element={<TailwindColorSimilarity />}
            />
            <Route
              path="/average_color_extractor"
              element={<AverageColorExtractor />}
            />
          </Routes>
        </main>
      </div>
    </>
  );
}

export default App;
