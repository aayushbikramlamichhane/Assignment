
import { displayUsers } from "./display.js";

import { localUser } from "./Localstorage/localstorage.js";

export function deleteUser(index) {

  const tableBody = document.querySelector("tbody");
  
    localUser.splice(index, 1);
    
    localStorage.setItem("localUser", JSON.stringify(localUser));
    tableBody.innerHTML = "";
    
    displayUsers();
}




