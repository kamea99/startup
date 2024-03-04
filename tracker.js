//Update user's name
function getTrackerName() {
    return localStorage.getItem('username');
}

function replaceName() {
    let playerName = document.getElementById('playerName');
    playerName.textContent = getTrackerName() + "'s Habits";
}

// Add a new habit to the table
function addHabit() {

    //habit input value
    let habitInput = document.getElementById("habitIn").value;
    let tableBody = document.getElementById("tableBody");
    let row = document.createElement("tr");

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

    tableBody.appendChild(row);
    saveHabits();
}

function saveHabits() {
    let rows = document.querySelectorAll('#tableBody tr');
    let habits = [];

    rows.forEach(row => {
        let habitName = row.children[0].textContent.trim();
        let days = [];

        let checkboxes = row.querySelectorAll('input[type="checkbox"]');
        checkboxes.forEach(checkbox => {
            days.push(checkbox.id);
        });

        habits.push({habitName, days});
    });

    localStorage.setItem('habits', JSON.stringify(habits));
}

function removeExample() {
    let playerName = document.getElementById('playerName');
    playerName.textContent = getTrackerName() + "'s Habits";
}

//Saves the added habit on any reload 
function loadHabits() {
    let habits = JSON.parse(localStorage.getItem('habits'));
    let tableBody = document.getElementById("tableBody");

    // Remove the existing row with the "Example" text
    let existingRow = tableBody.rows[0];
    tableBody.removeChild(existingRow);

    if (habits) {
        habits.forEach(habit => {
            let row = document.createElement("tr");

            row.innerHTML = `
                <td>${habit.habitName}</td>
                <td>
                    <label for="${habit.days[0]}"></label>
                    <input type="checkbox" id="${habit.days[0]}">
                </td>
                <td>
                    <label for="${habit.days[1]}"></label>
                    <input type="checkbox" id="${habit.days[1]}">
                </td>
                <td>
                    <label for="${habit.days[2]}"></label>
                    <input type="checkbox" id="${habit.days[2]}">
                </td>
                <td>
                    <label for="${habit.days[3]}"></label>
                    <input type="checkbox" id="${habit.days[3]}">
                </td>
                <td>
                    <label for="${habit.days[4]}"></label>
                    <input type="checkbox" id="${habit.days[4]}">
                </td>
                <td>
                    <label for="${habit.days[5]}"></label>
                    <input type="checkbox" id="${habit.days[5]}">
                </td>
                <td>
                    <label for="${habit.days[6]}"></label>
                    <input type="checkbox" id="${habit.days[6]}">
                </td>
            `;

            tableBody.appendChild(row);
        });
    }
}

window.onload = () => { loadHabits(); }

//Toggle between dates
let startDate = new Date(2023, 2, 3);
let endDate = new Date(2023, 2, 9);

// Update the displayed week dates
function updateWeekDates(startDate, endDate) {
    document.getElementById("weekDates").textContent = formatDate(startDate) + " - " + formatDate(endDate);
}

// Format the date to MM/DD/YYYY
function formatDate(date) {
    let month = date.getMonth() + 1;
    let day = date.getDate();
    let year = date.getFullYear();
    return month + "/" + day + "/" + year;
}

// Toggle to the previous week
function goToPreviousWeek() {
    startDate.setDate(startDate.getDate() - 7);
    endDate.setDate(endDate.getDate() - 7);
    updateWeekDates(startDate, endDate);
}

// Toggle to the next week
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
