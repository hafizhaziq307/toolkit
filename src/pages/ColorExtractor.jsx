import { useRef, useState, useEffect } from "react";
import { ClearButton, CopyButton } from "../components/buttons";
import { FileInput } from "../components/inputs";
import { PageTitle } from "../components";
import { isEmpty } from "../helpers";

export default function ColorExtractor() {
    const [color, setColor] = useState("");
    const [uploadedImage, setUploadedImage] = useState("");

    const imageRef = useRef();
    const uploadFileRef = useRef();

    // after uploadedImage changes
    useEffect(() => {
        if (!isEmpty(uploadedImage)) {
            (async () => {
                const result = await extractColor(imageRef.current);
                setColor(result.color.hexcode);
            })();
        }
    }, [uploadedImage]);

    const extractColor = async (imageElement) => {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");

        await new Promise(
            (resolve) => (imageElement.onload = () => resolve(imageElement))
        );

        canvas.width = imageElement.width;
        canvas.height = imageElement.height;
        ctx.drawImage(imageElement, 0, 0, canvas.width, canvas.height);

        // Get the image data from the canvas
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const data = imageData.data;

        let r = 0;
        let g = 0;
        let b = 0;
        let count = 0;

        for (let i = 0; i < data.length; i += 4) {
            r += data[i];
            g += data[i + 1];
            b += data[i + 2];
            count++;
        }
        r = Math.floor(r / count);
        g = Math.floor(g / count);
        b = Math.floor(b / count);

        const brightness = (r * 299 + g * 587 + b * 114) / 1000;
        let isDark = brightness <= 125;

        return {
            color: {
                rgb: `rgb(${r}, ${g}, ${b})`,
                hexcode: `#${((1 << 24) + (r << 16) + (g << 8) + b)
                    .toString(16)
                    .slice(1)}`.toUpperCase(),
            },
            isDark: isDark,
        };
    };

    const handleChange = (e) => {
        const file = e.target.files[0];
        if (!file) return;
        setUploadedImage(URL.createObjectURL(file));
    };

    const copy = () => {
        navigator.clipboard.writeText(color).then(
            () => alert(`Copied!`),
            (err) => alert(`Copy failed! ${err}`)
        );
    };

    const clear = () => {
        uploadFileRef.current.value = "";
        setUploadedImage("");
        setColor("");
    };

    return (
        <>
            <PageTitle title="Color Extractor" />

            <div className="card">
                <header className="card-header flex justify-between gap-2">
                    <FileInput
                        fileRef={uploadFileRef}
                        onChange={handleChange}
                        accept="image/*"
                    />

                    <ClearButton onClick={clear} />
                </header>

                {!isEmpty(uploadedImage) && (
                    <div className={`card-body ${uploadedImage !== "" ? "space-y-4" : ""}`}>
                        <img
                            ref={imageRef}
                            src={uploadedImage}
                            alt="img"
                            className={` h-[20rem] object-scale-down object-left ${uploadedImage !== "" ? "" : "hidden"
                                }`}
                        />
                    </div>
                )}

                {!isEmpty(color) && (
                    <footer className="card-footer flex items-center justify-between gap-2">
                        <div className="flex items-center gap-2">
                            <div
                                className="h-10 w-10 border"
                                style={{ backgroundColor: color }}
                            />
                            <span className="text-xl">{color}</span>
                        </div>

                        <CopyButton onClick={copy} />
                    </footer>
                )}
            </div>
        </>
    );
}
