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

//With this function, we have done the following:
//Looped through each object in the array
//Appended a row to the HTML table
//Added each value from the object into a cell

// adding a date function, to filter through the table that was created.
function handleClick() {
    //using d3 js library, Data-Driven Documents (D3 for short),
    // we're going to use D3 to handle an action from a user, such as a button click
    //The selector string is the item we're telling D3.js to look for.
    // once we get what we're looking for, .property("value") tells js to actually grab that information and hold it in the "date" variable.
    let date = d3.select("#datetime").property("value");

    let filteredData = tableData;
    
    if (date) {
        // We want JavaScript to check for a date. If one is present, we want it to return only the data with that date
        //triple equal signs means, date in the table has to match our filter exactly
        filteredData = filteredData.filter(row => row.datetime === date);
        //It's basically saying, "Show only the rows where the date is equal to the date filter we created above.
    };
    // Rebuild the table using the filtered data
    // @NOTE: If no date was entered, then filteredData will
    // just be the original tableData.
  buildTable(filteredData);
}
  // Our selector string contains the id for another HTML tag. We'll assign a unique id to a button element in the HTML called "filter-btn".
  // by adding .on("click", handleClick);, we're telling D3 to execute our handleClick() function when the button with an id of filter-btn is clicked
  d3.selectAll("#filter-btn").on("click", handleClick);

  // Build the table when the page loads
  buildTable(tableData);
