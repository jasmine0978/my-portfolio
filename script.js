/* ========================================
   1. DARK MODE
======================================== */

const themeToggle = document.getElementById("theme-toggle");

// Load the saved theme preference
const savedTheme = localStorage.getItem("portfolio-theme");

if (savedTheme === "dark") {
    themeToggle.checked = true;
} else {
    themeToggle.checked = false;
}

// Save the theme whenever the switch is changed
themeToggle.addEventListener("change", function () {

    if (themeToggle.checked) {
        localStorage.setItem("portfolio-theme", "dark");
    } else {
        localStorage.setItem("portfolio-theme", "light");
    }

});


/* ========================================
   2. MOBILE NAVIGATION
======================================== */

const menuToggle = document.getElementById("menu-toggle");
const navbar = document.querySelector(".navbar");
const menuLinks = document.querySelectorAll(".navbar a");

// Close the mobile menu when a navigation link is clicked
menuLinks.forEach(function (link) {

    link.addEventListener("click", function () {
        menuToggle.checked = false;
    });

});

// Close the mobile menu when Escape is pressed
document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {
        menuToggle.checked = false;
    }

});

// Close the mobile menu when switching to desktop width
window.addEventListener("resize", function () {

    if (window.innerWidth > 1100) {
        menuToggle.checked = false;
    }

});


/* ========================================
   3. COPYRIGHT YEAR
======================================== */

const footer = document.querySelector(".footer p");

if (footer) {
    footer.textContent = footer.textContent.replace(
        /©\s*\d{4}/,
        "© " + new Date().getFullYear()
    );
}