let timerElement = document.getElementById("timer");

let counter = 10;

let timing = setInterval(function() {
    counter = counter - 1;
    timerElement.textContent = counter;
    if (counter === 0) {
        timerElement.textContent = "Boom!!!";
        clearInterval(timing);
    }
}, 1000);

let inputElementt = document.getElementById("inputElement");
inputElementt.addEventListener("keydown", function(event) {
    let value = inputElementt.value;
    if (counter !== 0 && value === "defuse" && event.key === "Enter") {
        timerElement.textContent = "You did it!!!";
        clearInterval(timing);
    }
});