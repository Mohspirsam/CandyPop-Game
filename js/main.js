// Mobile nav toggle — shared across all pages
document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.getElementById('navToggle');
  var nav = document.getElementById('mainNav');
  if (!toggle || !nav) return;

  toggle.addEventListener('click', function () {
    nav.classList.toggle('open');
  });

  // Close menu when a link is tapped (mobile)
  nav.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      nav.classList.remove('open');
    });
  });
});

// Scroll-reveal entrance was removed — IntersectionObserver doesn't reliably
// fire in every real browser/tab state (confirmed via DevTools Protocol on the
// live deploy: content stayed at opacity 0 indefinitely on a real page load).
// That turned a cosmetic animation into cards silently vanishing. Content is
// unconditionally visible now (see style.css); nothing here controls it.
