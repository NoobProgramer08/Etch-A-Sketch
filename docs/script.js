const parentContainer = document.querySelector(".grid");
const clearBtn = document.querySelector("#clear");
const changeSize = document.querySelector("#changeSize");
let columnCount = 0;

for (let a = 0; a <= 16; a++) {
  const box = document.createElement("div");
  box.classList.add("item");
  if (a == 0) {
    gridFlex = document.createElement("div");
  }
  gridFlex.appendChild(box);

  if (a + 1 == 16) {
    gridFlex.classList.add("control");
    parentContainer.appendChild(gridFlex);
    a = -1;
    columnCount++;
  }
  if (columnCount == 16) {
    break;
  }
}

const items = document.querySelectorAll(".item");

items.forEach((item) =>
  item.addEventListener("mouseover", () => {
    item.style.backgroundColor = "black";
  })
);
items.forEach((item) =>
  item.addEventListener("click", () => {
    item.style.backgroundColor = "white";
    console.log("clicked");
  })
);
clearBtn.addEventListener("click", () => {
  items.forEach((item) => (item.style.backgroundColor = "white"));
});
changeSize.addEventListener("click", () => {
  const prompt = window.prompt("Enter a size");
  if (prompt < 100) {
    createNewTable(prompt);
  } else {
    alert("Window size is invalid");
  }
});

function createNewTable() {
  for (let a = 0; a < prompt; a++) {}
}
