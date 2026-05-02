// ─── Intersection Observer — scroll reveal ───────────────
const _revealEls = document.querySelectorAll('.reveal');
const _revealObs = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 55);
      _revealObs.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
_revealEls.forEach(el => _revealObs.observe(el));

// ─── Nav scroll shadow ────────────────────────────────────
const _navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  _navbar.classList.toggle('scrolled', window.scrollY > 10);
}, { passive: true });
