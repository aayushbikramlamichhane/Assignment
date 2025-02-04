export let storedComment = localStorage.getItem("storedComment")
  ? JSON.parse(localStorage.getItem("storedComment"))
  : [];
