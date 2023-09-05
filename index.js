//Get reference to HTML elements with id's hour, minutes, seconds, ampm

const hour = document.getElementById("hour");
const minute = document.getElementById("minutes");
const second = document.getElementById("seconds");
const ampm = document.getElementById("ampm");

// Function to update the clock
function updateClock() {
    // Get the current hour, minute and second from the system's date
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();

    // initialize the AM/PM indicator to "AM"

    let ampm = "AM";

    // check if the current hour is greater then 12

    if (h > 12) {
        //if it is, sustract 12 from the hour to get the 12 hour formate
        h = h - 12;
        //update the AM/PM indicator to "PM"
        ampm = "pm";
    }

    // Addleading zeros to hour, minute, seconds if they are less then 10
    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    //update the text content of the HTML element with the updated time value
    hour.innerText = h;
    minute.innerText = m;
    second.innerText = s;
    ampm.innerText = ampm;

    //sechdule the updated clock function to run again after 1000 milliseconds
    setTimeout(() => {
        updateClock();
    }, 1000)
}

//call the function
updateClock();