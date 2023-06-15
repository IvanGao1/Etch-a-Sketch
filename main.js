const gridWrapper = document.querySelector('.container');

function createGrid(gridNumber) {
  for (let i = 0; i < gridNumber; i++) {
    for (let j = 0; j < gridNumber; j++) {
      let gridBox = document.createElement('div');
      gridBox.classList.add('grid-item');
      gridWrapper.appendChild(gridBox);
    }
  }
}

createGrid(10);
