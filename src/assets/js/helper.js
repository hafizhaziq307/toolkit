import FileSaver from "file-saver";
import * as ExcelJS from 'exceljs';

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

export const convertExcelToJson = async(file) => {
    const workbook = new ExcelJS.Workbook();

    return new Promise(async(resolve, reject) => {
        try {
            let data= [];
    
            await workbook.xlsx.load(file);
    
            const worksheet = workbook.getWorksheet(1);
    
            worksheet.eachRow({ includeEmpty: true }, (row, rowNumber) => {
                if (rowNumber === 1) {
                    const headers = row.values;
    
                    worksheet.eachRow({ firstRow: 2, includeEmpty: true }, (dataRow) => {
                        const rowData = {};
                        dataRow.eachCell({ includeEmpty: true }, (cell, colNumber) => {
                            rowData[headers[colNumber]] = cell.value ?? '';
                        });
                        data.push(rowData);
                    });
                }
            });

            resolve(data);
            
        } catch (error) {
            console.error('Error:', error.message);
            reject(error.message);
        }
    });
}