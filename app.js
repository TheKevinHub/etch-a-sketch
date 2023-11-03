const createRandomRGB = () => {
    const R = Math.floor(Math.random() * 256)
    const G = Math.floor(Math.random() * 256)
    const B = Math.floor(Math.random() * 256)

    return { R, G, B }
}

let sizeOfGrid = 10;

let container = document.querySelector('.containerGrid');
let resetBtn = document.querySelector('.btn-reset');

// let createGrid = (amntGrid) => {
//     let wrapper = document.createElement('div')
//     wrapper.classList.add('wrapper')
//     for (let i = 0; i < amntGrid; i++) {
//         let row = document.createElement('div')
//         row.classList.add('grid-row')

//         for (let j = 0; j < amntGrid; j++) {
//             const {R, G, B} = createRandomRGB()
//             let widthAndHeight = 480/ sizeOfGrid
//             let gridBox = document.createElement('div')
//             gridBox.classList.add('grid-box')
//             gridBox.style.width = `${widthAndHeight}px`
//             gridBox.style.height = `${widthAndHeight}px`
//             // hover effects
//             gridBox.addEventListener('mouseenter', () => {
//                 const rgbColor = "rgb(" + R + "," + G + "," + B + ")";
//                 const currentOpacity = gridBox.style.opacity

//                 // 3 different styles of the Sketch. B/W, Rainbow, Opacity
//                 // gridBox.style.backgroundColor = 'black'
//                 gridBox.style.backgroundColor = rgbColor
//                 // gridBox.style.opacity = Number(currentOpacity) + .1

//                 // gridBox.style.transition = '0.3s'
//             })
//             row.appendChild(gridBox);
//         }

//         wrapper.appendChild(row)
//     }
//     container.appendChild(wrapper)
// }

// createGrid(sizeOfGrid)

// resetBtn.addEventListener('click', () => {
//     let userSize = Number(prompt('How big do you want the grid to be?'))

//     while (userSize > 100) {
//         userSize = Number(prompt('Pick a number between 1 and 100.'))
//     }

//     let wrapper = document.querySelector('.wrapper')
//     wrapper.remove()
//     createGrid(userSize)
// })


let createBoard = (size) => {
    let board = document.querySelector('.containerGrid')

    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`

    let numDivs = size * size

    for (let i = 0; i < numDivs; i++) {
        let div = document.createElement('div')
        div.style.backgroundColor = 'white'
        div.style.border = '2px solid black'
        board.appendChild(div)
    }
}

createBoard(10);