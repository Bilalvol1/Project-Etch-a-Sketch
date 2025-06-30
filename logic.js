function createGrids(num) {
    for (let i = 1; i <= num * num; i++) {
    let grid = document.createElement("div");
    grid.classList.add("grid")
    grid.setAttribute("style", `flex-basis: ${100/num}%`)
    container.appendChild(grid);
    }
    const grids = document.querySelectorAll(".grid");
    addHoverEffect(grids);
    return grids;
}

function addHoverEffect(grids) {grids.forEach((grid) => {
    grid.addEventListener("mouseenter", () => {
        grid.classList.add("hover")
        })
    })
}

function changeGridSize() {
btn.textContent = "Add Size"
btn.addEventListener("click", () => {
    let num;
    do {
        num = parseInt(prompt("enter a number:", "16"));
        console.log("hi")
    } while(num >= 100)
    const grids = document.querySelectorAll(".grid");
    deleteGrids(grids);
    createGrids(num);
    })
body.insertBefore(btn, container);
}

function deleteGrids(grids) {
    grids.forEach((grid) => {
        container.removeChild(grid);
    })
}

let num = 16;
let count = 0;
const container = document.querySelector("#container");
const body = document.querySelector("body")
const btn = document.createElement("button");

createGrids(num);
changeGridSize();
