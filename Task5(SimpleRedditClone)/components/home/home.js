const inputEmail = document.querySelector(".input-email");

let user = sessionStorage.getItem("user")
  ? JSON.parse(sessionStorage.getItem("user"))
  : [];

console.log(user.user);
let userName = user.user;
console.log(userName);

const index = userName.indexOf("@");
const firstName = userName.slice(0, index);
const capitalizeName = firstName.charAt(0).toUpperCase() + firstName.slice(1);

const homeContainer = document.querySelector(".home-container");

const currentHour = new Date().getHours();
const h2 = document.createElement("h2");
const span = document.createElement("span");

let timeOfDay;
let message;
switch (true) {
  case currentHour >= 0 && currentHour < 12:
    timeOfDay = "Good Morning";
    message = ` May your day be as bright as you are, ${capitalizeName}`;
    break;
  case currentHour >= 12 && currentHour < 17:
    timeOfDay = "Good Afternoon";
    message = `Wish you a lovely afternoon and a beautiful day, ${capitalizeName}`;
    break;
  case currentHour >= 17 && currentHour < 21:
    timeOfDay = "Good Evening";
    message = `I hope your day was as amazing as you are, ${capitalizeName}`;
    break;
  default:
    timeOfDay = "Good Night";
    message = `Sleep tight, buddy! Tomorrow is another day filled with adventures and fun, ${capitalizeName}`;
}

h2.innerHTML = `${timeOfDay}, ${capitalizeName}`;
span.innerHTML = `${message}`;

homeContainer.appendChild(h2);
homeContainer.appendChild(span);
