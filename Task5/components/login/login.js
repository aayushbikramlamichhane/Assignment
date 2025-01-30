
import {
  inputEmail,
  inputPassword,
  signInButton,
  emailRegex,
} from "/assests/js/variable.js";

import { loaderDisplay, loaderHide } from "../../assests/js/loader.js";

import {
  displayToast,
  hideToast,
  crossHit,
} from "../../assests/js/toast.js";


const container1 = document.querySelector(".container1");
const containerMain = document.querySelector(".main");;

signInButton.addEventListener("click", () => {
  const emailInput = inputEmail.value.trim();
  const passwordInput = inputPassword.value.trim();

  if (
    !emailInput ||
    !emailRegex.test(emailInput) ||
    !passwordInput ||
    passwordInput.length < 6
  ) {
    loaderDisplay();
    container1.style.display = "none";
    containerMain.style.display = "none";
    setTimeout(() => {
      container1.style.display = "block";
      containerMain.style.display = "block";
      loaderHide();
      displayToast();
      crossHit();
      setTimeout(() => {
        window.location.href = `/components/login/login.html`;
        // hideToast();
      }, 3000);
    }, 2000);
  } else {
    // newUser();
    loaderDisplay();
    container1.style.display = "none";
    containerMain.style.display = "none";
    sessionStorage.setItem("user", JSON.stringify({ user: inputEmail.value }));
    console.log("hitted");
    setTimeout(() => {
      window.location.href = `/components/home/home.html`;
    }, 2000);
  }
});
