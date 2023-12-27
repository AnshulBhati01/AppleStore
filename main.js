// JavaScript

// Function to get an element by CSS selector
const getElement = (selector) => document.querySelector(selector);

// Event listener for the mobile menu click
getElement('.mobile-menu').addEventListener('click', () => {
    // Toggle the 'active' class on the header element
    const header = getElement('header');
    header.classList.toggle('active');

    // Set ARIA attributes for accessibility
    const isActive = header.classList.contains('active');
    getElement('.mobile-menu').setAttribute('aria-expanded', isActive);
});

