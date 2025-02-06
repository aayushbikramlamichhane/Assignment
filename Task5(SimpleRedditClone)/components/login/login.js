import { users } from "../../assests/js/users.js";
import {
  inputEmail,
  inputPassword,
  signInButton,
  emailRegex,
  emailError,
  passwordError,
} from "/assests/js/variable.js";

import { loaderDisplay, loaderHide } from "../../assests/js/loader.js";

import { displayToast, hideToast, crossHit } from "../../assests/js/toast.js";

const eyeIcon = document.getElementById("eye-icon");
const container1 = getQuerySelection(".container1");
const containerMain = document.querySelector(".main");

function getQuerySelection(key) {
  return document.querySelector(key);
}

signInButton.addEventListener("click", () => {
  let emailInput = inputEmail.value.trim();
  let passwordInput = inputPassword.value.trim();

  let isValid = true;
  function setInvalidToast(message) {
    isValid = false;

    displayToast("ERROR!", message, false);
    crossHit();
    setTimeout(() => {
      hideToast();
    }, 3000);
  }

  if (!emailInput || !emailRegex.test(emailInput)) {
    if (!emailInput) {
      emailError.innerHTML = "Email cannot be empty";
    } else {
      emailError.innerHTML = "Invalid Email";
    }
    const errorMessage = "Enter Valid Email";
    setInvalidToast(errorMessage);
  } else {
    emailError.innerHTML = "";
  }

  if (!passwordInput || passwordInput.length < 6) {
    if (!passwordInput) {
      passwordError.innerHTML = "Password cannot be empty";
    } else {
      passwordError.innerHTML = "Invalid Password";
    }
    const errorMessage = "Invalid Email or Password";

    setInvalidToast(errorMessage);
  } else {
    passwordError.innerHTML = "";
  }
  if (isValid) {
    const authorizedUser = users.find(
      (item) => item.email == emailInput && item.password == passwordInput
    );
    if (authorizedUser) {
      loaderDisplay();
      container1.style.display = "none";
      containerMain.style.display = "none";
      sessionStorage.setItem(
        "user",
        JSON.stringify({ user: inputEmail.value })
      );
      crossHit();
      setTimeout(() => {
        let user = sessionStorage.getItem("user")
          ? JSON.parse(sessionStorage.getItem("user"))
          : [];

        let userName = user.user;

        const index = userName.indexOf("@");
        const firstName = userName.slice(0, index);
        const capitalName =
          firstName.charAt(0).toUpperCase() + firstName.slice(1);
        console.log(capitalName);

        loaderHide();
        const message = `Welcome, ${capitalName}`;
        displayToast("SUCCESS!", message, true);
        // console.log("Hello");

        setTimeout(() => {
          window.location = "/components/reddit/reddit.html";
        }, 1000);
      }, 2000);
    } else {
      displayToast("ERROR!", "No User Found", false);

      // console.log(emailInput, passwordInput);
      setTimeout(() => {
        hideToast();
        crossHit();
      }, 3000);
    }
  }
});

inputEmail.addEventListener("input", (e) => {
  if (emailRegex.test(inputEmail.value)) {
    console.log(emailRegex.test(inputEmail.value));
    emailError.innerHTML = "";
  }
});

inputPassword.addEventListener("input", () => {
  if (inputPassword.value.length > 6) {
    passwordError.innerHTML = "";
  }
});

eyeIcon.addEventListener("click", () => {
  if (inputPassword.type === "password") {
    inputPassword.setAttribute("type", "text");
    eyeIcon.classList.remove("fa-eye");
    eyeIcon.classList.add("fa-eye-slash");
  } else {
    inputPassword.setAttribute("type", "password");
    eyeIcon.classList.remove("fa-eye-slash");
    eyeIcon.classList.add("fa-eye");
  }
});
