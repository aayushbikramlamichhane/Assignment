import { feedsData } from "./feeds-data.js";
import { createDiv, createSpan, createI } from "./element.js";
import { storedComment } from "./comment/storage.js";

const mainFeeds = document.querySelector(".main-feeds");

feedsData.forEach((item) => {
  const headline = createDiv();
  headline.className = "headline";
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
  arrowUp.classList.add("fa-solid", "fa-arrow-up","arrow-up");
  footerContent.appendChild(arrowUp);

  const arrowSpan = createSpan();
  arrowSpan.className = "arrow-span";
  arrowSpan.textContent = item.like;
  footerContent.appendChild(arrowSpan);

  const arrowDown = createI();
  arrowDown.classList.add("fa-solid", "fa-arrow-down","arrow-down");
  footerContent.appendChild(arrowDown);

  const commentContent = createDiv();
  commentContent.className = "comment-content";
  footer.appendChild(commentContent);

  const commentIcon = createI();
  commentIcon.classList.add("fa-solid", "fa-comment");
  commentContent.appendChild(commentIcon);

  const commentCount = createSpan();
  commentCount.className = "comment-count";
  commentCount.textContent = `${storedComment.length}`;
  commentContent.appendChild(commentCount);

  arrowDown.addEventListener("click", () => {
    let count = parseInt(arrowSpan.textContent);
    switch (true) {
      case arrowDown.style.color == "white":
        arrowDown.style.color = "black";
        arrowSpan.textContent = count + 1;
        arrowSpan.style.color = "black";
        footerContent.style.background = "rgb(228, 234, 238)";
        break;
      case arrowUp.style.color == "white":
        arrowUp.style.color = "black";
        arrowDown.style.color = "white";
        footerContent.style.background = "blue";
        arrowSpan.textContent = count - 2;
        break;
      default:
        arrowDown.style.color = "white";
        arrowSpan.textContent = count - 1;
        arrowSpan.style.color = "white";
        footerContent.style.background = "blue";
        break;
    }
  });

  arrowUp.addEventListener("click", () => {
    let count = parseInt(arrowSpan.textContent);
    // console.log(count);
    switch (true) {
      case arrowUp.style.color == "white":
        arrowUp.style.color = "black";
        arrowSpan.textContent = count - 1;
        arrowSpan.style.color = "black";
        footerContent.style.background = "rgb(228, 234, 238)";
        break;

      case arrowDown.style.color == "white":
        arrowDown.style.color = "black";
        arrowUp.style.color = "white";
        arrowSpan.textContent = count + 2;
        footerContent.style.background = "red";
        break;

      default:
        arrowUp.style.color = "white";
        arrowSpan.textContent = count + 1;
        arrowSpan.style.color = "white";
        footerContent.style.background = "red";
        break;
    }
  });

  commentContent.addEventListener("click", () => {
    window.location.href = "../../../components/reddit/comment.html";
  });

});
