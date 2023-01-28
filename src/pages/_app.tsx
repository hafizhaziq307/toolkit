import type { AppProps } from "next/app";
import "../assets/css/output.css";
import { PageTitle } from "../components/PageTitle";
import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";
import dynamic from "next/dynamic";
import { useEffect } from "react";
const TitleBar = dynamic(() => import("../components/TitleBar"), {
  ssr: false,
});

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    document.body.className =
      "min-h-screen w-full bg-gray-900  font-sans text-gray-200";
  });

  return (
    <>
      <TitleBar />

      <SimpleBar
        forceVisible="y"
        autoHide={true}
        style={{ maxHeight: "100vh" }}
      >
        <main className=" mt-8 w-full space-y-4 py-2 px-3">
          <Component {...pageProps} />
        </main>
      </SimpleBar>
    </>
  );
}
