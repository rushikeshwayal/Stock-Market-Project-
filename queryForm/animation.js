document.addEventListener("DOMContentLoaded", function() {
    const check = document.getElementById("check");
    const closeMenu = document.querySelector(".close-menu");

    // Add event listener for close menu icon
    closeMenu.addEventListener("click", function() {
        check.checked = false;
    });
});
