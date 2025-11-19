let currentOperand = "";
let previousOperand = "";
let operation = "";

const numberButtons = document.querySelectorAll("[data-number]");
const operationButtons = document.querySelectorAll("[data-operation]");
const equalsButtons = document.querySelector("[data-equals]");
const deleteButtons = document.querySelector("[data-delete]");
const allclearButtons = document.querySelector("[data-all-clear]");
const previousOperandTextElement = document.querySelector(
  "[data-previous-operand]"
);
const currentOperandTextElement = document.querySelector(
  "[data-current-operand]"
);

numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.innerText;

    if (value === "." && currentOperand.includes(".")) return;
    currentOperand = currentOperand + value;
    currentOperandTextElement.innerText = currentOperand;
  });
});

function compute() {
  let result;
  const prev = parseFloat(previousOperand);
  const current = parseFloat(currentOperand);
  if (isNaN(prev) || isNaN(current)) return;

  switch (operation) {
    case "+":
      result = prev + current;
      break;
    case "-":
      result = prev - current;
      break;
    case "*":
      result = prev * current;
      break;
    case "÷":
      result = prev / current;
      break;
    default:
      return;
  }

  currentOperand = result.toString();
  previousOperand = "";
  operation = "";
}

operationButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (currentOperand === "") return;
    if (previousOperand != "") {
      compute();
    }
    previousOperand = currentOperand;
    operation = button.innerText;
    currentOperand = "";

    previousOperandTextElement.innerText = previousOperand + " " + operation;
    currentOperandTextElement.innerText = currentOperand;
  });
});

equalsButtons.addEventListener("click", () => {
  if (currentOperand === "" || previousOperand === "") return;
  compute();
  currentOperandTextElement.innerText = currentOperand;
  previousOperandTextElement.innerText = "";
});

deleteButtons.addEventListener("click", () => {
  currentOperand = currentOperand.slice(0, -1);
  currentOperandTextElement.innerText = currentOperand;
});
allclearButtons.addEventListener("click", () => {
  currentOperand = "";
  previousOperand = "";
  operation = "";
  currentOperandTextElement.innerText = "";
  previousOperandTextElement.innerText = "";
});
