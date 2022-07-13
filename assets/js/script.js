/*==================================SLIDESHOW=====================================*/

var swiper = new Swiper(".slide-content", {
  slidesPerView: 3,
  spaceBetween: 25,
  loop: true,
  centerSlide: 'true',
  fade: 'true',
  grabCursor: 'true',
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    520: {
      slidesPerView: 3,
    },
    920: {
      slidesPerView: 4,
    },
  },
});

/*==========================================menu hamburger=====================================*/

function plsStick(elemento){
  let getSticky = document.querySelector(elemento);
  let headerHeight = document.querySelector('#bgheader').clientHeight;
  let navHeight = document.querySelector('#home').clientHeight;
  let correctHeight = headerHeight - navHeight;

  if(document.body.scrollTop > correctHeight && 
      !getSticky.classList.contains('sticked')){
      getSticky.classList.add('sticked');
  }else if(document.body.scrollTop < correctHeight - 1){
      getSticky.classList.remove('sticked');
  }
  console.log(getSticky)
  console.log(document.body.scrollTop)
}


/*==============================================ANIMAZIONI========MENU=============================*/

function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);


