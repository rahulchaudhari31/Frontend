(function () {
  'use strict';

  /* ===== Mobile Nav Toggle ===== */
  var menuToggle = document.getElementById('menuToggle');
  var mobileNav = document.getElementById('mobileNav');
  var menuIcon = menuToggle.querySelector('svg');

  menuToggle.addEventListener('click', function () {
    var isOpen = mobileNav.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', isOpen);
    menuToggle.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
    menuIcon.innerHTML = isOpen
      ? '<line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>'
      : '<line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>';
  });

  /* Close mobile nav on link click */
  var mobileLinks = mobileNav.querySelectorAll('a');
  for (var i = 0; i < mobileLinks.length; i++) {
    mobileLinks[i].addEventListener('click', function () {
      mobileNav.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
      menuToggle.setAttribute('aria-label', 'Open menu');
      menuIcon.innerHTML = '<line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>';
    });
  }

  /* ===== Testimonial Carousel ===== */
  var carousel = document.getElementById('testiCarousel');
  var prevBtn = document.getElementById('testiPrev');
  var nextBtn = document.getElementById('testiNext');
  var currentIndex = 0;
  var cards = carousel.querySelectorAll('.testi-card');
  var cardCount = cards.length;

  function getCardWidth() {
    if (cards.length === 0) return 530;
    var card = cards[0];
    var style = window.getComputedStyle(card);
    var width = card.offsetWidth;
    var gap = 24;
    var containerWidth = carousel.parentElement.offsetWidth;
    return Math.min(width + gap, containerWidth);
  }

  function updateCarousel() {
    var cardWidth = getCardWidth();
    var offset = -currentIndex * cardWidth;
    carousel.style.transform = 'translateX(' + offset + 'px)';
  }

  function goToPrev() {
    if (currentIndex > 0) {
      currentIndex--;
    } else {
      currentIndex = cardCount - 1;
    }
    updateCarousel();
  }

  function goToNext() {
    if (currentIndex < cardCount - 1) {
      currentIndex++;
    } else {
      currentIndex = 0;
    }
    updateCarousel();
  }

  prevBtn.addEventListener('click', goToPrev);
  nextBtn.addEventListener('click', goToNext);

  window.addEventListener('resize', function () {
    var maxIndex = Math.max(0, cardCount - 1);
    if (currentIndex > maxIndex) currentIndex = maxIndex;
    updateCarousel();
  });

})();
