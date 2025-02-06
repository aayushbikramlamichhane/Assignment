import { feedsData } from "./feeds-data.js";
import { createDiv, createSpan, createI } from "./element.js";
import { handleArrowDown, handleArrowUp, displayComment } from "./script.js";

import { commentDisplayInput } from "./comment-input.js";
import { paintCommentSection } from "./paintCommentSection.js";
const mainFeeds = document.querySelector(".main-feeds");

feedsData.forEach((item) => {
  const itemID = item.id;
  const headline = createDiv();
  headline.className = "headline";
  headline.id = `feed-item-${item.id}`;
  mainFeeds.appendChild(headline);

  const topic = createDiv();
  topic.className = "topic";
  headline.appendChild(topic);

  const topicBody = createDiv();
  topicBody.className = "topic-body";
  topic.appendChild(topicBody);

  const spanBack = createSpan();
  spanBack.className = "span-back";
  spanBack.textContent = item.logo;
  topicBody.appendChild(spanBack);

  const topicContent = createSpan();
  topicContent.className = "topic-content";
  topicContent.textContent = item.topicContent;
  topicBody.appendChild(topicContent);

  const content = createDiv();
  content.className = "content";
  headline.appendChild(content);

  const contentTitle = createSpan();
  contentTitle.className = "content-title";
  contentTitle.textContent = item.heading;
  content.appendChild(contentTitle);

  const contentImg = document.createElement("img");
  contentImg.className = "content-img";
  contentImg.src = item.img;
  content.appendChild(contentImg);

  const footer = createDiv();
  footer.className = "footer";
  headline.appendChild(footer);

  const footerContent = createDiv();
  footerContent.className = "footer-content";
  footerContent.id = "footer-content";
  footer.appendChild(footerContent);

  const arrowUp = createI();
  arrowUp.classList.add("fa-solid", "fa-arrow-up", "arrow-up");
  footerContent.appendChild(arrowUp);

  const arrowSpan = createSpan();
  arrowSpan.className = "arrow-span";
  arrowSpan.textContent = item.like;
  footerContent.appendChild(arrowSpan);

  const arrowDown = createI();
  arrowDown.classList.add("fa-solid", "fa-arrow-down", "arrow-down");
  footerContent.appendChild(arrowDown);

  const commentContent = createDiv();
  commentContent.className = "comment-content";
  commentContent.id = `comment-content-${itemID}`;
  footer.appendChild(commentContent);

  const commentIcon = createI();
  commentIcon.classList.add("fa-solid", "fa-comment");
  commentContent.appendChild(commentIcon);

  const commentCount = createSpan();
  commentCount.className = "comment-count";
  commentCount.id = `comment-count-${itemID}`;
  commentCount.textContent = item.commentCount;
  commentContent.appendChild(commentCount);

  handleArrowDown(arrowUp, arrowDown, arrowSpan, footerContent);
  handleArrowUp(arrowUp, arrowDown, arrowSpan, footerContent);

  const commentContainer = createDiv();
  commentContainer.className = "comment-container";
  headline.appendChild(commentContainer);

  displayComment(commentContent, commentContainer);

  const itemComment = item.comment;
  commentDisplayInput(commentContainer, itemID, commentContent);

  const commentSectionContainer = createDiv();
  commentSectionContainer.className = "comment-section";
  commentSectionContainer.id = `comment-section${itemID}`;
  commentContainer.appendChild(commentSectionContainer);


  paintCommentSection(commentSectionContainer, itemComment);
});
