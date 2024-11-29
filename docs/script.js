const parentContainer = document.querySelector(".grid");
const clearBtn = document.querySelector("#clear");
const changeSize = document.querySelector("#changeSize");
let columnCount = 0,
  prompt = 0,
  hoverCount = 0;

setFirstTable();

changeSize.addEventListener("click", () => {
  console.log("Event happened");
  prompt = window.prompt("Enter a size");
  if (prompt <= 100) {
    createNewTable(prompt);
  } else {
    alert("Window size is invalid");
  }
});

function setFirstTable() {
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
      addEvents();
      break;
    }
  }
}

function addEvents() {
  const items = document.querySelectorAll(".item");
  //Sets or restart the item.id to 1 to increase its
  items.forEach((item) => (item.id = "1"));
  items.forEach((item) =>
    item.addEventListener("mouseover", () => {
      hoverCount = parseInt(item.id) + 1;

      if (item.style.backgroundColor == "") {
        item.style.backgroundColor = randomizeColor();
      }

      item.id = hoverCount;
      if (hoverCount <= 10) {
        let opacNow = "0." + hoverCount;
        if (opacNow == "0.10") {
          opacNow = "1";
          item.style.opacity = opacNow;
        } else {
          item.style.opacity = opacNow;
        }
      }
    })
  );

  items.forEach((item) =>
    item.addEventListener("click", () => {
      item.style.backgroundColor = "white";
    })
  );
  clearBtn.addEventListener("click", () => {
    items.forEach(
      (item) => ((item.style.backgroundColor = ""), (item.style.opacity = "1"))
    );
  });
}

function createNewTable(prompt) {
  columnCount = 0;
  parentContainer.innerHTML = "";
  for (let a = 0; a <= prompt; a++) {
    const box = document.createElement("div");
    box.classList.add("item");
    if (a == 0) {
      gridFlex = document.createElement("div");
    }
    gridFlex.appendChild(box);
    if (a + 1 == prompt) {
      gridFlex.classList.add("control");
      parentContainer.appendChild(gridFlex);
      a = -1;
      columnCount++;
    }
    if (columnCount == prompt) {
      addEvents();
      break;
    }
  }
}
function randomizeColor() {
  const hexValues = [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
  ];
  let hexValue = "#";

  for (let a = 0; a < 6; a++) {
    hexValue += hexValues[Math.ceil(Math.random() * hexValues.length - 1)];
  }
  console.log(hexValue);
  return hexValue;
}
