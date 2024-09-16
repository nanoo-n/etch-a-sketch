const container = document.querySelector(".container");
const mouseOver = document.querySelector(".square");
const button = document.querySelector(".btn");

createGrid(16);

button.addEventListener("click", () => {
    clearGrid();
    max = prompt("Please select the size per side of the grid (max 100)");
    if (max > 100) {
        max = 100
    }
    createGrid(max);
});

function createGrid(size) {
    for (let i = 0; i < size; i++) {
        const column = document.createElement("div");
        column.classList.add("column");
        container.appendChild(column);
        for (let j = 0; j < size; j++) {
            const square = document.createElement("div");
            square.classList.add("square");
            column.appendChild(square);
    
            square.addEventListener("mouseover", () => {
                square.classList.add("square-black");
            });
        }
    }
}

function clearGrid() {
    const columns = document.querySelectorAll(".column");
    columns.forEach(div => {
        div.remove();
    });
}