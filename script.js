const sizeInput = document.getElementById("sizeInput");
const unitSelect = document.getElementById("unitSelect");
const convertBtn = document.getElementById("convertBtn");
const resultText = document.getElementById("resultText");

convertBtn.addEventListener("click", () => {
  const value = Number(sizeInput.value);
  const unit = unitSelect.value;

  if (!value || value <= 0) {
    resultText.textContent = "Please enter a valid number.";
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
  } else if (unit === "GB") {
    kb = value * 1024 * 1024;
    mb = value * 1024;
    gb = value;
  }

  resultText.textContent =
    `${kb.toFixed(2)} KB | ${mb.toFixed(2)} MB | ${gb.toFixed(2)} GB`;
});
