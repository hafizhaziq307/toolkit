<!-- App.svelte -->
<script>
    import { Router, Link, Route } from "svelte-routing";
    import Home from "./pages/Home.svelte";
    import ColorExtractor from "./pages/ColorExtractor.svelte";
    import ColorSimilarity from "./pages/ColorSimilarity.svelte";
    // import ExcelToSql from "./pages/ExcelToSql.svelte";
    import QrcodeScanner from "./pages/QrcodeScanner.svelte";
    import RemoveNewline from "./pages/RemoveNewline.svelte";
    import SqlFormatter from "./pages/SqlFormatter.svelte";
    import TextCount from "./pages/TextCount.svelte";
    import TextTransform from "./pages/TextTransform.svelte";
    import TextAdded from "./pages/TextAdded.svelte";
    import ImageConverter from "./pages/ImageConverter.svelte";
  
    export let url = "";
  </script>
  
  <Router {url}>
    <div class="w-full space-y-4 py-2 px-3">
        <Route path="/" component={Home} />
        <Route path="/color-extractor" component={ColorExtractor} />
        <Route path="/color-similarity" component={ColorSimilarity} />
        <!-- <Route path="/excel-to-sql" component={ExcelToSql} /> -->
        <Route path="/qrcode-scanner" component={QrcodeScanner} />
        <Route path="/remove-newline" component={RemoveNewline} />
        <Route path="/sql-formatter" component={SqlFormatter} />
        <Route path="/text-count" component={TextCount} />
        <Route path="/text-transform" component={TextTransform} />
        <Route path="/text-added" component={TextAdded} />
        <Route path="/image-converter" component={ImageConverter} />
    </div>
  </Router>