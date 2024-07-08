// script.js
document.addEventListener("DOMContentLoaded", function() {
    const check = document.getElementById("check");
    const closeMenu = document.querySelector(".close-menu");

    // Add event listener for close menu icon
    closeMenu.addEventListener("click", function() {
        check.checked = false;
    });
});









// Function to count up from 0 to the specified number
function countUp(element, start, end, duration) {
    if (end <= start) {
        element.textContent = end; // Directly set the end value if it's less than or equal to start
        return;
    }

    let current = start;
    const range = end - start;
    const increment = end > start ? 1 : -1;
    const stepTime = Math.abs(Math.floor(duration / range));

    const timer = setInterval(() => {
        current += increment;
        element.textContent = current;
        if (current >= end) { // Ensure current does not exceed end
            clearInterval(timer);
        }
    }, stepTime);
}

// Initialize the count up on page load
document.addEventListener('DOMContentLoaded', () => {
    const stats = document.querySelectorAll('.stat-count');
    stats.forEach(stat => {
        const endValue = parseInt(stat.textContent);
        stat.textContent = '0';
        countUp(stat, 0, endValue, 1000); // 2000ms or 2 seconds
    });
});

document.addEventListener('DOMContentLoaded', function() {
      const faqItems = document.querySelectorAll('.faq-item');
      
      faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');
        
        question.addEventListener('click', () => {
          answer.classList.toggle('visible');
          item.classList.toggle('open');
        });
      });
    });