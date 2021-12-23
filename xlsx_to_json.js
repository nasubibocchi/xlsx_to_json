const xlsxName = '/Users/hitomi/Desktop/ビアコレ/mapmesh/13tokyo1km.xlsx'; //ここにbook名を代入
const outPutFileName = '/Users/hitomi/Desktop/ビアコレ/mapmesh/tokyo.json';

let XLSX = require('xlsx');
let workbook = XLSX.readFile(xlsxName, { cellDates: true });
let sheet_name_list = workbook.SheetNames;
// console.log(sheet_name_list);
let toJson = workbook.Sheets[sheet_name_list[1]]; //２Sheet目がjson化される
// console.log(toJson);

let toJson_json = XLSX.utils.sheet_to_json(toJson);

const fs = require('fs');

fs.writeFile(outPutFileName, JSON.stringify(toJson_json, null, '   '), (err) => {
    if (err) throw err;
    console.log('complete!');
});

// console.log(toJson_json);


// move to project directory.
// execute "node xlsx_to_json.js" at terminal.