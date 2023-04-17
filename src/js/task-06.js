
const inputEl = document.getElementById('validation-input');
const inputElDataLength = inputEl.getAttribute('data-length');

const inputElValidation = ((event) => {
  if (!(event.target.value.length >= parseInt(inputElDataLength))) {
    inputEl.classList.remove('valid');
    inputEl.classList.toggle('invalid');
  } else {
    inputEl.classList.remove('invalid');
    inputEl.classList.toggle('valid');
  }
});

inputEl.addEventListener('blur', inputElValidation);