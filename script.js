var itemContainers = document.querySelectorAll(".item-container");
var items = document.querySelectorAll(".item");
var dragItem = null;

for (item of items) {
  item.addEventListener("dragstart", dragStart);
  item.addEventListener("dragend", dragEnd);
}

function dragStart() {
  dragItem = this;
  setTimeout(() => (this.style.display = "none"), 0);
}

function dragEnd() {
  setTimeout(() => (this.style.display = "flex"), 0);
  dragItem = null;
}

for (itemContainer of itemContainers) {
  itemContainer.addEventListener("dragover", dragOver);
  itemContainer.addEventListener("dragEnter", dragEnter);
  itemContainer.addEventListener("dragleave", dragLeave);
  itemContainer.addEventListener("drop", drop);
}

function drop() {
  this.append(dragItem);
}

function dragOver(e) {
  e.preventDefault();
}

function dragEnter(e) {
  e.preventDefault();
}

function dragLeave() {}
