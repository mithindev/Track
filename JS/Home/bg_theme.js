const toggle = document.getElementById('mode-toggle');
const label = document.getElementById('mode-label');

toggle.addEventListener('change', function() {
  if (toggle.checked) {
    document.body.classList.add('dark-mode');
    label.textContent = 'Light Mode';
  } else {
    document.body.classList.remove('dark-mode');
    label.textContent = 'Dark Mode';
  }
});
