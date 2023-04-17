const inputElement = document.getElementById('name-input');
const outputElement = document.getElementById('name-output');
// console.log(inputElement, outputElement);

function enterName() {
  const inputValue = inputElement.value;
  if (inputValue) {
    outputElement.textContent = inputValue;
  } else {
    outputElement.textContent = 'Anonymous';
  }
}

inputElement.addEventListener('input', enterName);


