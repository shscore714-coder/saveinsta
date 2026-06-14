document.addEventListener('DOMContentLoaded', function () {

    const menuBtn = document.querySelector('.menu-toggle');
    const mainMenu = document.querySelector('.main-menu');

    const langBtn = document.querySelector('.lang');
    const langDropdown = document.querySelector('.dropdown');

    const instaBtn = document.querySelector('.menu-instagram');
    const instaDropdown = document.querySelector('.submenu');

    /* =========================
       MOBILE MENU
    ========================= */

    if (menuBtn && mainMenu) {

        menuBtn.addEventListener('click', function (e) {

            e.stopPropagation();

            // Close dropdowns first
            langDropdown?.classList.remove('active');
            instaDropdown?.classList.remove('active');

            mainMenu.classList.toggle('active');

        });

    }

    /* =========================
       LANGUAGE DROPDOWN
    ========================= */

    if (langBtn && langDropdown) {

        langBtn.addEventListener('click', function (e) {

            e.stopPropagation();

            // Close Instagram dropdown
            instaDropdown?.classList.remove('active');

            langDropdown.classList.toggle('active');

        });

    }

    /* =========================
       INSTAGRAM DROPDOWN
    ========================= */

    if (instaBtn && instaDropdown) {

        instaBtn.addEventListener('click', function (e) {

            e.stopPropagation();

            // Close Language dropdown
            langDropdown?.classList.remove('active');

            instaDropdown.classList.toggle('active');

        });

    }

    /* =========================
       CLOSE ON OUTSIDE CLICK
    ========================= */

    document.addEventListener('click', function () {

        langDropdown?.classList.remove('active');
        instaDropdown?.classList.remove('active');

        if (window.innerWidth <= 768) {
            mainMenu?.classList.remove('active');
        }

    });

    /* =========================
       PREVENT CLOSE INSIDE MENU
    ========================= */

    mainMenu?.addEventListener('click', function (e) {
        e.stopPropagation();
    });

    /* =========================
       MENU LINK CLICK
    ========================= */

    document.querySelectorAll('.main-menu a').forEach(link => {

        link.addEventListener('click', function () {

            mainMenu?.classList.remove('active');
            langDropdown?.classList.remove('active');
            instaDropdown?.classList.remove('active');

        });

    });

    /* =========================
       WINDOW RESIZE FIX
    ========================= */

    window.addEventListener('resize', function () {

        mainMenu?.classList.remove('active');
        langDropdown?.classList.remove('active');
        instaDropdown?.classList.remove('active');

    });

});

// document.addEventListener("DOMContentLoaded", function () {
//     const adUrl = "https://whoushex.top/4/9046233";

    // Open ad when category links are clicked
    // document.querySelectorAll(".category-item a").forEach((link) => {
    //     link.addEventListener("click", function () {
    //         window.open(adUrl, "_blank");
    //     });
    // });

    // Open ad when the search form is submitted
//     const form = document.getElementById("searchForm");
//     form.addEventListener("submit", function (event) {
//         window.open(adUrl, "_blank");
//     });
// });
