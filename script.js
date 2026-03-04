var App = {

    elements: {
        input: document.getElementById("sizeInput"),
        unit: document.getElementById("unitSelect"),
        convertBtn: document.getElementById("convertBtn"),
        clearBtn: document.getElementById("clearBtn"),
        result: document.getElementById("result")
    },

    init: function () {
        this.attachEvents();
    },

    attachEvents: function () {
        var self = this;

        this.elements.convertBtn.onclick = function () {
            self.handleConvert();
        };

        this.elements.clearBtn.onclick = function () {
            self.handleClear();
        };
    },

    handleConvert: function () {

        var rawValue = this.elements.input.value;
        var selectedUnit = this.elements.unit.value;

        if (!this.validate(rawValue)) {
            return;
        }

        var numericValue = Number(rawValue);

        var convertedData = this.convertValues(numericValue, selectedUnit);

        var formattedOutput = this.formatOutput(convertedData);

        this.displayResult(formattedOutput);
    },

    handleClear: function () {
        this.elements.input.value = "";
        this.elements.result.innerHTML = "Output will show here";
    },

    validate: function (value) {

        if (value === "") {
            this.displayResult("Please enter a value.");
            return false;
        }

        if (isNaN(value)) {
            this.displayResult("Only numbers are allowed.");
            return false;
        }

        if (Number(value) <= 0) {
            this.displayResult("Value must be greater than 0.");
            return false;
        }

        return true;
    },

    convertValues: function (value, unit) {

        var kb = 0;
        var mb = 0;
        var gb = 0;

        if (unit === "KB") {
            kb = value;
            mb = this.divideBy1024(value);
            gb = this.divideBy1024(mb);
        }

        if (unit === "MB") {
            kb = this.multiplyBy1024(value);
            mb = value;
            gb = this.divideBy1024(value);
        }

        if (unit === "GB") {
            var tempMB = this.multiplyBy1024(value);
            var tempKB = this.multiplyBy1024(tempMB);

            kb = tempKB;
            mb = tempMB;
            gb = value;
        }

        return {
            kb: kb,
            mb: mb,
            gb: gb
        };
    },

    multiplyBy1024: function (num) {
        return num * 1024;
    },

    divideBy1024: function (num) {
        return num / 1024;
    },

    formatOutput: function (data) {

        var line1 = "Kilobytes: " + data.kb.toFixed(2) + " KB";
        var line2 = "Megabytes: " + data.mb.toFixed(2) + " MB";
        var line3 = "Gigabytes: " + data.gb.toFixed(4) + " GB";

        return line1 + "<br>" + line2 + "<br>" + line3;
    },

    displayResult: function (text) {
        this.elements.result.innerHTML = text;
    }

};

App.init();
