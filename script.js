// JavaScript for page interactivity

document.addEventListener('DOMContentLoaded', () => {
  // Intersection Observer for reveal animations
  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          obs.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1
    }
  );

  document.querySelectorAll('[data-animate]').forEach(el => {
    observer.observe(el);
  });

  // Prevent browser from restoring scroll position when navigating back/forward or refreshing.
  if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
  }

  // Always scroll to the top on page load to ensure hero is visible
  window.scrollTo(0, 0);

  // Mobile navigation toggle
  const navToggle = document.getElementById('nav-toggle');
  const navLinks = document.getElementById('nav-links');
  if (navToggle) {
    navToggle.addEventListener('click', () => {
      navLinks.classList.toggle('open');
      navToggle.classList.toggle('open');
    });
    // Close menu on link click
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        navToggle.classList.remove('open');
      });
    });
  }
});