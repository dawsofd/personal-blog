const backButtonEl = document.querySelector("#back-click");

backButtonEl.addEventListener("click", function () {
  window.location = "./index.html";
});

const submissionList = document.getElementById('submission-list');

function renderSubmissions() {
  submissionList.innerHTML = '';
  const submissions = JSON.parse(localStorage.getItem('submissions')) || [];

  submissions.forEach(submission => {
    const submissionElement = document.createElement('div');
    submissionElement.classList.add('submission');
    submissionElement.innerHTML = `
      <h2>${submission.title}</h2>
      <p><em>&emsp;${submission.content}</em></p>
      <p>Posted By: ${submission.userName}</p>
    `;
    submissionList.appendChild(submissionElement);
    });
  }

  renderSubmissions();

