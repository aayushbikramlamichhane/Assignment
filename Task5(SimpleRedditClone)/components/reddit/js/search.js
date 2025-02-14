const searchInput = document.querySelector(".search-input");
const spanBacks = document.querySelectorAll(".span-back");
const topicContents = document.querySelectorAll(".topic-content");
const contentTitles = document.querySelectorAll(".content-title");
const headlines = document.querySelectorAll(".headline");

searchInput.addEventListener("input", (e) => {
  const value = searchInput.value.toLowerCase();

  headlines.forEach((headline, index) => {
    const logoValue = spanBacks[index].innerHTML.toLowerCase();
    const titleValue = topicContents[index].innerHTML.toLowerCase();
    const contentTitle = contentTitles[index].innerHTML.toLowerCase();

    if (
      logoValue.includes(value) ||
      titleValue.includes(value) ||
      contentTitle.includes(value)
    ) {
      headline.style.display = "";
    } else {
      headline.style.display = "none";
    }
  });
});
