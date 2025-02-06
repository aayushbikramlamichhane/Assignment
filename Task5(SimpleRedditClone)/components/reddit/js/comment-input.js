import { createDiv, createButton } from "./element.js";
import { hideComment } from "./script.js";
import { saveCommentLocal } from "./save.js";

export function commentDisplayInput(commentContainer, itemID, commentCount) {
  const commentInput = createDiv();
  commentInput.className = "comment-input";
  commentContainer.appendChild(commentInput);

  const inputComment = document.createElement("input");
  inputComment.type = "text";
  inputComment.placeholder = "Enter a comment";
  inputComment.className = "input-comment";
  commentInput.appendChild(inputComment);

  const commentButtons = createDiv();
  commentButtons.className = "comment-buttons";
  commentInput.appendChild(commentButtons);

  const saveButton = createButton();
  saveButton.className = "save-button";
  saveButton.innerHTML = "Save";
  commentButtons.appendChild(saveButton);

  const cancelButton = createButton();
  cancelButton.className = "cancel-button";
  cancelButton.innerHTML = "Cancel";
  commentButtons.appendChild(cancelButton);

  hideComment(cancelButton, commentContainer);

  // const commentSectionContainer = createDiv();
  // commentSectionContainer.className = "comment-section";
  // commentContainer.appendChild(commentSectionContainer);

  saveCommentLocal(
    inputComment,
    saveButton,
    itemID,
    commentContainer,
    commentCount
  );

}
