const { createElement } = require("react");

const itemForm = document.getElementById("item-form");
const itemInput = document.getElementById("item-input");
const itemList = document.getElementById("item-list");
const itemClear = document.getElementById("clear");

function clearItem(e) {
  while (itemList.firstChild) {
    itemList.removeChild(firstChild);
  }
}

function deleteItem(e) {
  if (e.target.parentElement.classList.contains("remove-item")) {
    e.target.parentElement.parentElement.remove();
  }
}

function addItem(e) {
  e.preventDefault();
  const newItem = itemInput.value;

  if (newItem == "") {
    alert("Please add an item");
    return;
  }

  const li = createElement("li");
  li.appendChild(document.createTextNode(newItem));

  const button = createButton("remove-item btn-link text-red");
  li.appendChild(button);

  itemList.appendChild(li);

  itemInput = "";
}

function createButton(classes) {
  const button = document.createElement("button");
  button.className = classes;
  const icon = createIcon("fa-solid fa-xmark");
  button.appendChild(icon);
  return button;
}

function createIcon(classes) {
  const icon = document.createElement("i");
  icon.className = classes;
  return icon;
}

itemForm.addEventListener("submit", addItem);
itemList.addEventListener("click", deleteItem);
itemClear.addEventListener("click", clearItem);
