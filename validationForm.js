const form = document.querySelector('#myForm');
const submitBtn = document.querySelector('#submitBtn');
const errorDiv = document.querySelector('#error');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const name = document.querySelector('#name').value;
  const email = document.querySelector('#email').value;
  const password = document.querySelector('#password').value;
  
  if (name === '' || email==='' || password === '') {
    errorDiv.textContent = 'Please fill in all fields.';
    return;
  }
  
  if (!isValidName(name)) {
    errorDiv.textContent = 'Invalid name.';
    return;
  }
  
  if (!isValidEmail(email)) {
    errorDiv.textContent = 'Invalid email.';
    return;
  }
  
  if (!isValidPassword(password)) {
    errorDiv.textContent = 'Invalid password.';
    return;
  }
  
  // Submit the form if everything is valid
  form.submit();
});

function isValidName(name) {
  // Validation rule: Name must be at least 2 characters long
  return name.length >= 2;
}

function isValidEmail(email) {
  // Validation rule: Email must be in the format of username@domain.com
  const emailRegex = /^\S+@\S+\.\S+$/;
  return emailRegex.test(email);
}

function isValidPassword(password) {
  // Validation rule: Password must be at least 8 characters long
  return password.length >= 8;
}

// Real-time validation while the user is inputting data
document.addEventListener('input', (event) => {
  const input = event.target;
  const inputValue = input.value;
  const inputName = input.name;
  
  switch (inputName) {
    case 'name':
      if (!isValidName(inputValue)) {
        input.setCustomValidity('Invalid name.');
      } else {
        input.setCustomValidity('');
      }
      break;
    case 'email':
      if (!isValidEmail(inputValue)) {
        input.setCustomValidity('Invalid email.');
      } else {
        input.setCustomValidity('');
      }
      break;
    case 'password':
      if (!isValidPassword(inputValue)) {
        input.setCustomValidity('Invalid password.');
      } else {
        input.setCustomValidity('');
      }
      break;
    default:
      break;
  }
});