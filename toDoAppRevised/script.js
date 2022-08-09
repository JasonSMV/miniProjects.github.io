"use strict";

const list = document.getElementById("list");
const input = document.querySelector("#item-input");
const form = document.querySelector("#new-item-form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  // Way with HTML text.

  //   const listItem = `<div class="list-item">${input.value}</div>`;
  //   list.insertAdjacentHTML("beforebegin", listItem);

  // Creating all element in JS.
  const itemToCreate = document.createElement("div");
  itemToCreate.innerText = input.value;
  itemToCreate.classList.add("list-item");

  list.appendChild(itemToCreate);

  input.value = "";

  itemToCreate.addEventListener("click", () => {
    // two way we can remove it:
    list.removeChild(itemToCreate);
    // or
    //itemToCreate.remove();
  });
});
