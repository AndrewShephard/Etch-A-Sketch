const grid = document.querySelector('.grid');
let gridValue = document.querySelector('.grid-size');
let gridSize = document.querySelector('input');
const resetBtn = document.querySelector('.reset');
const eraseBtn = document.querySelector('.erase');
const applyGridSize = document.querySelector('.apply');
let squareSize = 8;

createGrid(squareSize);
draw();

// Create Squared Divs
function createDiv(size) {
  const div = document.createElement('div');
  div.classList.add('box');
  div.style.width = `${size}px`;
  div.style.height = `${size}px`;

  return div;
}

// Creat The Grid and append it to grid
function createGrid(gridSize) {
  for (let i = 0; i < gridSize; i++) {
    for (let j = 0; j < gridSize; j++) {
      grid.appendChild(createDiv(grid.clientWidth / gridSize));
    }
  }
  console.log(grid.clientWidth)
}

function draw(){
grid.addEventListener('mouseover', function(e){
    if (e.target.matches('.box.erase')) {
      e.target.classList.remove('erase');
    }
    if (e.target.matches('.box')) {
        e.target.classList.add('filledIn');
      }
});
}

function erase(){
grid.addEventListener('mouseover', function(e){
  if (e.target.matches('.box.filledIn')){
    e.target.classList.remove('filledIn');
  }
  if (e.target.matches('.box')) {
      e.target.classList.add('erase');
    }
});
}


function reset() {
    const boxes = Array.from(document.querySelectorAll('div.box.filledIn'));
    boxes.forEach(box => box.style.backgroundColor = "#f5f5f5");
    draw();
}

  resetBtn.addEventListener('click', reset);
  eraseBtn.addEventListener('click', erase);
  applyGridSize.addEventListener('click', draw);