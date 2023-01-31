const burger = document.querySelector(".header__burger");
const menu = document.querySelector(".header__menu");
const menuMob = document.querySelector(".header__menu_mobile");
const nav = document.querySelector(".header__nav");

burger.addEventListener("click", (e) => {
    e.currentTarget.classList.toggle("active");

    if (window.innerWidth > 768) menu.classList.toggle("active");

    else {
        menuMob.classList.toggle("active");
        nav.classList.toggle("active");
        document.body.classList.toggle("lock");
    }
});
window.addEventListener("resize", () => {
    if (window.innerWidth < 768 && menu.classList.contains("active")) {
        menu.classList.remove("active");

        if (burger.classList.contains("active")) burger.classList.remove("active");

        if (nav.classList.contains("active")) nav.classList.remove("active");
    }
    if (window.innerWidth >= 768 && menuMob.classList.contains("active")) {
        menuMob.classList.remove("active");

        if (burger.classList.contains("active")) burger.classList.remove("active");

        if (nav.classList.contains("active")) nav.classList.remove("active");

        if (document.body.classList.contains("lock")) document.body.classList.remove("lock");
    }
});

window.addEventListener("scroll", () => {
    if (window.scrollY === 0) {
        if (nav.classList.contains("header__nav_colored")) {
            nav.classList.remove("header__nav_colored");
        }
    } else {
        if (!nav.classList.contains("header__nav_colored")) {
            nav.classList.add("header__nav_colored");
        }
    }
});