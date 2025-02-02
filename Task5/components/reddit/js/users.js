import { loaderDisplay, loaderHide } from "../../../assests/js/loader.js";

import { displayToast, hideToast, crossHit } from "../../../assests/js/toast.js";

const userBox = document.querySelector(".user-box");
const userFirstLetter = document.querySelector(".user-first");
const homeContainer = document.querySelector(".home");
const redditContainer = document.querySelector(".container");
let user = sessionStorage.getItem("user")
  ? JSON.parse(sessionStorage.getItem("user"))
  : [];

let userName = user.user;

const index = userName.indexOf("@");
const firstName = userName.slice(0, index);
const capitalizeName = firstName.charAt(0).toUpperCase() + firstName.slice(1);
const name = firstName.charAt(0).toUpperCase();
userBox.innerHTML = `${capitalizeName}`;
userFirstLetter.innerHTML = `${name}`;

homeContainer.addEventListener("click", () => {
  console.log("home");
  loaderDisplay();
  redditContainer.style.display = "none";
  setTimeout(() => {
    loaderHide();
    const message = `Welcome to Home, ${capitalizeName}`
    displayToast("SUCCESS!", message, true);
    setTimeout(() => {
      window.location.href = "../../../components/home/home.html"
    },2000)
  },2000)
});
