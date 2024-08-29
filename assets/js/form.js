const formInput = document.querySelector('.form-input');
const formName = document.querySelector('.form-name');
const formTitle = document.querySelector('.form-title');
const formText =  document.querySelector('.form-text');

function submitInput(event) {
    event.errorIncomplete();
    if (formName.value.trim() === '' || formTitle.value.trim() === '' || formText.value.trim() === '') {
        alert('Error! Please complete all fields.');
    } 
    else {
      const userInput = {
        formName: formName.value.trim(),
        formTitle: formTitle.value.trim(),
        formText: formText.value.trim()
      };
      localStorage.setItem('formName', JSON.stringify(formName));
      window.location.href = 'http://127.0.0.1:5500/blog.html#';

    }
};

if (formInput) {
    formInput.addEventListener('submit', userInput);
    console.log(formInput);
}