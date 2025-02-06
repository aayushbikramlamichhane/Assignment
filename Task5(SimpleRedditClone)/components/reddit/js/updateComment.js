import { handleCommentUp, handleCommentDown } from "./script.js";
import { createDiv, createI, createSpan } from "./element.js";

export function updateComment(newCommentSection, name, capitalizedName, inputComment) {
  const newCommentBody = createDiv();
  newCommentBody.className = "comment-body";
  newCommentSection.prepend(newCommentBody);

  const commentTopic = createDiv();
  commentTopic.className = "comment-topic";
  newCommentBody.appendChild(commentTopic);

  const spanLogo = createSpan();
  spanLogo.className = "span-logo";
  spanLogo.innerHTML = `${name}`;
  commentTopic.appendChild(spanLogo);

  const spanTitle = createSpan();
  spanTitle.className = "span-title";
  spanTitle.innerHTML = "r/" + `${capitalizedName}`;
  commentTopic.appendChild(spanTitle);

  const commentElement = createDiv();
  commentElement.className = "comment-element";
  newCommentBody.appendChild(commentElement);

  const bodyComment = createSpan();
  bodyComment.className = "body-comment";
  bodyComment.textContent = inputComment.value;
  commentElement.appendChild(bodyComment);

  const commentFooter = createDiv();
  commentFooter.className = "comment-footer";
  newCommentBody.appendChild(commentFooter);

  const commentArrow = createDiv();
  commentArrow.className = "comment-arrow";
  commentFooter.appendChild(commentArrow);

  const commentUp = createI();
  commentUp.classList.add("fa-solid", "fa-arrow-up", "comment-up");
  commentArrow.appendChild(commentUp);

  const commentSpan = createSpan();
  commentSpan.className = "comment-span";
  commentSpan.textContent = "0";
  commentArrow.appendChild(commentSpan);

  const commentDown = createI();
  commentDown.classList.add("fa-solid", "fa-arrow-down", "comment-down");
  commentArrow.appendChild(commentDown);

  inputComment.value = "";

  handleCommentUp(commentUp, commentDown, commentSpan, commentArrow);
  handleCommentDown(commentUp, commentDown, commentSpan, commentArrow);
}
