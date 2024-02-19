const btn = document.getElementById('menu-btn');
const overlay = document.getElementById('overlay');
const mobileMenuanimationn = document.getElementById('mobile-menu');
const counters = document.querySelectorAll('.counter');
document.addEventListener('scroll',scrollpage);

let scrollStarted = false;

btn.addEventListener('click', navToggle);


function navToggle() {
  btn.classList.toggle('open');
  overlay.classList.toggle('overlay-show');
  document.body.classList.toggle('stop-scrolling');
  mobileMenuanimationn.classList.toggle('mobile-animaton');


}

function scrollpage(){
  const scrollpos = window.scrollY;

  if(scrollpos > 100 && !scrollStarted){
    countUp();
    scrollStarted = true;
  }
  else if(scrollpos < 100 && scrollStarted){
    reset();
    scrollStarted = false;
  }
}

// Assuming you have an array of elements with class "counter"


function countUp() {
  counters.forEach(counter => {
    counter.innerText = '0';

    function updateCounter() {
      const target = +counter.getAttribute('data-target');
      let c = +counter.innerText;

      const increment = target / 100;

      if (c < target) {
        counter.innerText = `${Math.ceil(c + increment)}`;
        setTimeout(updateCounter, 75);
      } else {
        counter.innerText = target;
      }
    }

    updateCounter();
  });
}

function reset() {
  counters.forEach((counter) => (counter.innerHTML = '0'));
}
