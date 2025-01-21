import { displayUsers } from './display.js';
import { resetBody } from './Reset/reset.js';


// import { sortUsersAscending } from './ascend.js';
// import { sortUserDescending } from './desend.js';

displayUsers();

// const ascendButton = document.querySelector(".ascending");
// ascendButton.addEventListener("click", sortUsersAscending);


// const descendButton = document.querySelector('.descending');
// descendButton.addEventListener("click", sortUserDescending)


const reset = document.querySelector('.reset');
reset.addEventListener('click', () => {
    resetBody();
})




