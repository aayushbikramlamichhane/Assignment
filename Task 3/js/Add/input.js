
import { newUser } from "./adding.js";


const addButton = document.querySelector('.add')

addButton.addEventListener('click', () => {
    newUser();
})