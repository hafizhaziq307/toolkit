import { FastAverageColor } from "fast-average-color";
import { useRef, useState, useEffect } from "react";
import { isEmpty } from "../../helpers";
import { CopyButton } from "../../components/Buttons/CopyButton";
import { ClearButton } from "../../components/Buttons/ClearButton";

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

      <div className="card">
        <header className="card-header flex justify-end">
          <ClearButton onClick={clear} />
        </header>

        <div className={`card-body${uploadedImage !== "" ? "space-y-4" : ""}`}>
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
            className="uplaod-file"
          />
        </div>

        {!isEmpty(averageColor) && (
          <footer className="card-footer flex items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <div
                className="h-10 w-10 border"
                style={{ backgroundColor: averageColor }}
              />
              <span className="text-xl">{averageColor}</span>
            </div>

            <CopyButton onClick={copy} />
          </footer>
        )}
      </div>
    </>
  );
};
