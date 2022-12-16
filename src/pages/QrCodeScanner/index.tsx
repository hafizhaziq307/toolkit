import QrScanner from "qr-scanner";
import { useEffect, useRef, useState } from "react";
import { isEmpty } from "../../helpers";
import {
  LinkIcon,
  ExclamationCircleIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";

export const QrCodeScanner = () => {
  const [generatedLink, setGeneratedLink] = useState("");
  const [uploadedImage, setUploadedImage] = useState("");

  const uploadFileRef: any = useRef();

  //   after uploadedImage changes
  useEffect(() => {
    if (!isEmpty(uploadedImage)) {
      QrScanner.scanImage(uploadFileRef.current.files[0], {
        returnDetailedScanResult: true,
      })
        .then((result) => {
          setGeneratedLink(result.data);
        })
        .catch(() => setGeneratedLink("error"));
    }
  }, [uploadedImage]);

  const handleChange = (event: any) => {
    const file = event.target.files[0];
    if (!file) return;

    setUploadedImage(URL.createObjectURL(file));
  };

  const clear = () => {
    uploadFileRef.current.value = "";
    setUploadedImage("");
    setGeneratedLink("");
  };

  return (
    <>
      <header className="text-lg font-medium">QR Code Scanner</header>

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

        <div className="space-y-4 rounded-b-lg py-2 px-4">
          {!isEmpty(generatedLink) && (
            <img
              src={uploadedImage}
              alt="img"
              className="aspect-video w-[40rem] bg-gray-700 object-scale-down object-left"
            />
          )}

          <input
            type="file"
            ref={uploadFileRef}
            onChange={handleChange}
            accept="image/*"
            className="block w-full text-sm text-slate-500 file:mr-4 file:rounded-full file:border-0 file:bg-blue-50 file:py-2 file:px-4 file:text-sm file:font-semibold file:text-blue-700 hover:file:bg-blue-100"
          />
        </div>

        {!isEmpty(uploadedImage) && (
          <footer className="border-t border-gray-600 p-3">
            {!isEmpty(generatedLink) && generatedLink === "error" && (
              <div className="flex items-center gap-1 rounded-lg bg-red-100 p-4 text-sm text-red-700">
                <ExclamationCircleIcon className="h-7 w-7 text-red-700" />
                <div className="font-medium">No QR Code found!</div>
              </div>
            )}

            {!isEmpty(generatedLink) && generatedLink !== "error" && (
              <div className="rounded bg-gray-800 p-3">
                <a
                  href={generatedLink}
                  target="_blank"
                  className="flex items-center gap-2 underline-offset-2 hover:underline"
                >
                  <LinkIcon className="h-5 w-5 text-white" />
                  {generatedLink}
                </a>
              </div>
            )}
          </footer>
        )}
      </div>
    </>
  );
};
