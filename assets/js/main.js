// Mobile menu toggle
(function () {
  var btn = document.querySelector('.nav-toggle');
  var nav = document.getElementById('site-nav');
  if (!btn || !nav) return;
  btn.addEventListener('click', function () {
    var open = btn.getAttribute('aria-expanded') === 'true';
    btn.setAttribute('aria-expanded', String(!open));
    btn.setAttribute('aria-label', open ? 'Open menu' : 'Close menu');
    nav.classList.toggle('open', !open);
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && nav.classList.contains('open')) { btn.click(); btn.focus(); }
  });
})();
