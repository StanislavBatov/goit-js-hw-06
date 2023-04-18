
const inputEl = document.getElementById('validation-input');
const inputElDataLength = inputEl.getAttribute('data-length');

const inputElValidation = ((event) => {
  if (!(event.target.value.length === parseInt(inputElDataLength))) {
    inputEl.classList.add('invalid');
    inputEl.classList.remove('valid');
  } else {
    inputEl.classList.toggle('invalid');
  }
});

inputEl.addEventListener('blur', inputElValidation);