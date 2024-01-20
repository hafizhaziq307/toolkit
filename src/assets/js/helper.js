import FileSaver from "file-saver";

// check if value is empty or not
export const isEmpty = (x) => {
    return [Object, Array].includes((x || {}).constructor) && !Object.entries((x || {})).length;
};

// save file
export const saveFile = (content = "", filename = "") => {
    if (isEmpty(content) || isEmpty(filename)) return;

    let blob = new Blob([content], {
        type: "text/plain;charset=utf-8",
    });
    FileSaver.saveAs(blob, filename);
};

// replace empty slot element in array with something else
export const fillEmptySlots = (arr, replaceWith = "") => {
    return Array.from(arr, (_, i) => {
        if (!(i in arr)) return replaceWith;
        else return arr[i];
    });
};

export const copy = (x) => {
    navigator.clipboard.writeText(x).then(
        () => alert(`Copied!`),
        (err) => alert(`Copy failed! ${err}`)
    );
};
