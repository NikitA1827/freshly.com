//Enable hidden navbar

{
    const invisibleNavbar = document.querySelector('.invisible_navbar');
    const navbar = document.querySelector('.navbar');
    let lastScrollY = window.scrollY;
    window.addEventListener("scroll", () => {
        if (lastScrollY < window.scrollY) {
            invisibleNavbar.classList.add("nav--hidden"); // this will add the class nav--hidden
            navbar.classList.add("navbar--up");
        }else if(window.scrollY === 0){
            // console.log('we are going up')
            invisibleNavbar.classList.remove("nav--hidden"); // this will remove the class nav--hidden
            navbar.classList.remove("navbar--up")
        }
        lastScrollY = window.scrollY;
    })
}

