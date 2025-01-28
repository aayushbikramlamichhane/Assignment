const inputEmail = document.querySelector(".input-email")
const inputPassword = document.querySelector(".input-password");
const signInButton = document.querySelector(".signin");


const passwordError = document.querySelector(".pass-error");
const emailError = document.querySelector(".email-error");

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const strongPasswordRegex =/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

signInButton.addEventListener("click", (event) => {
    const emailInput = inputEmail.value.trim();
    const passwordInput = inputPassword.value.trim();
    // event.preventDefault();
    let isValid = true;
    
    if (!emailInput || !emailRegex.test(emailInput)) {
        emailError.innerHTML = "Enter Valid Email";
        isValid = false;
    } else {
        emailError.innerHTML = ""; 
    }

    if (!passwordInput || !strongPasswordRegex.test(passwordInput)) {
        passwordError.innerHTML = "Enter Valid Password";
        isValid = false;
    } else {
        passwordError.innerHTML = ""; 
    }

    if(isValid){
    window.location.href = "valid.html"}
});

inputEmail.addEventListener("input", (e) => {
    if (emailRegex.test(inputEmail.value)) {
        console.log(emailRegex.test(inputEmail.value));
        emailError.innerHTML = "";
    }
});


inputPassword.addEventListener("input", () => {
    if (strongPasswordRegex.test(inputPassword.value)) {
        passwordError.innerHTML = "";
    }
});