const container = document.querySelector('.container')
const resetBtn = document.querySelector('.reset')

let size = 16

const createGrid = (size) => {
    for (let i = 0; i < size * size; i++) {
        const box = document.createElement('div')
        box.classList.add('box')
        box.style.width = `calc(100% / ${size}`;
        box.style.height = `calc(100% / ${size}`;
        container.appendChild(box)
    }
}

const paintGrid = () => {
    const boxes = document.querySelectorAll('.box')

    boxes.forEach(box => {
        box.addEventListener('mouseover', changeColor)
    })
}

const changeColor = e => {
    e.target.style.backgroundColor = randomColor()
}

const randomColor = () => {
    const randomRed = Math.floor(Math.random() * 256);
    const randomGreen = Math.floor(Math.random() * 256);
    const randomBlue = Math.floor(Math.random() * 256);
    return `rgb(${randomRed},${randomGreen},${randomBlue})`;
}

const removeGrid = (size) => {
    for (let i = 0; i < size * size; i++) {
        const box = document.querySelector('.box')
        container.removeChild(box)
    }
}

const resetGrid = () => {
    let newSize = parseInt(prompt("Enter New Grid Size (16 - 100): "))

    if (newSize >= 16 && newSize <= 100) {
        removeGrid(size)

        size = newSize

        createGrid(size)

        paintGrid()
    }
}

resetBtn.addEventListener('click', resetGrid)

createGrid(size)

paintGrid()
