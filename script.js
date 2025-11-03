// JavaScript for Navbar & Video Page

// Highlight the active navbar link when clicked
const navLinks = document.querySelectorAll('nav ul li a');

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navLinks.forEach(l => l.classList.remove('active'));
    link.classList.add('active');
  });
});

// Display an alert when a video starts playing
const videos = document.querySelectorAll('video');

videos.forEach(video => {
  video.addEventListener('play', () => {
    console.log(`Now playing: ${video.querySelector('source').src}`);
  });
});

// Optional: Scroll smoothly to section (if you add matching IDs in HTML)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
