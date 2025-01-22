import { displayUsers } from './display.js';
import { resetBody } from './Reset/reset.js';

displayUsers();

const reset = document.querySelector('.reset');
reset.addEventListener('click', () => {
    resetBody();
})

const addUser = document.querySelector(".add-users");
addUser.addEventListener("click", () => {
    window.location.href = "../html/input.html"
})