const burger = document.querySelector(".burger");
const line1 = document.querySelector(".line1");
const line2 = document.querySelector(".line2");
const line3 = document.querySelector(".line3");
const mobileMenu = document.querySelector(".mobileMenu");

burger.addEventListener("click", () => {
  line1.classList.toggle("animationLine1");
  line2.classList.toggle("animationLine2");
  line3.classList.toggle("animationLine3");
  mobileMenu.classList.toggle("openSidebar");
});
