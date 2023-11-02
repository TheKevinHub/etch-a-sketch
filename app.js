let sizeOfGrid = 30;
let resetBtn = document.querySelector('button');

let container = document.querySelector('.containerGrid');

let createGrid = (amntGrid) => {
    for (let i = 0; i < amntGrid; i++) {
        let row = document.createElement('div')
        row.classList.add('grid-row')

        for (let j = 0; j < amntGrid; j++) {
            let widthAndHeight = 960/ sizeOfGrid
            let gridBox = document.createElement('div')
            gridBox.classList.add('grid-box')
            gridBox.style.width = `${widthAndHeight}px`
            gridBox.style.height = `${widthAndHeight}px`
            // hover effects
            gridBox.addEventListener('mouseenter', () => {
                gridBox.style.backgroundColor = 'black'
                gridBox.style.transition = '0.3s'
            })
            row.appendChild(gridBox);
        }

        container.appendChild(row)
    }
}

createGrid(sizeOfGrid)