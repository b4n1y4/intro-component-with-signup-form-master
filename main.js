var inputContainers = Array.from(
  document.getElementsByClassName("input-container")
);

inputContainers.forEach((element) => {
  element.addEventListener("click", () => {
    var prevElement = Array.from(document.getElementsByClassName("clicked"))[0];
    if (prevElement != null) prevElement.classList.remove("clicked");
    element.classList.add("clicked");
  });
});
