import { feedsData } from "./feeds-data.js";
import { updateComment } from "./updateComment.js";

const defaultUpvote = 0;

export function saveCommentLocal(inputComment, saveButton, itemID) {
  saveButton.addEventListener("click", () => {
    if (!inputComment.value) {
      alert("input is empty");
    } else {
      let user = sessionStorage.getItem("user")
        ? JSON.parse(sessionStorage.getItem("user"))
        : [];

      let userName = user.user;

      const index = userName.indexOf("@");
      const firstName = userName.slice(0, index);
      const name = firstName.charAt(0).toUpperCase();
      const capitalizedName = name + firstName.slice(1);

      const feed = feedsData.find((data) => data.id === itemID);

      if (feed) {
        feed.comment.unshift({
          logo: name,
          topic: capitalizedName,
          body: inputComment.value,
          upvote: defaultUpvote,
        });
      }
      const currentCommentCount = document.getElementById(
        `comment-count-${itemID}`
      );
      currentCommentCount.textContent = feed.comment.length;

      const feedItem = document.getElementById(`feed-item-${itemID}`);

      const newCommentSection = document.getElementById(
        `comment-section${itemID}`
      );

      feedItem.appendChild(newCommentSection);
      updateComment(newCommentSection, name, capitalizedName, inputComment);
    }
  });
}
