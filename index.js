function convertFromCelsius() {
    let celsius = parseFloat(document.getElementById("celsius").value);
    let fahrenheit = (celsius * 9 / 5) + 32;
    document.getElementById("fahrenheit").value = fahrenheit.toFixed(2);
    updateBackgroundAndMessage(celsius);
}

function convertFromFahrenheit() {
    let fahrenheit = parseFloat(document.getElementById("fahrenheit").value);
    let celsius = (fahrenheit - 32) * 5 / 9;
    document.getElementById("celsius").value = celsius.toFixed(2);
    updateBackgroundAndMessage(celsius);
}

function updateBackgroundAndMessage(celsius) {
    let statusMessage;
    let backgroundColor;

    if (celsius >= 40) {
        statusMessage = "Weather is Heat Wave";
        backgroundColor = "#ff0000";
    } else if (celsius >= 30) {
        statusMessage = "Weather is Hot";
        backgroundColor = "#ff7a00";
    } else if (celsius >= 15) {
        statusMessage = "Weather is Warm";
        backgroundColor = "#FFFF00";
    } else if (celsius > 0) {
        statusMessage = "Weather is Cool";
        backgroundColor = "#87CEEB";
    } else if (celsius === 0) {
        statusMessage = "Weather is Water Freeze";
        backgroundColor = "#4169e1";
    } else {
        statusMessage = "Weather is Very Cold";
        backgroundColor = "#00FFFF";
    }

    document.body.style.backgroundColor = backgroundColor;
    document.getElementById("value").innerText = statusMessage;
}
