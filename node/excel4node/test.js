const xl = require('excel4node');
const path = require("path");
const utils = require("../utils/utils");

let start = new Date().getTime();
var wb = new xl.Workbook();
// Add Worksheets to the workbook
var ws = wb.addWorksheet('Sheet 1');

let size = utils.size;
let data = utils.bigData();
for(let i = 1; i <= size.row; i++){
    for(let j = 1; j <= size.column; j++){
        ws.cell(i, j).string(data[i - 1][j - 1]);
    }
}

wb.write(path.resolve(__dirname, "result.xlsx"), () => {
    console.log("done")
    console.log("excel4node cost:" + (new Date().getTime() - start));
})