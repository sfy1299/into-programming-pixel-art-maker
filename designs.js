// Select color input
// Select size input
const form = document.getElementById('sizePicker');
const gridHeight = document.getElementById('inputHeight');
const gridWidth = document.getElementById('inputWidth');
const colorPicker = document.getElementById('colorPicker');
const pixelCanvas = document.getElementById('pixelCanvas');

// When size is submitted by the user, call makeGrid()
form.addEventListener('submit', (event) => {
  event.preventDefault();
  makeGrid();
});

function createTr(tdCount, color) {
  const tr = document.createElement('tr');

  for (let i = 0; i < tdCount; i++) {
    const td = document.createElement('td');
    td.addEventListener('click', () => {
      td.style.background = color;
    });
    tr.appendChild(td);
  }

  return tr;
}

function makeGrid() {
  // retrieve the inputs
  const width = parseInt(gridWidth.value);
  const height = parseInt(gridHeight.value);
  const color = colorPicker.value;

  // Clear the canvas
  pixelCanvas.innerHTML = '';

  // Draw the tr and tds
  for (let i = 0; i < height; i++) {
    const tr = createTr(width, color);
    pixelCanvas.append(tr);
  }
}
