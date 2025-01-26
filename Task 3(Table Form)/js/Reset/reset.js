import { tableBody } from "../Variable/variable.js";
import { localUser } from "../Localstorage/localstorage.js";
export function resetBody() {
    tableBody.innerHTML = "Table Is Empty";
    tableBody.style.fontStyle = "Arial";
    tableBody.style.fontSize = "25px";
    localStorage.clear()
}