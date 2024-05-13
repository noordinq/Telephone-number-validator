const userInput = document.getElementById("user-input");
const result = document.getElementById("results-div");

document.getElementById("check-btn").addEventListener("click", () => {
  validateNumber();
})

document.getElementById("clear-btn").addEventListener("click", () => {
  result.textContent = "";
})


function validateNumber(str) {

  if (userInput.value === "") {
    alert("Please provide a phone number");
    return;
  }

}