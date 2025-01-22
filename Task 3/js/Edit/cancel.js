
const cancelButton = document.querySelector(".cancelButton");

export function cancelUser() {
    cancelButton.addEventListener("click", () => {
        // console.log("Canceled");
        window.location.href = "../../html/index.html"
    });
}