let menu_icon = document.getElementById("menu-icon");
let mobile_menu = document.getElementById("mobile-menu");

menu_icon.addEventListener("click",()=>{

    mobile_menu.classList.add("active");
    span_close.classList.add("active");
    span_overlay.classList.add("active");

});
let span_close = document.getElementById("close");
span_close.addEventListener("click",()=>{

    mobile_menu.classList("active");
    span_close.classList.remove("active");
    span_overlay.classList.remove("active");
});

let span_overlay = document.getElementById("overlay");

span_overlay.addEventListener("click",()=>{

    mobile_menu.classList.remove("active");
    span_close.classList.remove("active");
    span_overlay.classList.remove("active");

});

