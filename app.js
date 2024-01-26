// **** SELECT ALL ITEMS ****
const form = document.querySelector(".grocery-form");
const input = document.querySelector("#input");
const container = document.querySelector(".groceryContainer");
const list = document.querySelector(".groceryLists");
const submitBtn = document.querySelector(".submit");
const editBtn = document.querySelector(".edit");
const deleteBtn = document.querySelector(".delete");
const clearBtn = document.querySelector(".clearBtn");
const alert = document.querySelector(".alert");

// edit option
let editElement;
let editFlag = false;
let editId = "";

// **** EVENT LISTENERS ****
form.addEventListener("submit", addItems);
clearBtn.addEventListener("click", clearItems);

// **** FUNCTIONS ****
function addItems(e) {
  e.preventDefault();
  const value = input.value;

  // the is ID is just make a unique identifier
  const id = new Date().getTime().toString;

  if (value && !editFlag) {
    const element = document.createElement("article");
    element.classList.add("groceryItem");
    const attr = document.createAttribute("data-id");
    attr.value = id;
    element.setAttributeNode(attr);

    element.innerHTML = `
     <p class="title">${value}</p>
      <div class="btnContainer">
        <button type="button" class="edit">
          <i class="fas fa-edit">e</i>
        </button>
        <button type="button" class="delete">
          <i class="fas fa-trash">d</i>
        </button>
      </div>`;
    list.appendChild(element);
    const deleteBtn = element.querySelector(".delete");
    const editBtn = element.querySelector(".edit");

    deleteBtn.addEventListener("click", deleteItem);
    editBtn.addEventListener("click", editItem);

    //display alert
    displayAlert("item added successfully", "success");

    //show container
    container.classList.add("showContainer");

    // save to local storage
    addToLocalStorage(id, value);

    // set back to default
    setBackToDefault();
  } else if (value && editFlag) {
    editElement = value;
    displayAlert("value changed", "success");
    setBackToDefault();
  } else {
    displayAlert("please enter a value", "danger");
  }
}

// delete item
function deleteItem(e) {
  const element = e.currentTarget.parentNode.parentNode;
  list.removeChild(element);
  if (list.children.length === 0) {
    container.classList.remove("showContainer");
  }
  displayAlert("item deleted", "danger");
  setBackToDefault();
}
function editItem(e) {
  const element = e.currentTarget.parentElement.parentElement;
  const editElement = e.currentTarget.parentElement.previousElementSibling;

  input.value = editElement.innerHTML;
  const editId = element.dataset.id;
  editFlag = true;
  submitBtn.textContent = "Edit";
  element.innerHTML = input.value;
  // console.log(value.innerHTML);
  // input.value = element
}
//clear all items
function clearItems() {
  const items = document.querySelectorAll(".groceryItem");
  if (items.length > 0) {
    items.forEach(function (item) {
      list.removeChild(item);
      console.log(item);
      container.classList.remove("showContainer");
      displayAlert("empty lists", "danger");
    });
  }
  // console.log("close");
}
//display alert
function displayAlert(text, action) {
  alert.textContent = text;
  alert.classList.add(`alert-${action}`);
  //to remove the alert
  setTimeout(function () {
    alert.textContent = "";
    alert.classList.remove(`alert-${action}`);
  }, 1500);
}
//set back to default
function setBackToDefault() {
  input.value = "";
  editFlag = false;
  editId = "";
  submitBtn.textContent = "submit";
}
//**** LOCAL STORAGE****
function addToLocalStorage(id, value) {
  console.log("save to local storage");
}
// **** SETUP ITEMS *****
