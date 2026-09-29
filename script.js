document.documentElement.classList.add('js');

const header = document.querySelector('.header');
const menu = document.querySelector('.menu');
const links = document.querySelector('.nav-links');

// Mobile menu
function setMenu(open) {
  links.classList.toggle('open', open);
  header.classList.toggle('menu-active', open);
  document.body.classList.toggle('menu-open', open);
  menu.setAttribute('aria-expanded', open);
  menu.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
}

menu.addEventListener('click', () => setMenu(!links.classList.contains('open')));
links.querySelectorAll('a').forEach(link => link.addEventListener('click', () => setMenu(false)));
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && links.classList.contains('open')) {
    setMenu(false);
    menu.focus();
  }
});
window.matchMedia('(min-width: 861px)').addEventListener('change', e => {
  if (e.matches) setMenu(false);
});

// Header shadow once the page is scrolled
const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 8);
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

if ('IntersectionObserver' in window) {
  // Highlight the nav link for the section in view
  const navLinks = [...links.querySelectorAll('a[href^="#"]')];
  const sectionObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      navLinks.forEach(a => {
        const active = a.getAttribute('href') === '#' + entry.target.id;
        a.classList.toggle('active', active);
        if (active) a.setAttribute('aria-current', 'true');
        else a.removeAttribute('aria-current');
      });
    });
  }, { rootMargin: '-45% 0px -50% 0px' });
  navLinks.forEach(a => {
    const section = document.querySelector(a.getAttribute('href'));
    if (section) sectionObserver.observe(section);
  });

  // Fade sections in as they scroll into view
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('in');
      observer.unobserve(entry.target);
    });
  }, { rootMargin: '0px 0px -8% 0px' });
  document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
} else {
  document.querySelectorAll('.reveal').forEach(el => el.classList.add('in'));
}
