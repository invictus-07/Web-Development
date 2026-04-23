const navbar = document.getElementById('navbar');
const toggle = document.getElementById('menu-toggle');
const menu = document.getElementById('nav-menu');
const ctaBtn = document.getElementById('cta-btn');

window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
});

toggle.addEventListener('click', () => {
  menu.classList.toggle('active');
});

ctaBtn.addEventListener('click', () => {
  document.getElementById('features').scrollIntoView({ behavior: 'smooth' });
});

const form = document.getElementById('contact-form');
const status = document.getElementById('form-status');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  status.textContent = 'Thanks! Your message has been received.';
  form.reset();
});