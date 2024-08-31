const themeSwitcher = document.getElementById('theme-switcher');

themeSwitcher.addEventListener('change', function() {
  const isChecked = this.checked;

  if (isChecked === true) {
    document.body.classList.toggle('dark-mode');
  }
  else {
    document.body.classList.remove('dark-mode')
  }
});

