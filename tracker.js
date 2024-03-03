// Function to handle form submission and add a new habit to the table
function addHabit() {

    //habit input value
    let habitInput = document.getElementById("habitIn").value;
    let tableBody = document.getElementById("tableBody");
    let row = document.createElement("tr");
    
    //let cell1 = document.createElement("td");

    // Populate the <tr> with habit data
    row.innerHTML = `
        <td>${habitInput}</td>
        <td>
            <label for="sun"></label>
            <input type="checkbox" id="sun">
        </td>
        <td>
            <label for="mon"></label>
            <input type="checkbox" id="mon">
        </td>
        <td>
            <label for="tues"></label>
            <input type="checkbox" id="tues">
        </td>
        <td>
            <label for="wed"></label>
            <input type="checkbox" id="wed">
        </td>
        <td>
            <label for="thurs"></label>
            <input type="checkbox" id="thurs">
        </td>
        <td>
            <label for="fri"></label>
            <input type="checkbox" id="fri">
        </td>
        <td>
            <label for="sat"></label>
            <input type="checkbox" id="sat">
        </td>
    `;

    //row.appendChild(cell1);
    tableBody.appendChild(row);
}