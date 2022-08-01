"use strict";

const nameExpense = document.getElementById("nameInput");
const date = document.getElementById("dateInput");
const amount = document.getElementById("amountInput");
const expenseBtn = document.getElementById("expenseBtn");
const tableExpense = document.getElementById("tableExpense");

expenseBtn.onclick = addExpense2;

function addExpense() {
  console.log("enterd");
  let tr = document.createElement("tr");
  let td = document.createElement("td");
  let td2 = document.createElement("td");
  let td3 = document.createElement("td");
  let td4 = document.createElement("td");
  let removeBtn = document.createElement("input");

  td.textContent = nameExpense.value;
  td2.textContent = date.value;
  td3.textContent = amount.value;

  removeBtn.type = "button";
  removeBtn.value = "X";
  removeBtn.onclick = function (event) {
    event.target.parentNode.parentNode.remove();
  };
  td4.appendChild(removeBtn);
  tr.appendChild(td);
  tr.appendChild(td2);
  tr.appendChild(td3);
  tr.appendChild(td4);
  tableExpense.appendChild(tr);
  clearInputs();
}

/// Better way to my view.
// https://stackoverflow.com/questions/18333427/how-to-insert-a-row-in-an-html-table-body-in-javascript

function addExpense2() {
  let HTML = `<tr>
                    <td>${nameExpense.value}</td> 
                    <td>${date.value}</td> 
                    <td>$ ${amount.value}</td> 
                    <td><input type="button" value="X" onclick="removeExpense(this)"/></td> 
                </tr>`;
  let tbody = tableExpense.getElementsByTagName("tbody")[0];
  tbody.insertAdjacentHTML("beforebegin", HTML);
  clearInputs();
}

function removeExpense(item) {
  item.parentNode.parentNode.remove();
}

function clearInputs() {
  nameExpense.value = "";
  date.value = "";
  amount.value = "";
}
