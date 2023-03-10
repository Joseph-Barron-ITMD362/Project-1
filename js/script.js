// Defile constants for each field
const form = document.querySelector('form');
const firstNameField = document.querySelector('input[name="first_name_field"]');
const lastNameField = document.querySelector('input[name="last_name_field"]');
const phoneField = document.querySelector('input[name="phone_field"]');
const emailField = document.querySelector('input[name="email"]');

// Formats for field validations
const nameRegex = /^[a-zA-Z]+$/;
const phoneRegex = /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Test the expressions against their set required formats.
form.addEventListener('submit', function(event) {
  event.preventDefault();

  let errors = [];
  if (!nameRegex.test(firstNameField.value)) {
    errors.push('First name is invalid');
  }
  if (!nameRegex.test(lastNameField.value)) {
    errors.push('Last name is invalid');
  }
  if (!phoneRegex.test(phoneField.value)) {
    errors.push('Phone number is invalid (use format XXX-XXX-XXXX)');
  }
  if (!emailRegex.test(emailField.value)) {
    errors.push('Email is invalid');
  }
  
  // Error messages
  if (errors.length > 0) {
    alert(errors.join('\n'));
  } else {
    // Successful form completion
    alert('Thank you for submitting the form!');
    form.reset();
  }
});
