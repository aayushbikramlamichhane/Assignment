import users from "./users.js";
// import { users } from "./Localstorage/localstorage.js";
import { deleteUser } from "./delete.js";
import { editUser } from "./edit.js";
import { tableBody } from "./Variable/variable.js";

export function displayUsers() {
    if (users.length == 0) {
        tableBody.innerHTML = "Table is Empty";
        tableBody.style.fontStyle = "Arial";
        tableBody.style.fontSize = "25px";
        tableBody.style.margin = "20px";
        
    } else {
        users.forEach((user, index) => {
            const row = document.createElement("tr");

            const tableId = document.createElement("td");
            tableId.textContent = user.id;
            row.appendChild(tableId);
            // console.log(tableId);

            const username = document.createElement("td");
            username.textContent = user.name;
            row.appendChild(username);
            // console.log(username);

            const address = document.createElement("td");
            address.textContent = user.address;
            row.appendChild(address);
            // console.log(address);

            const contactNumber = document.createElement("td");
            contactNumber.textContent = user.contactNumber;
            row.appendChild(contactNumber);
            // console.log(contactNumber);

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
