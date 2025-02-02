import {
    arrowDown,
    arrowDown1,
    arrowDown2,
    arrowDown3,
    arrowDown4,
    arrowSpan,
    arrowSpan1,
    arrowSpan2,
    arrowSpan3,
    arrowSpan4,
    arrowUp,
    arrowUp1,
    arrowUp2,
    arrowUp3,
    arrowUp4,
} from "./element.js";



let arrowUpArr = [arrowUp, arrowUp1, arrowUp2, arrowUp3, arrowUp4];
let arrowDownArr = [arrowDown, arrowDown1, arrowDown2, arrowDown3, arrowDown4];
let arrowSpanArr = [arrowSpan, arrowSpan1, arrowSpan2, arrowSpan3, arrowSpan4];


arrowDownArr.forEach((arrow, index) => {
    // console.log(index);
    arrow.addEventListener("click", () => {
        // console.log(index);
        // console.log(arrowSpanArr[index].textContent);
        let count = parseInt(arrowSpanArr[index].innerText);
        // console.log(count);

        switch (true) { 
            case arrow.style.color == "yellow":
                arrow.style.color = "black";
                arrowSpanArr[index].textContent = count + 1;
                break;
            case arrowUpArr[index].style.color == "yellow":
                arrowUpArr[index].style.color = "black";
                arrow.style.color = "yellow"
                arrowSpanArr[index].textContent = count - 2;
                break;
            default:
                arrow.style.color = "yellow";
                arrowSpanArr[index].textContent = count - 1;
                break;
    }
    })
})



arrowUpArr.forEach((arrow, index) => {
    arrow.addEventListener("click", () => {
        let count = parseInt(arrowSpanArr[index].textContent);
        // console.log(count);
        switch (true) {
          case arrow.style.color == "yellow":
            arrow.style.color = "black";
            arrowSpanArr[index].textContent = count - 1;
            break;

          case arrowDownArr[index].style.color == "yellow":
            arrowDownArr[index].style.color = "black";
            arrow.style.color = "yellow";
            arrowSpanArr[index].textContent = count + 2;
            break;

          default:
            arrow.style.color = "yellow";
            arrowSpanArr[index].textContent = count + 1;
            break;
        }
    })
})

