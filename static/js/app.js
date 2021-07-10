// import the data from data.js. The variable in the data.js file will be summoned here.
const tableData = data;

// Reference the HTML table using d3. D3 is a JavaScript library that produces sophisticated and highly dynamic graphics in an HTML webpage 
// look for the tbody tag in the html code we are linking this file to, and apply the d3 graphics.
var tbody = d3.select("tbody");

function buildTable(data) {
    // This line tells JS to start with an empty table whenver this function is ran or the user will have a table that is prefiltered.
    tbody.html("");
    //forEach works only with arrays, it will read each object of an array.
    data.forEach((dataRow) => {
        // we're using let instead of var because this variable is limited to just this block of code
        //this line makes each object in the array/list a row, tr.
        let row = tbody.append("tr");
        // By adding (dataRow) as the argument, we are saying that we want the values of an object in data.js to go into the dataRow.
        // We've added forEach((val) to specify that we want one object per row, and we are filling in the rows cells with the object :values.
        Object.values(dataRow).forEach((val) => {
            // td is table data or the html call for a cell in a table,
            //we're going to append the values to the cells in a row.
            let cell = row.append("td");
            cell.text(val);
        }
        );
    });
}