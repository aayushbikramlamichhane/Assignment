import users from "../users.js";
import { displayUsers } from "../display.js";


export function sortUsersAscending() {
    
    users.sort((a, b) => a.name.localeCompare(b.name));
    // users.sort((a, b) => a.address.localeCompare(b.address));

    const tableBody = document.querySelector("tbody");
    tableBody.innerHTML = "";

    displayUsers();
}
