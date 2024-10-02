document.addEventListener('DOMContentLoaded', () => {
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach((element, index) => {
        setTimeout(() => {
            element.classList.add('fade-in-show');
        }, index * 300); // Stagger the animations
    });
});
