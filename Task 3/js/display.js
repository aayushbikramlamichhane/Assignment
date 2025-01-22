import { localUser } from "./Localstorage/localstorage.js";
import { deleteUser } from "./delete.js";
import { editUser } from "./edit.js";
import { tableBody } from "./Variable/variable.js";


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

      const username = document.createElement("td");
      username.textContent = user.name;
      row.appendChild(username);

      const address = document.createElement("td");
      address.textContent = user.address;
      row.appendChild(address);

      const contactNumber = document.createElement("td");
      contactNumber.textContent = user.contactNumber;
      row.appendChild(contactNumber);

      const editButton = document.createElement("button");
      editButton.textContent = "Edit";
      editButton.addEventListener("click", () => {
        editUser(index);
      });

      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete";
      deleteButton.addEventListener("click", () => {
        deleteUser(index);
      });

      row.appendChild(editButton);
      row.appendChild(deleteButton);

      tableBody.appendChild(row);
    });
  }
}
