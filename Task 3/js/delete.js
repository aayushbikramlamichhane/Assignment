import users from "./users.js";
import { displayUsers } from "./display.js";


import { storedUsers } from './Localstorage/localstorage.js'

export function deleteUser(index) {

  const tableBody = document.querySelector("tbody");
  
    users.splice(index, 1);
    
    localStorage.setItem("storedUsers", JSON.stringify(users));
    tableBody.innerHTML = "";
    
    displayUsers();
}




