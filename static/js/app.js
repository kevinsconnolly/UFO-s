// import data.js data
const tableData = data;
// Reference the HTML table using d3
var tbody = d3.select("tbody");
function buildTable(data) {
  // First, clear out any existing data
  tbody.html("");
  // loop data objects
  // add a row and cells for each value in the row
  data.forEach((dataRow) => {
    // add a row to body table
    let row = tbody.append("tr");
    // Loop through unique dataRow field & add each
    // value as a table cell (td)
    Object.values(dataRow).forEach((val) => {
      let cell = row.append("td");
      cell.text(val);
    }
    );
  });
}
function filteredTable() {
  
    var date, city, state, country, shape, filteredData;

    date = d3.select("#datetime").property("value");
    city = d3.select("#city").property("value");
    state = d3.select("#state").property("value");
    country = d3.select("#country").property("value");
    shape = d3.select("#shape").property("value");
    filteredData = tableData;
    
  if (date){
    filteredData = filteredData.filter(row => row.datetime === date);
  }
  if (city){
    filteredData = filteredData.filter(row => row.city === city);
  }
  if (state){
    filteredData = filteredData.filter(row => row.state === state);
  }
  if (country){
    filteredData = filteredData.filter(row => row.country === country);
  }
  if (shape){
    filteredData = filteredData.filter(row => row.shape === shape);
  }

// Rebuild table using the filtered data
// stipulation: no data filtered, then filteredData will
// return to original tableData.
buildTable(filteredData);
}
d3.selectAll("#filter-btn").on("click", filteredTable);

// Build table after page loads
buildTable(tableData);
