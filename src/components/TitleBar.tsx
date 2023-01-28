import { appWindow } from "@tauri-apps/api/window";
import logo from "../assets/img/logo.png";
import Image from "next/image";
import { getVersion, getName } from "@tauri-apps/api/app";
import { useEffect, useState } from "react";

import {
  XMarkIcon,
  Square2StackIcon,
  MinusIcon,
} from "@heroicons/react/24/outline";

export default function TitleBar() {
  const [appName, setAppName] = useState("");
  const [appVersion, setAppVersion] = useState("");

  useEffect(() => {
    (async () => {
      setAppName(await getName());
      setAppVersion(await getVersion());
    })();
  }, []);

  return (
    <header
      data-tauri-drag-region
      className="fixed top-0 z-50 flex w-full items-stretch justify-between bg-gray-800"
    >
      <section className="flex items-center gap-2 px-2 py-[1px]">
        <Image
          className="aspect-square w-[23px] rounded ring-1 ring-gray-600"
          src={logo}
          alt="logo"
        />
        <div>
          <div className="text-[.8rem] leading-tight">{appName}</div>
          <div className="text-[.6rem] font-light leading-tight text-gray-400">
            {appVersion}
          </div>
        </div>
      </section>

      <section className="flex">
        <button
          onClick={() => appWindow.minimize()}
          className="flex h-full w-11 items-center justify-center hover:bg-gray-700"
        >
          <MinusIcon className="h-4 w-4 text-white" />
        </button>

        <button
          onClick={() => appWindow.toggleMaximize()}
          className="flex h-full w-11 items-center justify-center hover:bg-gray-700"
        >
          <Square2StackIcon className="h-4 w-4 -scale-x-100 text-white" />
        </button>

        <button
          onClick={() => appWindow.close()}
          className=" flex h-full w-11 items-center justify-center hover:bg-red-600"
        >
          <XMarkIcon className="h-5 w-5 text-white" />
        </button>
      </section>
    </header>
  );
}
