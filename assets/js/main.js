// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Theme toggle
(() => {
  const toggleBtn = document.querySelector('.theme-toggle');
  const root = document.documentElement;
  const storedTheme = localStorage.getItem('theme') || 'light';

  const applyTheme = theme => {
    root.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  };

  applyTheme(storedTheme);

  toggleBtn.addEventListener('click', () => {
    const next = root.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
    applyTheme(next);
  });
})();
