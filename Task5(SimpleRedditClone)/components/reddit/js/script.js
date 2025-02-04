const arrowDown = document.querySelector(".arrow-down");
const arrowSpan = document.querySelector(".arrow-span");
const arrowUp = document.querySelector(".arrow-up");

export function arrowDownFunction() {
    

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
}