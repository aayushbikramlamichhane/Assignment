import { localUser } from "./Localstorage/localstorage.js";
import { deleteUser } from "./delete.js";
import { tableBody } from "./Variable/variable.js";
import { editUsers } from './Edit/edit.js'

export function displayUsers() {
  if (!tableBody) {
    return;
  }
  
  if (localUser.length === 0) {
    tableBody.innerHTML = "Table is Empty";
    tableBody.style.fontStyle = "Arial";
    tableBody.style.fontSize = "25px";
    tableBody.style.margin = "20px";
  } else {
    localUser.forEach((user, index) => {
      const row = document.createElement("tr");

      const tableId = document.createElement("td");
      tableId.textContent = user.id;
      row.appendChild(tableId);

      const name = document.createElement("td");
      name.textContent = user.name;
      row.appendChild(name);

      const address = document.createElement("td");
      address.textContent = user.address;
      row.appendChild(address);

      const contact = document.createElement("td");
      contact.textContent = user.contact;
      row.appendChild(contact);

      const editButton = document.createElement("button");
      editButton.textContent = "Edit";
      editButton.className = "editButton";

      editButton.addEventListener("click", () => {
        window.location.href = `save.html?index=${index}`;
      });

      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete";
      deleteButton.className = "delete";
      deleteButton.addEventListener("click", () => {
        // console.log(index);
        deleteUser(index);
      });

      row.appendChild(editButton);
      row.appendChild(deleteButton);

      tableBody.appendChild(row);
    });
  }
}


