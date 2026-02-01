const sizeInput = document.getElementById("sizeInput");
const unitSelect = document.getElementById("unitSelect");
const convertBtn = document.getElementById("convertBtn");
const clearBtn = document.getElementById("clearBtn");
const resultDiv = document.getElementById("result");

convertBtn.addEventListener("click", () => {
  const value = parseFloat(sizeInput.value);
  const unit = unitSelect.value;

  if (isNaN(value) || value <= 0) {
    resultDiv.textContent = "Please enter a valid number.";
    return;
  }

  let kb, mb, gb;

  if (unit === "KB") {
    kb = value;
    mb = value / 1024;
    gb = value / (1024 * 1024);
  } else if (unit === "MB") {
    kb = value * 1024;
    mb = value;
    gb = value / 1024;
  } else {
    kb = value * 1024 * 1024;
    mb = value * 1024;
    gb = value;
  }

  resultDiv.innerHTML = `
    ${kb.toFixed(2)} KB<br>
    ${mb.toFixed(2)} MB<br>
    ${gb.toFixed(4)} GB
  `;
});

clearBtn.addEventListener("click", () => {
  sizeInput.value = "";
  resultDiv.textContent = "Result will appear here";
});
