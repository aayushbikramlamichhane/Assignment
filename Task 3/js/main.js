import { displayUsers } from './display.js';
import { resetBody } from './Reset/reset.js';

displayUsers();

const reset = document.querySelector('.reset');
reset.addEventListener('click', () => {
    resetBody();
})

