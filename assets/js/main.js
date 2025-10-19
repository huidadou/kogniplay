// Main site scripts for KogniPlay
(function() {
  const mobileToggle = document.querySelector('[data-mobile-toggle]');
  const nav = document.querySelector('[data-nav]');
  if (mobileToggle && nav) {
    mobileToggle.addEventListener('click', () => {
      nav.hidden = !nav.hidden;
    });
  }

  // Smooth scroll for anchor links
  document.addEventListener('click', (e) => {
    const target = e.target.closest('a[href^=#]');
    if (!target) return;
    const id = target.getAttribute('href').slice(1);
    const el = document.getElementById(id);
    if (el) {
      e.preventDefault();
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
})();
