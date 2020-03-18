"use strict";
const numberRef = document.querySelector("input");
const butCreateRef = document.querySelector("button");
const butEraseRef = butCreateRef.nextElementSibling;
const divBoxesRef = document.querySelector("#boxes");
let amount = 0;
let widthX = 20;
let heightY = 20;
const step = 10;
let boxesToDelete;
function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
function createBoxes(amount) {
  for (let i = 1; i <= amount; i += 1) {
    const divs = document.createElement("div");
    divs.setAttribute("id", "mydiv");
    widthX = widthX + step;
    let sizeX = `${widthX}px`;
    divs.style.width = sizeX;
    heightY = heightY + step;
    let sizeY = `${heightY}px`;
    divs.style.height = sizeY;
    divBoxesRef.append(divs);
    divs.style.backgroundColor = getRandomColor();
  }
}
function toCreateBoxes(event) {
  amount = numberRef.value;
  createBoxes(amount);
}
function destroyBoxes(event) {
  boxesToDelete = divBoxesRef.childElementCount;
  for (let i = 1; i <= boxesToDelete; i += 1) {
    divBoxesRef.lastElementChild.remove();
  }

  widthX = 20;
  heightY = 20;
  numberRef.value = 0;
}

butCreateRef.addEventListener("click", toCreateBoxes);

butEraseRef.addEventListener("click", destroyBoxes);
