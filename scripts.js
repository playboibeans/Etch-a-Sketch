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
            square.classList.add("red")
        })
        square.addEventListener("mouseenter", (event) => {
            if (event.buttons === 1) {
                square.classList.add("red")
            }
        })
    })

    const resetBtn = document.querySelector("#reset")
    resetBtn.addEventListener('click', () => {
        squares.forEach(square => {
            square.classList.remove("red")
        })
    })
}

window.addEventListener('load', changeGridSize(16))

const btn64 = document.querySelector("#btn64")
btn64.addEventListener("click", () => { changeGridSize(64) })

const btn32 = document.querySelector("#btn32")
btn32.addEventListener("click", () => { changeGridSize(32) })

const btn16 = document.querySelector("#btn16")
btn16.addEventListener("click", () => { changeGridSize(16) })

