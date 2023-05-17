import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import {
    Home, ColorExtractor, ColorSimilarity, ExcelToSql, GearCalc,
    QrcodeScanner, RemoveNewline, SqlFormatter, TextCount, TextTransform
} from "./pages";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/color-extractor" element={<ColorExtractor />} />
                    <Route path="/color-similarity" element={<ColorSimilarity />} />
                    <Route path="/excel-to-sql" element={<ExcelToSql />} />
                    <Route path="/gear-calc" element={<GearCalc />} />
                    <Route path="/qrcode-scanner" element={<QrcodeScanner />} />
                    <Route path="/remove-newline" element={<RemoveNewline />} />
                    <Route path="/sql-formatter" element={<SqlFormatter />} />
                    <Route path="/text-count" element={<TextCount />} />
                    <Route path="/text-transform" element={<TextTransform />} />
                </Route>
            </Routes>
        </BrowserRouter>

    );
}

export default App;
