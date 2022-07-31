"use strict";

const submitBtn = document.getElementById("addBtn");
const clearBtn = document.getElementById("clearBtn");
const input = document.getElementById("item");

submitBtn.addEventListener("click", addToList);

const itemsList = document.querySelector("#itemsList");
const completedList = document.getElementById("completedList");

function addToList() {
  // Getting value from input text box.
  let item = input.value + " ";
  input.value = "";
  // Creatig list item element.
  const li = document.createElement("li");
  li.textContent = item;
  // Creating remove "x" button.
  const removeBtn = document.createElement("input");
  removeBtn.type = "button";
  removeBtn.dataset.text = "test";
  removeBtn.value = "X";
  removeBtn.onclick = function () {
    let parent = this.parentNode;
    parent.remove();
  };
  li.appendChild(removeBtn);
  // Creating the done button for a task.
  const doneBtn = document.createElement("input");
  doneBtn.type = "button";
  doneBtn.value = "Done";
  doneBtn.onclick = (event) => {
    let li = document.createElement("li");
    // Getting the parent of the element that was clicked.
    li.textContent = event.target.parentNode.textContent;
    completedList.appendChild(li);
    // Removing element from list.
    event.target.parentNode.remove();
  };
  li.appendChild(doneBtn);
  itemsList.appendChild(li);

  function removeItemFromList() {
    let parent = this.parentNode;
    parent.remove();
  }
}

clearBtn.addEventListener("click", function () {
  itemsList.remove();
});
