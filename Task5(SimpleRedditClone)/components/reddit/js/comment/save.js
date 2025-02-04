import { storedComment } from "./storage.js";
import { displayComment } from "./display.js";

const saveComment = document.querySelector(".save-comment");
const inputComment = document.getElementById("comment-input");

saveComment.addEventListener("click", () => {
  if (!inputComment.value) {
    alert("empty");
  } else {
    storedComment.push({ comment: inputComment.value });
    localStorage.setItem(
      "storedComment",
      JSON.stringify(
        storedComment
      )
    );
    displayComment();
  }
});
