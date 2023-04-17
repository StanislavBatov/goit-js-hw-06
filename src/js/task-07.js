const fontSizeControl = document.getElementById('font-size-control');
const text = document.querySelector('#text');


fontSizeControl.addEventListener('input', (event) => {
  const fontSizeEl = event.target.value;
  text.style.fontSize = `${fontSizeEl}px`;
});