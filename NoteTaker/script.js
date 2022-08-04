"use strict";
// Getting text from text area.
const note = document.getElementById("note");
// Array for storing the notes.
const notes = [];
const addBtn = document.getElementById("addBtn");
// Part of HTML where the card will be placed.
const cardPlacement = document.getElementById("cardPlacement");

const modal = document.getElementById("viewDetailsModal");

addBtn.addEventListener("click", addNote);

function addNote() {
  if (note.value.length <= 0) return; // Checking if note is not empty.
  notes.push(note.value); // Adding card to array.
  let notePublished = note.value;

  notePublished =
    notePublished.length > 100
      ? (notePublished = notePublished.slice(0, 80) + "...")
      : notePublished;
  // Clearing text area.
  note.value = "";

  createCard(notes.length, notePublished);

  // Creating card with note and adding a data id.
  function createCard(id, note) {
    let HTML = `
    <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
        <p class="card-text">
          ${note}
        </p>
        <input class="btn btn-primary" type="button" value="View details" data-id=${id} onclick="viewDetails(this)" data-bs-toggle="modal" data-bs-target="#viewDetailsModal">
         
      </div>
    </div>
  </div>
    `;
    cardPlacement.insertAdjacentHTML("afterbegin", HTML);
  }
}
function viewDetails(card) {
  let note = notes[card.dataset.id - 1]; //Getting data id.
  console.log(card.dataset.id);
  const body = document.getElementsByClassName("modal-body");
  console.log(body[0].textContent);
  body[0].textContent = note;
}
