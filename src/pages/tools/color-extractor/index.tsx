import { useRef, useState, useEffect } from "react";
import { ClearButton, CopyButton } from "../../../components/Buttons";
import { InputFile } from "../../../components/Inputs";
import { PageTitle } from "../../../components/PageTitle";
import { isEmpty } from "../../../helpers";

export default function colorExtractor() {
  const [color, setColor] = useState("");
  const [uploadedImage, setUploadedImage] = useState("");

  const imageRef: any = useRef();
  const uploadFileRef: any = useRef();

  // after uploadedImage changes
  useEffect(() => {
    if (!isEmpty(uploadedImage)) {
      (async () => {
        const color = await extractColor(imageRef.current);
        setColor(color);
      })();
    }
  }, [uploadedImage]);

  const extractColor = async (imageElement: any) => {
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

    return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
  };

  const handleChange = (e: any) => {
    const file = e.target.files[0];
    if (!file) return;
    setUploadedImage(URL.createObjectURL(file));
  };

  const copy = () => {
    navigator.clipboard
      .writeText(color)
      .then(() => alert(`Copied!`))
      .catch((error) => alert(`Copy failed! ${error}`));
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
        <header className="card-header flex justify-end">
          <ClearButton onClick={clear} />
        </header>

        <div className={`card-body ${uploadedImage !== "" ? "space-y-4" : ""}`}>
          <img
            ref={imageRef}
            src={uploadedImage}
            alt="img"
            className={` h-[20rem] object-scale-down object-left ${
              uploadedImage !== "" ? "" : "hidden"
            }`}
          />

          <InputFile
            fileRef={uploadFileRef}
            onChange={handleChange}
            accept="image/*"
          />
        </div>

        {!isEmpty(color) && (
          <footer className="card-footer flex items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <div
                className="h-10 w-10 border"
                style={{ backgroundColor: color }}
              />
              <span className="text-xl">{color.toUpperCase()}</span>
            </div>

            <CopyButton onClick={copy} />
          </footer>
        )}
      </div>
    </>
  );
}
