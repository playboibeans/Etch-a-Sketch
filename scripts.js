function changeGridSize(size) {

    const canva = document.querySelector("#canva")
    canva.innerHTML = ''
    for (i = 0; i < size * size; i++) {
        const addRow = document.createElement("div")
        canva.appendChild(addRow)
    }

    const squares = document.querySelectorAll("#canva>div")
    squares.forEach(square => {
        square.style.width = 'calc(100% / ' + size + ')'
        square.style.height = 'calc(100% / ' + size + ')'

        square.addEventListener("mousedown", () => {
            square.classList.add("black")
        })
        square.addEventListener("mouseenter", (event) => {
            if (event.buttons === 1) {
                square.classList.add("black")
            }
        })

        const pen = document.querySelector("#pen")
        pen.addEventListener("click", () => {
            square.addEventListener("mousedown", () => {
                square.classList.add("black")
            })
            square.addEventListener("mouseenter", (event) => {
                if (event.buttons === 1) {
                    square.classList.add("black")
                }
            })
        })

        const eraser = document.querySelector("#eraser")
        eraser.addEventListener("click", () => {
            square.addEventListener("mousedown", () => {
                square.classList.remove("black")
            })
            square.addEventListener("mouseenter", (event) => {
                if (event.buttons === 1) {
                    square.classList.remove("black")
                }
            })
        })


    })

    const resetBtn = document.querySelector("#reset")
    resetBtn.addEventListener('click', () => {
        squares.forEach(square => {
            square.classList.remove("black")
        })
    })


}

window.addEventListener('load', changeGridSize(16))

const btn64 = document.querySelector("#btn64")
btn64.addEventListener("click", () => {
    changeGridSize(64)
    btn64.classList.add("selected")
    btn32.classList.remove("selected")
    btn16.classList.remove("selected")
    penButton.classList.add('selected')
    eraserButton.classList.remove('selected')
})

const btn32 = document.querySelector("#btn32")
btn32.addEventListener("click", () => {
    changeGridSize(32)
    btn64.classList.remove("selected")
    btn32.classList.add("selected")
    btn16.classList.remove("selected")
    penButton.classList.add('selected')
    eraserButton.classList.remove('selected')
})

const btn16 = document.querySelector("#btn16")
btn16.addEventListener("click", () => {
    changeGridSize(16)
    btn64.classList.remove("selected")
    btn32.classList.remove("selected")
    btn16.classList.add("selected")
    penButton.classList.add('selected')
    eraserButton.classList.remove('selected')
})


const penButton = document.querySelector("#pen")
const eraserButton = document.querySelector("#eraser")
penButton.addEventListener('click', () => {
    penButton.classList.add('selected')
    eraserButton.classList.remove('selected')
})
eraserButton.addEventListener('click', () => {
    eraserButton.classList.add('selected')
    penButton.classList.remove('selected')
})