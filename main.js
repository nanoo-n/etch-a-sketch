const container = document.querySelector(".container");
const mouseOver = document.querySelector(".square");

let max = 16;

for (let i = 0; i < max; i++) {
    const column = document.createElement("div");
    column.classList.add("column");
    //row.textContent = i;
    container.appendChild(column);
    for (let j = 0; j < max; j++) {
        const square = document.createElement("div");
        square.classList.add("square");
        //square.textContent = i + 1;
        column.appendChild(square);

        square.addEventListener("mouseover", () => {
            square.classList.add("square-black");
        });
    }
}