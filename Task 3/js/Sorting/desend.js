import users from "../users.js";
import { displayUsers } from "../display.js";

export function sortUserDescending() {
    users.sort((a, b) => b.name.localeCompare(a.name));

    const tableBody = document.querySelector("tbody");
    tableBody.innerHTML = "";

    displayUsers();
}