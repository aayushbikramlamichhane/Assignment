export function handleArrowDown(arrowUp, arrowDown, arrowSpan, footerContent) {
  arrowDown.addEventListener("click", () => {
    let count = parseInt(arrowSpan.textContent) || 0;

    switch (true) {
      case arrowDown.classList.contains("active"):
        arrowDown.classList.remove("active");
        arrowDown.style.color = "black";
        arrowSpan.textContent = count + 1;
        footerContent.style.background = "rgb(228, 234, 238)";
        break;

      case arrowUp.classList.contains("active"):
        arrowUp.classList.remove("active");
        arrowDown.classList.add("active");
        arrowUp.style.color = "black";
        arrowDown.style.color = "white";
        arrowSpan.textContent = count - 2;
        footerContent.style.background = "blue";
        break;

      default:
        arrowDown.classList.add("active");
        arrowDown.style.color = "white";
        arrowSpan.textContent = count - 1;
        footerContent.style.background = "blue";
        break;
    }
  });
}

export function handleArrowUp(arrowUp, arrowDown, arrowSpan, footerContent) {
  arrowUp.addEventListener("click", () => {
    let count = parseInt(arrowSpan.textContent) || 0;

    switch (true) {
      case arrowUp.classList.contains("active"):
        arrowUp.classList.remove("active");
        arrowUp.style.color = "black";
        arrowSpan.textContent = count - 1;
        footerContent.style.background = "rgb(228, 234, 238)";
        break;

      case arrowDown.classList.contains("active"):
        arrowDown.classList.remove("active");
        arrowUp.classList.add("active");
        arrowUp.style.color = "white";
        arrowDown.style.color = "black";
        arrowSpan.textContent = count + 2;
        footerContent.style.background = "red";
        break;

      default:
        arrowUp.classList.add("active");
        arrowUp.style.color = "white";
        arrowSpan.textContent = count + 1;
        footerContent.style.background = "red";
        break;
    }
  });
}

export function handleCommentDown(
  commentUp,
  commentDown,
  commentSpan,
  commentArrow
) {
  commentDown.addEventListener("click", () => {
    let count = parseInt(commentSpan.textContent) || 0;

    switch (true) {
      case commentDown.classList.contains("active"):
        commentDown.classList.remove("active");
        commentDown.style.color = "black";
        commentSpan.textContent = count + 1;
        commentArrow.style.background = "rgb(228, 234, 238)";
        break;

      case commentUp.classList.contains("active"):
        commentUp.classList.remove("active");
        commentDown.classList.add("active");
        commentUp.style.color = "black";
        commentDown.style.color = "white";
        commentSpan.textContent = count - 2;
        commentArrow.style.background = "blue";
        break;

      default:
        commentDown.classList.add("active");
        commentDown.style.color = "white";
        commentSpan.textContent = count - 1;
        commentArrow.style.background = "blue";
        break;
    }
  });
}

export function handleCommentUp(
  commentUp,
  commentDown,
  commentSpan,
  commentArrow
) {
  commentUp.addEventListener("click", () => {
    let count = parseInt(commentSpan.textContent) || 0;

    switch (true) {
      case commentUp.classList.contains("active"):
        commentUp.classList.remove("active");
        commentUp.style.color = "black";
        commentSpan.textContent = count - 1;
        commentArrow.style.background = "rgb(228, 234, 238)";
        break;

      case commentDown.classList.contains("active"):
        commentDown.classList.remove("active");
        commentUp.classList.add("active");
        commentUp.style.color = "white";
        commentDown.style.color = "black";
        commentSpan.textContent = count + 2;
        commentArrow.style.background = "red";
        break;

      default:
        commentUp.classList.add("active");
        commentSpan.textContent = count + 1;
        commentUp.style.color = "white";
        commentArrow.style.background = "red";
        break;
    }
  });
}


export function displayComment(commentContent, commentContainer) {
  commentContent.addEventListener("click", () => {
    commentContainer.style.display = "flex";
  })
}


export function hideComment(cancelButton, commentContainer) {
  cancelButton.addEventListener("click", () => {
    commentContainer.style.display = "none";
  })
}