function createSquare() {
    const container = document.querySelector("#container>#canva")
    for (i = 0; i < 16 * 16; i++) {
        const addRow = document.createElement("div")
        container.appendChild(addRow)
    }
}


window.addEventListener('load', createSquare)
