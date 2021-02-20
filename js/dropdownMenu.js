var mensMenu = document.querySelector(".mens_menu");
var womensMenu = document.querySelector(".womens_menu");
var lookBookMenu = document.querySelector(".look_book_menu");


//меню
var menDropDown = document.querySelector(".mens_dropdown_menu");
var womenDropDown = document.querySelector(".womens_dropdown_menu");
var lookBookDropDown = document.querySelector(".look_book_dropdown_menu");

var dropdownMenusBtn = document.querySelectorAll(".main_navigation > li");
var dropdownMenusContainer = document.querySelector(".main_navigation");
//dropdown-menu__all
var dropdownMenuBlocks = document.querySelectorAll(".dropdown-menu__all");

console.log(dropdownMenuBlocks);
function closeAllMenus() {
    for (let i = 0; i < dropdownMenuBlocks.length; i++) {
        dropdownMenuBlocks[i].classList.remove("menu_show");
        /* dropdownMenus[i].classList.remove("womens_dropdown_menu_show"); */

    }

}
/* console.log(menDropDown); */

dropdownMenusContainer.addEventListener('click', function (evt) {
    let target = evt.target.closest('li');
    /* console.log(target.classList.contains('womens_menu')); */
    if (!target) {
        closeAllMenus();
    } else if (target.classList.contains('mens_menu')) {
        evt.preventDefault();
        closeAllMenus();
        menDropDown.classList.toggle("menu_show");
    } else if (target.classList.contains('womens_menu')) {
        evt.preventDefault();
        closeAllMenus();
        womenDropDown.classList.toggle("menu_show");
    } else if (target.classList.contains('look_book_menu')) {
        evt.preventDefault();
        closeAllMenus();
        lookBookDropDown.classList.toggle("menu_show");
    }

})


//mens_menu не работает для всех жлементов