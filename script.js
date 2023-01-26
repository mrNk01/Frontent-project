const menuIcon = document.querySelector("#menu_icon");
const closeMenu = document.querySelector(".close_menu");
const showNavBar = document.querySelector(".nav_open");
const transBack = document.querySelector(".trans_back");


menuIcon.addEventListener("click", () => {
  showNavBar.classList.add("show_navbar");
  transBack.classList.add("usetrans_black")

})  

closeMenu.addEventListener("click" , () => {
  showNavBar.classList.remove("show_navbar");
  transBack.classList.remove("usetrans_black")
})