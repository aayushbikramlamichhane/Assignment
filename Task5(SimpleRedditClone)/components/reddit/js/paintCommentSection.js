import { handleCommentUp, handleCommentDown } from "./script.js";
import { createDiv, createSpan, createI } from "./element.js";

export function paintCommentSection(commentSection, commentList) {
  commentList.forEach((comment) => {
    const commentBody = createDiv();
    commentBody.className = "comment-body";
    commentSection.appendChild(commentBody);

    const commentTopic = createDiv();
    commentTopic.className = "comment-topic";
    commentBody.appendChild(commentTopic);

    const spanLogo = createSpan();
    spanLogo.className = "span-logo";
    spanLogo.innerHTML = `${comment.logo}`;
    commentTopic.appendChild(spanLogo);

    const spanTitle = createSpan();
    spanTitle.className = "span-title";
    spanTitle.innerHTML = `r/${comment.topic}`;
    commentTopic.appendChild(spanTitle);

    const commentElement = createDiv();
    customElements.className = "comment-element";
    commentBody.appendChild(commentElement);

    const bodyComment = createSpan();
    bodyComment.className = "body-comment";
    bodyComment.textContent = `${comment.body}`;
    commentElement.appendChild(bodyComment);

    const commentFooter = createDiv();
    commentFooter.className = "comment-footer";
    commentBody.appendChild(commentFooter);

    // displayLocalComment(commentBody, commentContainer, commentSectionContainer);

    const commentArrow = createDiv();
    commentArrow.className = "comment-arrow";
    commentFooter.appendChild(commentArrow);

    const commentUp = createI();
    commentUp.classList.add("fa-solid", "fa-arrow-up", "comment-up");
    commentArrow.appendChild(commentUp);

    const commentSpan = createSpan();
    commentSpan.className = "comment-span";
    commentSpan.textContent = `${comment.upvote}`;
    commentArrow.appendChild(commentSpan);

    const commentDown = createI();
    commentDown.classList.add("fa-solid", "fa-arrow-down", "comment-down");
    commentArrow.appendChild(commentDown);

    // saveCommentLocal(commentBody);

    handleCommentUp(commentUp, commentDown, commentSpan, commentArrow);
    handleCommentDown(commentUp, commentDown, commentSpan, commentArrow);
  });
}
