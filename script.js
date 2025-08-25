// ===== Typed.js Initialization =====

// Desktop typing
var typed = new Typed('.typing', {
  strings: ['Full Stack Developer', 'MERN Stack', 'React.js Developer'],
  typeSpeed: 60,       // typing speed
  backSpeed: 40,       // backspace speed
  backDelay: 1000,     // pause before backspacing
  startDelay: 500,     // initial delay
  loop: true,          // loop infinitely
  showCursor: true,    // display cursor
  cursorChar: '|'
});

// Mobile typing
var typedMobile = new Typed('.typing-mobile', {
  strings: ['Full Stack Developer', 'MERN Stack', 'React.js Developer'],
  typeSpeed: 60,
  backSpeed: 40,
  backDelay: 1000,
  startDelay: 500,
  loop: true,
  showCursor: true,
  cursorChar: '|'
});

// ===== Hamburger Menu Toggle =====
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

hamburger.addEventListener('click', () => {
  if (mobileMenu.style.display === 'flex') {
    mobileMenu.style.display = 'none';
  } else {
    mobileMenu.style.display = 'flex';
    mobileMenu.style.flexDirection = 'column';
  }
});

// ===== Close Mobile Menu on Link Click =====
document.querySelectorAll('.nav-links-mobile a').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.style.display = 'none';
  });
});

// ===== Smooth Scroll for Navigation Links =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// ===== Highlight Active Nav Link on Scroll =====
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-links li a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120;
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href').includes(current)) {
      link.classList.add('active');
    }
  });
});
