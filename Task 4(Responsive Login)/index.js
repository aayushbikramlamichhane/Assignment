const inputEmail = document.querySelector(".input-email")
const inputPassword = document.querySelector(".input-password");
const signInButton = document.querySelector(".signin");


const passwordError = document.querySelector(".pass-error");
const emailError = document.querySelector(".email-error");

signInButton.addEventListener("click", (event) => {
    // event.preventDefault();
    const emailInput = inputEmail.value.trim();
    const passwordInput = inputPassword.value.trim();
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const strongPasswordRegex =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    
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
