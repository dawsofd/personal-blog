// const buttonEl = document.querySelector("#submit");

// buttonEl.addEventListener("click", function () {
//   window.location = "http://127.0.0.1:5500/index.html";
// });

const userInput = JSON.parse(localStorage.getItem('userInput'));
if (userInput) {
  document.getElementById('display-username').textContent = userInput.formName;
  document.getElementById('display-title').textContent = userInput.formTitle;
  document.getElementById('display-title').textContent = userInput.formContent;
}