const menu = document.querySelector('.menu');
const navRight = document.querySelector('.nav-right');
const links = document.querySelector('.nav-links');

if (menu && navRight) {
  menu.addEventListener('click', () => {
    const open = navRight.classList.toggle('open');
    menu.setAttribute('aria-expanded', String(open));
  });
}

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    if (navRight) navRight.classList.remove('open');
    if (menu) menu.setAttribute('aria-expanded', 'false');
  });
});
