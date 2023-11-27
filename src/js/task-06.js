
const inputEl = document.getElementById('validation-input');
const inputElDataLength = inputEl.getAttribute('data-length');

const inputElValidation = ((event) => {
  if (event.target.value.length === parseInt(inputElDataLength)) {
    inputEl.classList.add('valid');
    inputEl.classList.remove('invalid');
  } else {
    inputEl.classList.add('invalid');
    inputEl.classList.toggle('valid');
  }
});

inputEl.addEventListener('blur', inputElValidation);
