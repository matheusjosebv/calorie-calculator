const form = document.getElementById("form");
const gender = document.getElementById("gender");
const age = document.getElementById("age");
const height = document.getElementById("height");
const weight = document.getElementById("weight");
const activity = document.getElementById("activity");
const resultDiv = document.getElementById("result");
const calculateBtn = document.getElementsByClassName("calculate-btn");
const resetBtn = document.getElementsByClassName("reset-btn");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let result;

  if (gender.value === "male") {
    result = (10 * weight.value + 6.25 * height.value - 5 * age.value + 5) * activity.value;
  }

  if (gender.value === "female") {
    result = (10 * weight.value + 6.25 * height.value - 5 * age.value - 161) * activity.value;
  }

  resultDiv.innerText = Math.round(result);
  calculateBtn.innerText = "Re-Calculate";
});

function resetForm() {
  form.reset();
  resultDiv.innerText = "";
}
