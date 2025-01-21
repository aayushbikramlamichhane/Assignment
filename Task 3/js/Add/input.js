
import { newUser } from "./adding.js";
import users from "../users.js";
import { displayUsers } from "../display.js";
import { tableBody } from "../Variable/variable.js";
import { resetInputFields } from "../Reset/resetInputFields.js";

const addButton = document.querySelector('.add')

addButton.addEventListener('click', () => {
    newUser();
    console.log("added");
    // tableBody.innerHTML = "";
    displayUsers();
    resetInputFields();
})