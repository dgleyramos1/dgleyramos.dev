/*=============== Active navLink =============== */
const navlink = document.querySelectorAll('.nav__link');

function activeNavlink(){
  navlink.forEach((a) => a.classList.remove('active-link'));
  this.classList.add('active-link');
}

navlink.forEach((a) => a.addEventListener('click', activeNavlink))


/*=============== Active Link =============== */
const linkWork = document.querySelectorAll('.category__btn');

function activeWork(){
  linkWork.forEach((a) => a.classList.remove('active-work'));
  this.classList.add('active-work');
}

linkWork.forEach((a) => a.addEventListener('click', activeWork))

/*=============== Mixitup Filter =============== */
let mixerProjects = mixitup('.projects__container', {
  selectors: {
    target: '.project__item',
  },
  animation: {
    duration: 300
  },
});

