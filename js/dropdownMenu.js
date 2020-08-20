var mensMenu = document.querySelector(".mens_menu");
var womensMenu = document.querySelector(".womens_menu");
var localStoresMenu = document.querySelector(".local_stores_menu");
var lookBookMenu = document.querySelector(".look_book_menu");

var menDropDown = document.querySelector(".mens_dropdown_menu");
var womenDropDown = document.querySelector(".womens_dropdown_menu");
var localStoresDropDown = document.querySelector(".local_stores_dropdown_menu");
var lookBookDropDown = document.querySelector(".look_book_dropdown_menu");




mensMenu.addEventListener("click", function (evt) {
    evt.preventDefault();
    localStoresDropDown.classList.remove("local_stores_dropdown_menu_show");
    womensMenu.classList.remove("womens_dropdown_menu_show");
    localStoresMenu.classList.remove("local_stores_dropdown_menu");
    menDropDown.classList.toggle("mens_dropdown_menu_show");
    }); 


womensMenu.addEventListener("click", function (evt) {
    evt.preventDefault();
        
    localStoresDropDown.classList.remove("local_stores_dropdown_menu_show");
    menDropDown.classList.remove("mens_dropdown_menu_show");
    localStoresMenu.classList.remove("local_stores_dropdown_menu");
    womenDropDown.classList.toggle("womens_dropdown_menu_show");
     
        
    }); 


localStoresMenu.addEventListener("click", function (evt) {
    evt.preventDefault();
    menDropDown.classList.remove("mens_dropdown_menu_show");
    womensMenu.classList.remove("womens_dropdown_menu_show");
    localStoresDropDown.classList.toggle("local_stores_dropdown_menu_show");
        }); 

    lookBookMenu.addEventListener("click", function (evt) {
            evt.preventDefault();
            menDropDown.classList.remove("mens_dropdown_menu_show");
            womensMenu.classList.remove("womens_dropdown_menu_show");
            localStoresMenu.classList.remove("local_stores_dropdown_menu");
            lookBookDropDown.classList.toggle("look_book_dropdown_menu_show");
                }); 


window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        menDropDown.classList.remove("mens_dropdown_menu_show");
        womensMenu.classList.remove("womens_dropdown_menu_show");   
        localStoresDropDown.classList.remove("local_stores_dropdown_menu_show");   
    }

                }); 