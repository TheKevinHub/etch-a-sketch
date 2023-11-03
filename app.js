const createRandomRGB = () => {
    const R = Math.floor(Math.random() * 256)
    const G = Math.floor(Math.random() * 256)
    const B = Math.floor(Math.random() * 256)

    return { R, G, B }
}

let resetBtn = document.querySelector('.btn-reset');


let color = 'black'
let click = false;

document.addEventListener("DOMContentLoaded", function() {
    createBoard(16)

    document.querySelector('body').addEventListener("click", function(e) {
        if(e.target.tagName != "BUTTON") {
            click = !click
            let draw = document.querySelector('.draw')
            if(click) {
                draw.textContent = "Drawing is ON"
            }
            else {
                draw.textContent = "Drawing is OFF"
            }
        }
    })
})

let createBoard = (size) => {
    let board = document.querySelector('.containerGrid')

    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`

    let numDivs = size * size

    for (let i = 0; i < numDivs; i++) {
        let div = document.createElement('div')
        div.classList.add('divBox')
        div.addEventListener("mouseover", colorDiv)
        board.appendChild(div)
    }
}

createBoard(16);

resetBtn.addEventListener('click', () => {
    let input = Number(prompt('How big do you want the grid to be?'))

    while (input > 100 || input == "") {
        input = Number(prompt('Pick a number between 1 and 100.'))
    }
    createBoard(input)
    let gridSizeDiv = document.querySelector('.currentGridSize')
    gridSizeDiv.textContent = `Current grid size: ${input}x${input}`
})

function colorDiv() {
    if (click) {
        if (color == "random") {
            const {R, G, B} = createRandomRGB()
            const rgbColor = "rgb(" + R + "," + G + "," + B + ")";
            this.style.backgroundColor = rgbColor
            this.style.transition = '0.2s'
        }
        else if (color == "black") {
            this.style.backgroundColor = "black"
            this.style.transition = '0.2s'
        }
        else if (color == "shading"){
            const currentOpacity = this.style.opacity
            this.style.opacity = Number(currentOpacity) + .1
            this.style.backgroundColor = "black"
        }
    }
}

function setColor(colorChoice) {
    color = colorChoice
}

function resetBoard() {
    let divs = document.querySelectorAll('.divBox')
    divs.forEach((div) => div.style.background = "white")
}