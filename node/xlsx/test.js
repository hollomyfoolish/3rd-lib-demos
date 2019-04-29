const XLSX = require("xlsx")
const path = require("path")
const utils = require("../utils/utils")

/* make worksheet */

// var ws_data = [
    //   [ "S", "h", "e", "e", "t", "J", "S" ],
    //   [  1 ,  2 ,  3 ,  4 ,  5 ]
    // ];
    
let start = new Date().getTime()
var ws_name = "SheetJS";
var ws_data = utils.bigData();
// console.log(arguments)
// setInterval(() => console.log(new Date().getTime()), 50);
var ws = XLSX.utils.aoa_to_sheet(ws_data);
var wb = XLSX.utils.book_new();
XLSX.utils.book_append_sheet(wb, ws, ws_name);
XLSX.writeFileAsync(path.resolve(__dirname, './out.xlsx'), wb, {}, () => {
    console.log("done");
    let end = new Date().getTime();
    console.log("xlsx costs: " + (end - start))
});