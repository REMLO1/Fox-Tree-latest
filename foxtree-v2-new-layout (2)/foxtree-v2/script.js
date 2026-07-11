const header = document.querySelector('.site-header');
const navToggle = document.querySelector('.nav-toggle');
const year = document.querySelector('#year');

if (year) {
  year.textContent = new Date().getFullYear();
}

if (header && navToggle) {
  navToggle.addEventListener('click', () => {
    const isOpen = header.classList.toggle('menu-open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  header.querySelectorAll('.site-nav a').forEach((link) => {
    link.addEventListener('click', () => {
      header.classList.remove('menu-open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// Do not add event.preventDefault() to the booking form.
// Netlify Forms needs the normal form POST to capture the enquiry.
