import { FastAverageColor } from "fast-average-color";
import { useRef, useState, useEffect } from "react";
import {
  ClipboardDocumentListIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import { isEmpty } from "../../helpers";

export const AverageColorExtractor = () => {
  const [averageColor, setAverageColor] = useState("");
  const [uploadedImage, setUploadedImage] = useState("");

  const imageRef: any = useRef();
  const uploadFileRef: any = useRef();

  // after uploadedImage changes
  useEffect(() => {
    if (!isEmpty(uploadedImage)) {
      getAverageColor(imageRef.current);
    }
  }, [uploadedImage]);

  const getAverageColor = (imgElement: any) => {
    const fac = new FastAverageColor();

    console.log(imgElement);

    fac
      .getColorAsync(imgElement, { algorithm: "simple", mode: "precision" })
      .then((color) => setAverageColor(color.hex))
      .catch((e) => alert(e));
  };

  const handleChange = (event: any) => {
    const file = event.target.files[0];
    if (!file) return;

    setUploadedImage(URL.createObjectURL(file));
  };

  const copy = () => {
    navigator.clipboard
      .writeText(averageColor)
      .then(() => alert(`Copied!`))
      .catch((error) => alert(`Copy failed! ${error}`));
  };

  const clear = () => {
    uploadFileRef.current.value = "";
    setUploadedImage("");
    setAverageColor("");
  };

  return (
    <>
      <header className="text-lg font-medium">Average Color Extractor</header>

      <div className="mb-4 w-full rounded-lg border border-gray-600 bg-gray-800">
        <header className="flex items-center justify-end border-b border-gray-600 p-2">
          <button
            type="button"
            className="rounded p-2 text-gray-400 hover:bg-gray-600 hover:text-white"
            onClick={clear}
          >
            <TrashIcon className="h-5 w-5" title="clear" />
          </button>
        </header>

        <div
          className={`rounded-b-lg py-2 px-4 ${
            uploadedImage !== "" ? "space-y-4" : ""
          }`}
        >
          <img
            ref={imageRef}
            src={uploadedImage}
            alt="img"
            className={` h-[20rem] object-scale-down object-left ${
              uploadedImage !== "" ? "" : "hidden"
            }`}
          />

          <input
            type="file"
            ref={uploadFileRef}
            onChange={handleChange}
            accept="image/*"
            className="block w-full text-sm text-slate-500 file:mr-4 file:rounded-full file:border-0 file:bg-blue-50 file:py-2 file:px-4 file:text-sm file:font-semibold file:text-blue-700 hover:file:bg-blue-100"
          />
        </div>

        {!isEmpty(averageColor) && (
          <footer className="border-t border-gray-600 p-3">
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <div
                  className="h-10 w-10"
                  style={{ backgroundColor: averageColor }}
                ></div>
                <span className="text-xl">{averageColor}</span>
              </div>
              <button
                type="button"
                className="rounded p-2 text-gray-400 hover:bg-gray-600 hover:text-white"
                onClick={copy}
              >
                <ClipboardDocumentListIcon className="h-5 w-5" title="copy" />
              </button>
            </div>
          </footer>
        )}
      </div>
    </>
  );
};
