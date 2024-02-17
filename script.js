const btn = document.getElementById('menu-btn');
const overlay = document.getElementById('overlay');
const mobileMenuanimationn = document.getElementById('mobile-menu');

btn.addEventListener('click', navToggle);


function navToggle() {
  btn.classList.toggle('open');
  overlay.classList.toggle('overlay-show');
  document.body.classList.toggle('stop-scrolling');
  mobileMenuanimationn.classList.toggle('mobile-animaton');


}
