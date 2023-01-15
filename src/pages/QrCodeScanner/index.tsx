import QrScanner from "qr-scanner";
import { useEffect, useRef, useState } from "react";
import { isEmpty } from "../../helpers";
import { LinkIcon, ExclamationCircleIcon } from "@heroicons/react/24/outline";
import { ClearButton } from "../../components/Buttons";
import { InputFile } from "../../components/Inputs";

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

      <div className="card">
        <header className="card-header flex justify-end">
          <ClearButton onClick={clear} />
        </header>

        <div className="card-body space-y-4">
          {!isEmpty(generatedLink) && (
            <img
              src={uploadedImage}
              alt="img"
              className="aspect-video w-[40rem] bg-gray-700 object-scale-down object-left"
            />
          )}

          <InputFile
            ref={uploadFileRef}
            onChange={handleChange}
            accept="image/*"
          />
        </div>

        {!isEmpty(uploadedImage) && (
          <footer className="card-footer">
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
