// check if value is empty or not
export const isEmpty = (val: any) => {
  if (val === null) return true;

  if (typeof val === "string") {
    return val.trim() === "";
  }
};

export const ImageToBase64 = (file: any) => {
  let res = null;

  let reader = new FileReader();
  reader.readAsDataURL(file);

  reader.onloadend = () => {
    res = reader.result;
  };

  return res;
};
