// Retrieve data from data.js and create variables to hold it
var table_data = data; 

var table_body = d3.select("tbody");

// Use forEach loop to append data to variables

table_data.forEach((data) => {
    var row = table_body.append("tr");
    Object.entries(data).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
    });
});



var button = d3.select("#filter-btn");

button.on("click", runEnter);

function runEnter() {
    d3.event.preventDefault();
    var input_date = d3.select("#datetime");
    var input_value = input_date.property("value");

    d3.select("tbody").selectAll("tr").remove();
    var filtered_data = table_data.filter(table_data => table_data.datetime === input_value);

    filtered_data.forEach((date_input) => {
        var row = table_body.append("tr");
        Object.entries(date_input).forEach(([key,value]) => {
            var cell = table_body.append("td");
            cell.text(value);
        });
    });
};

    
