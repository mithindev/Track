const card = document.getElementById('myCard');
const cardTitle = document.getElementById('cardTitle');
const expandButton = document.getElementById('expandButton');
const expandedForm = document.getElementById('expandedForm');

// Add click event listener to the button
expandButton.addEventListener('click', function() {
  // Toggle the visibility of the form
  expandedForm.style.display = 'block';
  
  // Update the card title with the form title
  cardTitle.textContent = 'Form Title';
});

// Add submit event listener to the form
const form = document.getElementById('myForm');
form.addEventListener('submit', function(event) {
  event.preventDefault();
  
  // Retrieve form data and perform desired actions
  const name = document.getElementById('name').value;
  
  // Display the submitted form data
  console.log('Submitted Name:', name);
});