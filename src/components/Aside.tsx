import {
  Bars3CenterLeftIcon,
  SwatchIcon,
  TagIcon,
  QrCodeIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import logo from "../assets/img/logo.png";

export const Aside = (props: any) => {
  return (
    <aside className=" block w-[18rem] overflow-y-auto">
      <header className="mb-4">
        <img src={logo} alt="logo" className="w-16" />
      </header>

      <div className="space-y-4">
        <header className="text-lg font-bold uppercase">tag</header>

        <div>
          <Link to="/">
            <button
              className={`flex w-full items-center gap-2 rounded  px-1 py-2 text-sm ${
                props.activeTag === ""
                  ? "bg-blue-600 font-medium"
                  : "hover:bg-gray-700"
              }`}
              onClick={() => {
                props.searching("");
              }}
            >
              <TagIcon className="h-6 w-6" />
              <span className="uppercase">all</span>
            </button>
          </Link>

          <Link to="/">
            <button
              className={`flex w-full items-center gap-2 rounded  px-1 py-2 text-sm ${
                props.activeTag === "text"
                  ? "bg-blue-600 font-medium"
                  : "hover:bg-gray-700"
              }`}
              onClick={() => {
                props.searching("text");
              }}
            >
              <Bars3CenterLeftIcon className="h-6 w-6" />
              <span className="uppercase">text</span>
            </button>
          </Link>

          <Link to="/">
            <button
              className={`flex w-full items-center gap-2 rounded  px-1 py-2 text-sm ${
                props.activeTag === "color"
                  ? "bg-blue-600 font-medium"
                  : "hover:bg-gray-700"
              }`}
              onClick={() => {
                props.searching("color");
              }}
            >
              <SwatchIcon className="h-6 w-6" />
              <span className="uppercase">color</span>
            </button>
          </Link>

          <Link to="/">
            <button
              className={`flex w-full items-center gap-2 rounded  px-1 py-2 text-sm ${
                props.activeTag === "qr code"
                  ? "bg-blue-600 font-medium"
                  : "hover:bg-gray-700"
              }`}
              onClick={() => {
                props.searching("qr code");
              }}
            >
              <QrCodeIcon className="h-6 w-6" />
              <span className="uppercase">qr code</span>
            </button>
          </Link>
        </div>
      </div>
    </aside>
  );
};
