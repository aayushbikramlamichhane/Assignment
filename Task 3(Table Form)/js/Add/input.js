
import { newUser } from "./adding.js";
import { cancelUser } from "../Edit/cancel.js"

const addButton = document.querySelector('.add')

addButton.addEventListener('click', () => {
    newUser();
})

cancelUser();