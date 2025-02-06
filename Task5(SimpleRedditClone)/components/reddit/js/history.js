const clear = document.querySelector(".clear");
const historyPost = document.querySelector(".history-post");

clear.addEventListener("click", () => {
    historyPost.style.display = "none";
});