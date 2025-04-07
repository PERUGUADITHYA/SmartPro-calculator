const display = document.getElementById("display");
const tableSelect = document.getElementById("tableNumber");
const tableOutput = document.getElementById("tableOutput");
const body = document.body;

function append(value) {
  if (display.textContent === "0") {
    display.textContent = value;
  } else {
    display.textContent += value;
  }
}

function clearDisplay() {
  display.textContent = "0";
}

function calculate() {
  try {
    display.textContent = eval(display.textContent);
  } catch (e) {
    display.textContent = "Error";
  }
}

function deleteLast() {
  if (display.textContent.length > 1) {
    display.textContent = display.textContent.slice(0, -1);
  } else {
    display.textContent = "0";
  }
}

function generateTable() {
  const num = parseInt(tableSelect.value);
  let result = `<strong>Multiplication Table of ${num}</strong><br><br>`;
  for (let i = 1; i <= 10; i++) {
    result += `${num} × ${i} = ${num * i}<br>`;
  }
  tableOutput.innerHTML = result;
}

function toggleMode() {
  body.classList.toggle("dark-mode");
  body.classList.toggle("light-mode");
}

// Populate dropdown
for (let i = 1; i <= 50; i++) {
  const option = document.createElement("option");
  option.value = i;
  option.textContent = i;
  tableSelect.appendChild(option);
}
