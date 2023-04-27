//inisialisasi class navbar-menu
const navbarMenu = document.querySelector(".navbar-menu");

//ketika icon menu diketik
document.querySelector("#menu").onclick = () => {
  navbarMenu.classList.toggle("active");
};

//inisialisasi id menu
const menuBurger = document.querySelector("#menu");

//ketika klik diluar side bar dan burger
document.addEventListener("click", function (e) {
  if (!menuBurger.contains(e.target) && !navbarMenu.contains(e.target)) {
    navbarMenu.classList.remove("active");
  }
});
