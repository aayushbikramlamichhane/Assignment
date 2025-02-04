
export function loaderDisplay() {
    console.log(document.querySelector(".loader"));
    document.querySelector(".loader").style.display = "block";
}

export function loaderHide() {
    document.querySelector(".loader").style.display = "none";
}
