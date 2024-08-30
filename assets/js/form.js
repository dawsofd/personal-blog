const formSubmission = document.getElementById('form-submission')

formSubmission.addEventListener('submit', function(event) {
  event.preventDefault();

  const userName = document.getElementById('userName').value;
  const title = document.getElementById('title').value;
  const content = document.getElementById('content').value;

  if (userName.trim() === '' || title.trim() === '' || content.trim() === '') {
    alert('Error! Please complete all fields.');
    return;
  }

  const submission = {
    userName,
    title,
    content
  };

  let submissions = JSON.parse(localStorage.getItem('submissions')) || [];

  submissions.push(submission);

  localStorage.setItem('submissions', JSON.stringify(submissions));

  window.location.href = './blog.html';

});