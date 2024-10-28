const burger = document.querySelector(".burger");
const dropdownMenu = document.getElementById("dropdown-menu");

burger.addEventListener("click", function(){
    burger.classList.toggle("open");
    dropdownMenu.classList.toggle("hidden");
});