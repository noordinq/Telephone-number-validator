const userInput = document.getElementById("user-input");
const result = document.getElementById("results-div");
const regex = /^(1\s?)?(\(\d{3}\)|\d{3})([\s\-]?)\d{3}([\s\-]?)\d{4}$/;

document.getElementById("check-btn").addEventListener("click", () => {
  validateNumber();
})
document.getElementById("clear-btn").addEventListener("click", () => {
  result.textContent = "";
})

function validateNumber(str) {
  let item = document.createElement("li");
  result.appendChild(item);

  if (userInput.value === "") {
    alert("Please provide a phone number");
    return;
  }

  if (regex.test(userInput.value)) {
    result.textContent = "Valid US number: "+userInput.value;
  } else {
    result.textContent = "Invalid US number: "+userInput.value;
  }
}

userInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    validateNumber();
  }
});
