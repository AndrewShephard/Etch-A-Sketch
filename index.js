const container = document.querySelector('#container');

for (i=0; i<16; i++){
    const grid = document.createElement('div');
    grid.classList.add('grid');
    grid.textContent = `${i}`;
    
    container.appendChild(grid);
}


