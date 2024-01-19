// **** SELECT ALL ITEMS ****
const form = document.querySelector(".grocery-form");
const input = document.querySelector("#input");
const container = document.querySelector(".groceryContainer");
const list = document.querySelector(".groceryLists");
const editBtn = document.querySelector(".edit");
const deleteBtn = document.querySelector(".delete");
const clearbtn = document.querySelector(".clearBtn");
const alert = document.querySelector(".alert");

// edit option
let editElement;
let editFlag = false;
let editId = "";

// **** EVENT LISTENERS ****
form.addEventListener("submit", addItems);

// **** FUNCTIONS ****
function addItems(e) {
  e.preventDefault();
  const value = input.value;

  if (value && editFlag) {
    console.log("add item to the list");
  } else if (value && !editFlag) {
    console.log("editing item ");
  } else {
    displayAlert("please enter a value", "danger");
  }
}

function displayAlert(text, action) {
  alert.textContent = text;
  alert.classList.add(`alert-${action}`);
  setTimeout(function () {
    alert.textContent = "";
    alert.classList.remove(`alert-${action}`);
  }, 1500);
}

//**** LOCAL STORAGE****

// **** SETUP ITEMS *****
