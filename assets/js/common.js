/*=============== Show Menu =============== */
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close');

/*===== Menu Show =====*/
/* Validate if constant exists */
if(navToggle){
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu');
  });
}

/*===== Hide Show =====*/
/* Validate if constant exists */
if(navClose){
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
  });
}

/*=============== Remove Menu Mobile =============== */
const navLink = document.querySelectorAll('.nav__link');

function linkAction(){
  const navMenu = document.getElementById('nav-menu');

  // when we click on each link, we remove the show-menu class
  navMenu.classList.remove('show-menu')
}

navLink.forEach((n) => n.addEventListener('click', linkAction))


/*=============== Background Header =============== */
function scrollHeader(){
  const header = document.getElementById('header');
  // when the scroll is greater than 50 viewport height, add scrooll-header class to header tag
  if(this.scrollY >=50){
    header.classList.add('scroll-header');
  }else{
    header.classList.remove('scroll-header');
  }
}

window.addEventListener('scroll', scrollHeader);

/*=============== Contact Form =============== */
const contactName = document.getElementById('contact-name'),
      contactEmail = document.getElementById('contact-email'),
      Message = document.getElementById('message'),
      contactMessage = document.getElementById('contact-message'),
      send = document.getElementById('send');


send.addEventListener('click', (e) => {
  e.preventDefault();


  // Check if field has a value
  if(
    contactName.value === '' ||
    contactEmail.value === '' ||
    Message.value === ''
  ){
    // add and remove color
    contactMessage.classList.remove('color-light');
    contactMessage.classList.add('color-dark');


    //show message
    contactMessage.textContent = 'Preencha todos os campos'
  } else {
    // serviceID - tempateID - #form - publickey
    emailjs.sendForm(
      'service_hhr09gw',
      'template_zddbav3',
      '#contact-form',
      '8z13Bcb-5v9YrUDOS'
    ).then(() => {
      // Show message and add color
      contactMessage.classList.add('color-light');
      contactMessage.textContent = 'Mensagem enviada! ✔️';

      // remove message after 5 seconds
      setTimeout(() => {
        contactMessage.textContent = '';
      }, 5000);
    },
    (error) => {
      alert('OOPs! ALGO DEU ERRADO...', error)
    });

    // clear input fields
    contactName.value = '';
    contactEmail.value = '';
    Message.value = '';
  }
});

/*=============== Style Switcher =============== */
const styleSwitcherToggle = document.querySelector('.style__switcher-toggler'),
      styleSwitcher = document.querySelector('.style__switcher');

styleSwitcherToggle.addEventListener('click', () => {
  styleSwitcher.classList.toggle('open');
})
// hide switcher on scroll
window.addEventListener('scroll', () => {
  if(styleSwitcher.classList.contains('open')){
    styleSwitcher.classList.remove('open')
  }
});


const alternateStyles = document.querySelectorAll('.alternate-style');

function setActiveStyle(color){
  alternateStyles.forEach((style) => {
    if(color === style.getAttribute('title')){
      style.removeAttribute('disabled');
    } else {
      style.setAttribute('disabled', 'true')
    }
  })
}