/* =============================================================
   SIRAJ CSC — Main JS v2.0
   Nav scroll · Burger/Drawer · Reveal animations · Fallbacks
   ============================================================= */
(function () {
  'use strict';

  /* ── NAV SCROLL SHADOW ────────────────────────────────────── */
  var nav = document.getElementById('nav');
  function onScroll() {
    if (nav) nav.classList.toggle('scrolled', window.scrollY > 10);
  }
  if (nav) {
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ── HAMBURGER / DRAWER ───────────────────────────────────── */
  var burger = document.getElementById('nav-burger');
  var drawer = document.getElementById('nav-drawer');

  function openDrawer() {
    drawer.classList.add('open');
    burger.classList.add('open');
    burger.setAttribute('aria-expanded', 'true');
    burger.setAttribute('aria-label', 'Close menu');
    document.body.style.overflow = 'hidden';
  }
  function closeDrawer() {
    if (!drawer) return;
    drawer.classList.remove('open');
    if (burger) {
      burger.classList.remove('open');
      burger.setAttribute('aria-expanded', 'false');
      burger.setAttribute('aria-label', 'Open menu');
    }
    document.body.style.overflow = '';
  }

  if (burger && drawer) {
    burger.addEventListener('click', function () {
      drawer.classList.contains('open') ? closeDrawer() : openDrawer();
    });

    drawer.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', closeDrawer);
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeDrawer();
    });

    document.addEventListener('click', function (e) {
      if (drawer.classList.contains('open') &&
          !drawer.contains(e.target) &&
          !burger.contains(e.target)) {
        closeDrawer();
      }
    });
  }

  /* ── ACTIVE NAV LINK ──────────────────────────────────────── */
  var page = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach(function (a) {
    var href = (a.getAttribute('href') || '').split('#')[0];
    if (href === page || (page === '' && href === 'index.html')) {
      a.classList.add('active');
    } else {
      a.classList.remove('active');
    }
  });

  /* ── SCROLL REVEAL ────────────────────────────────────────── */
  var reveals = document.querySelectorAll('.reveal');
  if (reveals.length) {
    if ('IntersectionObserver' in window) {
      var ro = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            ro.unobserve(entry.target);
          }
        });
      }, { threshold: 0.1, rootMargin: '0px 0px -32px 0px' });
      reveals.forEach(function (el) { ro.observe(el); });
    } else {
      reveals.forEach(function (el) { el.classList.add('visible'); });
    }
  }

  /* ── VEHICLE IMAGE FALLBACKS ──────────────────────────────── */
  // For vehicle cards using CSS background crops, detect poster load failure
  var vehImages = document.querySelectorAll('.veh-img.vi-bike, .veh-img.vi-car, .veh-img.vi-auto');
  vehImages.forEach(function (wrap) {
    // Probe the poster image
    var probe = new Image();
    probe.onerror = function () {
      // Poster not found — swap out background, show SVG fallback
      wrap.style.backgroundImage = 'none';
      wrap.style.background = '#F3F5F8';
      var fb = wrap.querySelector('.veh-img-fallback');
      if (fb) fb.style.display = 'flex';
    };
    probe.onload = function () {
      // Hide fallback if any
      var fb = wrap.querySelector('.veh-img-fallback');
      if (fb) fb.style.display = 'none';
    };
    probe.src = 'assets/posters/insurance-poster.jpg';
  });

  // Hero vehicle card fallback
  var heroVehImg = document.querySelector('.hc-vehicle-img');
  if (heroVehImg) {
    var hp = new Image();
    hp.onerror = function () {
      heroVehImg.style.backgroundImage = 'none';
      heroVehImg.style.background = 'rgba(255,255,255,0.04)';
    };
    hp.src = 'assets/posters/insurance-poster.jpg';
  }

  /* ── LOGO IMAGE FALLBACKS ─────────────────────────────────── */
  // Handled inline via onerror attributes; nothing extra needed

  /* ── SMOOTH ANCHOR SCROLL ─────────────────────────────────── */
  document.querySelectorAll('a[href^="#"]').forEach(function (a) {
    a.addEventListener('click', function (e) {
      var target = document.querySelector(a.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      var offset = (nav ? nav.offsetHeight : 72) + 12;
      var top = target.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top: top, behavior: 'smooth' });
    });
  });

  /* ── STICKY NAV LOGO SHRINK ───────────────────────────────── */
  // Already handled by nav.scrolled class in CSS

})();
