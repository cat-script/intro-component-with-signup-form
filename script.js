const form = document.querySelector('form');
const formGroup = document.querySelectorAll('.form-group');

form.addEventListener('submit', (e) => {
  let isFormValid = true;
  e.preventDefault();

  const { firstname, lastname, email, password } = form.elements;

  if (!firstname.value.trim()) {
    checkInput(firstname);
  }

  if (!lastname.value.trim()) {
    checkInput(lastname);
  }

  if (!email.value.trim() || !isValidEmail(email.value)) {
    checkInput(email);
  }

  if (!password.value.trim()) {
    checkInput(password);
  }

  formGroup.forEach((group) => {
    if (group.classList.contains('has-error')) {
      isFormValid = false;
    }
  });

  if (isFormValid) {
    form.reset();
  }
});

function checkInput(input) {
  input.parentElement.classList.add('has-error');
  const eachInput = input.parentElement.querySelector('input');
  eachInput.addEventListener('focus', () => {
    input.parentElement.classList.remove('has-error');
  });
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
