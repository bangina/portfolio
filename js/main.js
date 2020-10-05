//cursor move

let mouseCursor = document.querySelector(".cursor");
let navLinks = document.querySelectorAll(".gnb li a");

window.addEventListener("scroll", cursor);
window.addEventListener("mousemove", cursor);

function cursor(e) {
  mouseCursor.style.top = e.pageY - scrollY + "px";
  mouseCursor.style.left = e.pageX + "px";
}

navLinks.forEach((link) => {
  link.addEventListener("mouseover", () => {
    mouseCursor.classList.add("link-grow");
    mouseCursor.style.zIndex = "-1";
    link.classList.add("hovered-link");
  });
  link.addEventListener("mouseleave", () => {
    mouseCursor.classList.remove("link-grow");
    mouseCursor.style.zIndex = "1000";
    link.classList.remove("hovered-link");
  });
});

//Dark & Light mode toggle

var checkbox = document.querySelector("input[name=theme]");

checkbox.addEventListener("change", function () {
  if (this.checked) {
    trans();
    document.documentElement.setAttribute("data-theme", "dark");
  } else {
    trans();
    document.documentElement.setAttribute("data-theme", "light");
  }
});

let trans = () => {
  document.documentElement.classList.add("transition");
  window.setTimeout(() => {
    document.documentElement.classList.remove("transition");
  }, 2000);
};