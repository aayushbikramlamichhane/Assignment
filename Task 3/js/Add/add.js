import users from "../users.js";
import { resetInputFields } from "../Reset/resetInputFields.js";
import { displayUsers } from "../display.js";

export function addNewUser() {
    const id = document.querySelector(".inputId");
    const name = document.querySelector(".inputName");
    const address = document.querySelector(".inputAddress");
    const contact = document.querySelector(".inputContact");
    const tableBody = document.querySelector("tbody");

    if (id.value == ""
        && name.value == ""
        && address.value == ""
        && contact.value == ""
    ) {
        // console.log("Enter all fields");
        alert("Enter all fields");
    } else {
        users.push({
            id: id.value,
            name: name.value,
            address: address.value,
            contactNumber: contact.value,
        });
        tableBody.innerHTML = "";
        displayUsers();
        resetInputFields();
    }
}
