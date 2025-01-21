import users from "../users.js";
import { storedUsers } from "../Localstorage/localstorage.js";
// import { displayUsers } from "../display.js";
import { id, name, address, contact, tableBody } from "../Variable/variable.js";
import { resetInputFields } from "../Reset/resetInputFields.js";


export function newUser() {
    console.log(id.value);

    users.push({
        id: id.value,
        name: name.value,
        address: address.value,
        contactNumber: contact.value
    })
    console.log(users);
    // storedUsers = [...users];
    storedUsers.push(users);
    // localStorage.clear()
    console.log(storedUsers);
    localStorage.setItem("storedUsers", JSON.stringify(storedUsers));
    // tableBody.innerHTML = "";
    refreshUsers();
    resetInputFields();
}
