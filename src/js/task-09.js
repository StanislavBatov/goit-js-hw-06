function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};

const spanText = document.querySelector('span[class=color]');
const btnEl = document.querySelector('button[type=button]');


btnEl.addEventListener('click', () => {
  const color = getRandomHexColor();
  document.body.style.backgroundColor = color;
  spanText.textContent = color;
});

