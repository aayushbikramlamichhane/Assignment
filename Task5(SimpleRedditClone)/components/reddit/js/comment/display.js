import { storedComment } from "./storage.js";

const commentStore = document.querySelector(".comment-store");

export function displayComment() {
  const localStore = document.querySelector(".local-store");
  if (typeof localStore != "undefined" && localStore != null) {
    console.log(localStore);
    localStore.remove();
  }

  const newLocalStore = document.createElement("div");
  newLocalStore.className = "local-store";
  commentStore.appendChild(newLocalStore);

  let user = sessionStorage.getItem("user")
    ? JSON.parse(sessionStorage.getItem("user"))
    : [];

  let userName = user.user;

  const index = userName.indexOf("@");
  const firstName = userName.slice(0, index);

  const name = firstName.charAt(0).toUpperCase();

  storedComment.forEach((comment) => {
    let commentBox = document.createElement("div");
    commentBox.className = "comment-box";
    newLocalStore.appendChild(commentBox);


    let commitHeader = document.createElement("div");
    commitHeader.className = "comment-header";
    commentBox.appendChild(commitHeader);


    let commitSpan = document.createElement("span");
    commitSpan.className = "comment-span";
    commitSpan.innerHTML = `${name}`;
    commitHeader.appendChild(commitSpan);


    let commitTitle = document.createElement("span");
    commitTitle.className = "comment-title";
    commitTitle.innerHTML = `r/${firstName}`;
    commitHeader.appendChild(commitTitle);


    let commentInfo = document.createElement("span");
    commentInfo.className = "comment-info";


    commentInfo.textContent = comment.comment;
    commentBox.appendChild(commentInfo);
  });
}
