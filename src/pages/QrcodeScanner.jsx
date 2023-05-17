import QrScanner from "qr-scanner";
import { useEffect, useRef, useState } from "react";
import { HiOutlineExclamationCircle } from "react-icons/hi2";
import { TbLink } from "react-icons/tb";
import { ClearButton } from "../components/buttons";
import { isEmpty } from "../helpers";
import { PageTitle } from "../components";
import { FileInput } from "../components/inputs";

export default function QrcodeScanner() {
    const [generatedLink, setGeneratedLink] = useState("");
    const [uploadedImage, setUploadedImage] = useState("");

    const uploadFileRef = useRef();

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

    const handleChange = (event) => {
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
            <PageTitle title="QR Code Scanner" />

            <div className="card">
                <header className="card-header flex justify-between gap-2">
                    <FileInput
                        fileRef={uploadFileRef}
                        onChange={handleChange}
                        accept="image/*"
                    />

                    <ClearButton onClick={clear} />
                </header>

                {!isEmpty(generatedLink) && (
                    <div className="card-body space-y-4">
                        <img
                            className="aspect-video w-[40rem] bg-gray-700 object-scale-down object-left"
                            src={uploadedImage}
                            alt="img"
                            width={0}
                            height={0}
                        />
                    </div>
                )}

                {!isEmpty(uploadedImage) && (
                    <footer className="card-footer">
                        {!isEmpty(generatedLink) && generatedLink === "error" && (
                            <div className="flex items-center gap-1 rounded-lg bg-red-100 p-4 text-sm text-red-700">
                                <HiOutlineExclamationCircle className="h-7 w-7 text-red-700" />
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
                                    <TbLink strokeWidth={1.5} className="h-6 w-6 text-white" />
                                    {generatedLink}
                                </a>
                            </div>
                        )}
                    </footer>
                )}
            </div>
        </>
    );
}
