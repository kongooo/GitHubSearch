let add = document.querySelector(".add");
let add_menu = document.querySelector(".adding-menu");
let bg = document.querySelector(".bg");
let image_menu = document.querySelector(".image-menu");
let drop_button = document.querySelector(".image");

add.addEventListener('click', event => {
    add_menu.style.display = "block";
    bg.style.zIndex = "2";
})

drop_button.addEventListener('click', event => {
    image_menu.style.display = "block";
    bg.style.zIndex = "2";
})

bg.addEventListener('click', event => {
    if (add_menu.style.display == "block") {
        add_menu.style.display = "none";
        bg.style.zIndex = "-1";
    }
    if (image_menu.style.display == "block") {
        image_menu.style.display = "none";
        bg.style.zIndex = "-1";
    }
})