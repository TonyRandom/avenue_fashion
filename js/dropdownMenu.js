var mensMenu = document.querySelector(".mens_menu");
var womensMenu = document.querySelector(".womens_menu");
var lookBookMenu = document.querySelector(".look_book_menu");

var ESCAPE_BUTTON = 27;

//меню
var menDropDown = document.querySelector(".mens_dropdown_menu");
var womenDropDown = document.querySelector(".womens_dropdown_menu");
var lookBookDropDown = document.querySelector(".look_book_dropdown_menu");

var dropdownMenusBtn = document.querySelectorAll(".main_navigation > li");
var dropdownMenusContainer = document.querySelector(".main_navigation");
var dropdownMenuBlocks = document.querySelectorAll(".dropdown-menu__all");

console.log(dropdownMenuBlocks);

function closeAllMenus() {
    for (let i = 0; i < dropdownMenuBlocks.length; i++) {
        dropdownMenuBlocks[i].classList.remove("menu_show");

    }

}

var onEscapeClose = function (evt) {
    if (evt.keyCode === ESCAPE_BUTTON) {
        closeAllMenus();
        document.removeEventListener('keydown', onEscapeClose);
    }
}

 var onClickClose = function (evt) {
    if (evt.target.closest('li').classList.contains('mens_menu') || evt.target.closest('li').classList.contains('mens_menu')  || evt.target.closest('li').classList.contains('look_book_menu') && menDropDown.classList.contains("menu_show") || womenDropDown.classList.contains("menu_show") || lookBookDropDown.classList.contains("menu_show") ) {
        closeAllMenus();
        document.removeEventListener('click', onClickClose);
    }
}
 



 function openMenu(evt) {
    let target = evt.target.closest('li');
    
    if (!target) {
        closeAllMenus();
    } else if (target.classList.contains('mens_menu')) {
        evt.preventDefault();
        closeAllMenus();
        menDropDown.classList.add("menu_show");
        return;
    } else if (target.classList.contains('womens_menu')) {
        evt.preventDefault();
        closeAllMenus();
        womenDropDown.classList.add("menu_show");
    } else if (target.classList.contains('look_book_menu')) {
        evt.preventDefault();
        closeAllMenus();
        lookBookDropDown.classList.add("menu_show");
    }
    
} 



//dropdownMenusContainer (document чтобы по клику по любой области закрывалось меню)
document.addEventListener('click', function (evt) {
    openMenu(evt);
    document.addEventListener('keydown', onEscapeClose);
    document.addEventListener('click', onClickClose);
    

})