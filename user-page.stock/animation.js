var swiper = new Swiper(".mySwiper", {
  loop: true, // Enable looping
  autoplay: {
    delay: 3000, // Delay between slides in milliseconds
    disableOnInteraction: false, // Keep autoplay even after user interactions
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});


// close menue
// script.js
document.addEventListener("DOMContentLoaded", function() {
    const check = document.getElementById("check");
    const closeMenu = document.querySelector(".close-menu");

    // Add event listener for close menu icon
    closeMenu.addEventListener("click", function() {
        check.checked = false;
    });
});
    
