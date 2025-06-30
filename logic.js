const container = document.querySelector("#container");

let num = 16;
let gridSize = num * num;
let grid;

for (let i = 1; i <= gridSize; i++) {
    grid = document.createElement("div");
    grid.classList.add("grid")
    grid.setAttribute("style", `flex-basis: ${100/num}%`)
    container.appendChild(grid);
}

const grids = document.querySelectorAll(".grid");

grids.forEach((grid) => {
    grid.addEventListener("mouseenter", () => {
        grid.classList.add("hover")
    })
})
