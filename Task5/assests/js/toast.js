const mainToast = document.querySelector(".main-toast");
const iconCross = document.getElementById("icon-cross");

export function displayToast() {
    mainToast.style.display = "flex";
}

export function hideToast() {
    mainToast.style.display = "hide";
}

export function crossHit() {
    iconCross.addEventListener("click", () => {
        window.location.href = "../../components/login/login.html"
    })
}