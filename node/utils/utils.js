let columns = 100;
let rows = 10000;

module.exports = {
    size: {
        column: columns,
        row: rows
    },
    bigData: function(){
        let data = [];
        for(let i = 0; i < rows; i++){
            let rowData = [];
            for(let j = 0; j < columns; j++){
                rowData.push("" + i + j)
            }
            data.push(rowData)
        }
        return data;
    }
}