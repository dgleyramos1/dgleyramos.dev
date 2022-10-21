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

/*=============== Testimonials Swiper =============== */
let swiper = new Swiper('.testimonial__container', {
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
  },
  mousewheel: true,
  keyboard: true,
})


/*=============== Contact Form =============== */
const contactForm = document.getElementById('contact-form'),
      contactName = document.getElementById('contact-name'),
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
})