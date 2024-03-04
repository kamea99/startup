function getTrackerName() {
    return localStorage.getItem('username');
}

function replaceName() {
    let playerName = document.getElementById('playerName');
    playerName.textContent = getTrackerName() + "'s Habits";
}

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

//Toggle between dates
let startDate = new Date(2023, 2, 3);
let endDate = new Date(2023, 2, 9);

// Function to update the displayed week dates
function updateWeekDates(startDate, endDate) {
    document.getElementById("weekDates").textContent = formatDate(startDate) + " - " + formatDate(endDate);
}

// Function to format the date in "MM/DD/YYYY" format
function formatDate(date) {
    let month = date.getMonth() + 1;
    let day = date.getDate();
    let year = date.getFullYear();
    return month + "/" + day + "/" + year;
}

// Function to go to the previous week
function goToPreviousWeek() {
    startDate.setDate(startDate.getDate() - 7);
    endDate.setDate(endDate.getDate() - 7);
    updateWeekDates(startDate, endDate);
}

// Function to go to the next week
function goToNextWeek() {
    startDate.setDate(startDate.getDate() + 7);
    endDate.setDate(endDate.getDate() + 7);
    updateWeekDates(startDate, endDate);
}

//Notification replacement
let index = 0;
let messages = [
    "*Amazing! You added 'Read in BoM' as a new habit!*",
    "*Incredible! Keep going*",
    "*Wow! You're amazing!*",
    "*Yay!*",
    "*You added 'Drink Water' as a new habit!*"
];

setInterval(() => {
    let notify = document.getElementById("notify");
    notify.textContent = messages[index];
    index++;
    if (index >= messages.length) {
        index = 0;
    }
}, 5000);

//html to get the notification to be closable when I add websocket stuff
//<div id="notify" class="alert alert-success alert-dismissible fade show" role="alert">
//    *Amazing! You added "Read in BoM" as a new habit!*
//    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
//</div>