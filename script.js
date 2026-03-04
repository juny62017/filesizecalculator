var sizeInput = document.getElementById("sizeInput");
var unitSelect = document.getElementById("unitSelect");
var convertBtn = document.getElementById("convertBtn");
var clearBtn = document.getElementById("clearBtn");
var resultDiv = document.getElementById("result");

convertBtn.onclick = function () {

    var inputValue = sizeInput.value;
    var selectedUnit = unitSelect.value;

    if (inputValue === "") {
        resultDiv.innerText = "Please enter a value.";
        return;
    }

    if (isNaN(inputValue)) {
        resultDiv.innerText = "Only numbers are allowed.";
        return;
    }

    var numberValue = Number(inputValue);

    if (numberValue <= 0) {
        resultDiv.innerText = "Number must be greater than 0.";
        return;
    }

    var valueInKB = 0;
    var valueInMB = 0;
    var valueInGB = 0;

    if (selectedUnit === "KB") {

        valueInKB = numberValue;

        var tempMB = numberValue / 1024;
        valueInMB = tempMB;

        var tempGB = tempMB / 1024;
        valueInGB = tempGB;
    }

    else if (selectedUnit === "MB") {

        var tempKB = numberValue * 1024;
        valueInKB = tempKB;

        valueInMB = numberValue;

        var tempGB2 = numberValue / 1024;
        valueInGB = tempGB2;
    }

    else if (selectedUnit === "GB") {

        var tempMB3 = numberValue * 1024;
        valueInMB = tempMB3;

        var tempKB2 = tempMB3 * 1024;
        valueInKB = tempKB2;

        valueInGB = numberValue;
    }

    var formattedKB = valueInKB.toFixed(2);
    var formattedMB = valueInMB.toFixed(2);
    var formattedGB = valueInGB.toFixed(4);

    var outputText = "";
    outputText += "Kilobytes: " + formattedKB + " KB <br>";
    outputText += "Megabytes: " + formattedMB + " MB <br>";
    outputText += "Gigabytes: " + formattedGB + " GB";

    resultDiv.innerHTML = outputText;
};

clearBtn.onclick = function () {

    sizeInput.value = "";

    resultDiv.innerText = "Output will show here";

};
