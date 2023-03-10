// Defile constants for each field
const form = document.querySelector('form');
const firstNameField = document.querySelector('input[name="first_name_field"]');
const lastNameField = document.querySelector('input[name="last_name_field"]');
const phoneField = document.querySelector('input[name="phone_field"]');
const emailField = document.querySelector('input[name="email"]');

// Formats for field validations
const nameRegex = /^[a-zA-Z]+$/;
const phoneRegex = /^\d{3}-\d{3}-\d{4}$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;