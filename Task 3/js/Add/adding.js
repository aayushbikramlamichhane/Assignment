import { localUser } from "../Localstorage/localstorage.js";
import { displayUsers } from "../display.js";
import { id, name, address, contact, tableBody } from "../Variable/variable.js";
import { resetInputFields } from "../Reset/resetInputFields.js";



export function newUser() {
    if (!id.value || !name.value || !address.value || !contact.value) {
        alert("All fields are required.");
        return;
    }

    localUser.push({
        id: id.value,
        name: name.value,
        address: address.value,
        contact: contact.value,
    });

    localStorage.setItem("localUser", JSON.stringify(localUser));
    displayUsers();
    resetInputFields();
    window.location.href = "index.html";
}