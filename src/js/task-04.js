let counterValue = 0;

const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const valueElement = document.getElementById('value');
// console.log(decrementBtn, increment, valueElement);

decrementBtn.addEventListener('click', () => {
  counterValue -= 1;
  valueElement.textContent = counterValue;
}); 

incrementBtn.addEventListener('click', () => {
  counterValue += 1;
  valueElement.textContent = counterValue;
});

