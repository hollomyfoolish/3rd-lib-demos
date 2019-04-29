const Excel = require("exceljs");
const path = require("path");
const utils = require("../utils/utils");

var workbook = new Excel.Workbook();
var sheet = workbook.addWorksheet('My Sheet');

let data = utils.bigData();
let size = utils.size;
for(let i = 1; i <= size.row; i++){
    for(let j = 1; j <= size.column; j++){
        sheet.getCell(i, j).value = data[i - 1][j - 1];
    }
}
var start = new Date().getTime();
// sheet.commit();
workbook.xlsx.writeFile(path.resolve(__dirname, "./result.xlsx"))
.then(function() {
    console.log("done");
    console.log("exceljs costs:" + (new Date().getTime() - start));
});