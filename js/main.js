let bar = document.querySelector("#bars");
let nav_links = document.querySelector(".nav-links");
bar.addEventListener("click", function () {
  //   alert("hello");
  nav_links.classList.toggle("show");
});
