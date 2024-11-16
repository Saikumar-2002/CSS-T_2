// script.js

const pricingToggle = document.getElementById('pricing-toggle');
const monthlyPrices = document.querySelectorAll('.monthly');
const yearlyPrices = document.querySelectorAll('.yearly');

pricingToggle.addEventListener('click', () => {
  monthlyPrices.forEach(price => price.classList.toggle('active'));
  yearlyPrices.forEach(price => price.classList.toggle('active'));
  pricingToggle.textContent =
    pricingToggle.textContent === 'Switch to Yearly' ? 'Switch to Monthly' : 'Switch to Yearly';
});

// Add sliding effect for testimonials
// let currentSlide = 0;
// const slides = document.querySelectorAll('.slide');

// setInterval(() => {
//   slides[currentSlide].style.transform = 'translateX(-100%)';
//   currentSlide = (currentSlide + 1) % slides.length;
//   slides[currentSlide].style.transform = 'translateX(0%)';
// }, 4000);
