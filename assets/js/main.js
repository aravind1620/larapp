document.addEventListener('DOMContentLoaded', () => {
  const fadeElements = document.querySelectorAll('.fade-up');
  const nav = document.querySelector('[data-sticky-nav]');
  const navLinks = document.querySelectorAll('[data-nav-link]');
  const navToggle = document.getElementById('nav-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  const pageKey = document.body.dataset.page || '';

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          }
        });
      },
      {
        threshold: 0.15,
      }
    );

    fadeElements.forEach((el) => observer.observe(el));
  } else {
    fadeElements.forEach((el) => el.classList.add('in-view'));
  }

  if (nav) {
    const handleScroll = () => {
      nav.classList.toggle('scrolled', window.scrollY > 40);
    };

    handleScroll();
    document.addEventListener('scroll', handleScroll, { passive: true });
  }

  if (pageKey && navLinks.length) {
    navLinks.forEach((link) => {
      const target = link.dataset.pageTarget;
      if (target === pageKey) {
        link.classList.add('text-brand-blue');
        link.classList.add('font-semibold');
      } else {
        link.classList.remove('text-brand-blue');
        link.classList.remove('font-semibold');
      }
    });
  }

  if (navToggle && mobileMenu) {
    navToggle.addEventListener('click', () => {
      const isHidden = mobileMenu.hasAttribute('hidden');
      if (isHidden) {
        mobileMenu.removeAttribute('hidden');
      } else {
        mobileMenu.setAttribute('hidden', '');
      }
    });

    mobileMenu.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => mobileMenu.setAttribute('hidden', ''));
    });
  }
});
