document.body.addEventListener("click", changeCardClass);

function changeCardClass(e) {
  let element = e.target;

  if (element.tagName === "H1") {
    return;
  } else if (element.tagName === "H3") {
    element = e.target.parentElement;
  }

  let className = "active";

  if (element.className.includes("active")) {
    removeActiveClass(element, className);
  } else {
    element.classList.add("active");
  }
}

function removeActiveClass(element, elClass) {
  element.classList.remove(elClass);
}
