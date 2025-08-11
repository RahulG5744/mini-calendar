const monthName = document.getElementById("month-name");

const dayName= document.getElementById("day-name");

const dayNumber = document.getElementById("day-number");

const Year = document.getElementById("year");

const date = new Date();
const month = date.getMonth()
monthName.innerText = date.toLocaleString("en", {month:"long"})

dayName.innerText = date.toLocaleString("en", {weekday:"long"})

dayNumber.innerText = date.getDate()

Year.innerText = date.getFullYear()


/// some changes => to test commit