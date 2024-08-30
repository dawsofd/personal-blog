const themeSwitcher = document.querySelector('#theme-switcher');
const container = document.querySelector('html');

let mode = 'light';

themeSwitcher.addEventListener('click', function() {
  if (mode === 'light') {
    mode === 'dark';
    container.setAttribute('class', 'dark');
    themeSwitcher.textContent = '🌙';
  }
  else {
    mode === 'light';
    container.setAttribute('class', 'light');
    themeSwitcher.textContent = '☀️';
  }
});
