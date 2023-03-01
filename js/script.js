/* nav toggle */
function nav() {
    const navToggler = document.querySelector(".js-header-toggler");
    const nav = document.querySelector(".js-header-nav");

    navToggler.addEventListener("click", toggleNav);

    function toggleNav() {
        navToggler.classList.toggle("active");
        nav.classList.toggle("open");

        if(nav.classList.contains("open")) {
            document.body.style.overflow = "hidden";
        }else{
            document.body.style.removeProperty("overflow");
        }
    };

    nav.querySelectorAll("a").forEach((a) => {
        a.addEventListener("click", toggleNav);
    });
};

nav();