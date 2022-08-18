"use strict";

// Select element that I need: Card > head, body; expand, collapse button;
const card = document.querySelector(".card");
const template = document.querySelector("#template");
const addBtn = document.querySelector("#addBtn");
// When click on expand show card body, change expand to collapse.
// When clicking on collapse hide card body.

document.addEventListener("click", (e) => {
  if (!e.target.matches(".expand-button")) return;

  const cardBody = e.target.closest(".card").querySelector(".card-body");
  cardBody.classList.toggle("show");
  const textButton = e.target.textContent == "Expand" ? "Collapse" : "Expand";
  e.target.textContent = textButton;
});

// Adding additional block dynamically.

addBtn.addEventListener("click", (e) => {
  const templateClone = template.content.cloneNode(true);
  document.body.append(templateClone);
});
