const mainToast = document.querySelector(".main-toast");
const iconCross = document.getElementById("icon-cross");
const toastField = document.querySelector(".toast-info");
const span = document.createElement("span"); 
const span1 = document.createElement("span")
const iconDanger = document.getElementById("icon-danger");
/**
 * message should be string
 * @param {message: string } 
 */


export function displayToast(title, message,valid) {
    mainToast.style.display = "flex";
    span1.innerHTML = title;
    span1.className = "toast-header";
    span.className = "toast-message";
    if (valid) {
        span1.style.color = "green";
        iconDanger.removeAttribute("class");
        iconDanger.classList.add("fa-solid", "fa-check");
        iconDanger.style.color = "green"
    }
    span.innerHTML = message;
    toastField.append(span1);
    toastField.appendChild(span);
}

export function hideToast() {
    mainToast.style.display = "none";
}

export function crossHit() {
    iconCross.addEventListener("click", () => {
        window.location.href = "../../components/login/login.html";
    })
}