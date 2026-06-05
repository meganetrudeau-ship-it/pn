const toggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.main-nav');
const links = document.querySelectorAll('.main-nav a');
const year = document.querySelector('#year');

year.textContent = new Date().getFullYear();

toggle.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('is-open');
  toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
});

links.forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
  });
});
