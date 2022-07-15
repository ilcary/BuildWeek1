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
    550: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    991: {
      slidesPerView: 4,
    },
  },
});

/*==========================================menu hamburger=====================================*/

function plsStick(elemento) {
  let getSticky = document.querySelector(elemento);
  let headerHeight = document.querySelector('#bgheader').clientHeight;
  let navHeight = document.querySelector('#home').clientHeight;
  let correctHeight = headerHeight - navHeight;

  if (document.body.scrollTop > correctHeight &&
    !getSticky.classList.contains('sticked')) {
    getSticky.classList.add('sticked');
  } else if (document.body.scrollTop < correctHeight - 1) {
    getSticky.classList.remove('sticked');
  }
  console.log(getSticky)
  console.log(document.body.scrollTop)
  console.log(navHeight)
  console.log(headerHeight)
}

window.addEventListener("scroll", function () { plsStick('#home') });
/*==============================================ANIMAZIONI===============================*/

function reveal() {
  let reveals = document.querySelectorAll(".reveal");

  for (let i = 0; i < reveals.length; i++) {
    let windowHeight = window.innerHeight;
    //window.innerHeight mi da l'altezza del  viewport.

    let elementTop = reveals[i].getBoundingClientRect().top;
    //getBoundingClientRect().top mi da la distanza dal top della viewport

    let elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);

//prova
/*
let section = document.querySelectorAll('section');//seleziono tutte le section
let menu = document.querySelectorAll('.menuref');//seleziono tutte le voci del menù
console.log(menu)

window.onscroll = () => {
  let top = window.scrollY;//mi da il valoore in px di quanto ho scrollato dal top del document
  console.log('questa è la scroll = '+top)
  section.forEach(i => {
    let offset = i.offsetTop -150; //offsetTop property mi da la posizione top relativa al parent in px
    console.log(offset)
    let height = i.offsetHeight ;// offsetHeight mi da l'altezza dell'elemento includendo borders, padding, and horizontal scrollbars..
    console.log(height)
    let id = i.id; //prendiamo l'id di ogni sezione
    if (top >= offset && top < offset + height) {    
        let menuitem = document.querySelector('.menuref[href="#' + id + '"]')//andiamo a selezionare la voce del menu con lo stesso id 
        if(menuitem){
          document.querySelector('.sottolineato').classList.remove('sottolineato')
          menuitem.classList.add('sottolineato');//gli diamo la classe per essere sottolineato
          }
    }
  });
};

console.log(document.querySelector('#menu-price').offsetHeight)*/

// ci sono troppi conflitti con sfondi , section e css in generale per farlo funzionare in modo preciso, volendo funziona ma sfalzato





console.log('larghezza client ' + window.innerWidth)

window.onscroll = () => {

  if(window.innerWidth > 992){
  let top = window.scrollY;
  console.log('distanza scrollata ' + top)
  if (top <= 200) {
    let menuitem = document.querySelector('.menuref[href="#"]')
    console.log('menu ' + menuitem)
    console.log('distanza scrollata menu  ' + top)
    if (menuitem) {
      document.querySelector('.sottolineato').classList.remove('sottolineato')
      menuitem.classList.add('sottolineato');//gli diamo la classe per essere sottolineato
    }

  } else if (200 < top && top <= 900) {
    let menuitem = document.querySelector('.menuref[href="#About_Us"]')
    console.log('about us ' + menuitem)
    console.log('distanza scrollata about ' + top)
    if (menuitem) {
      document.querySelector('.sottolineato').classList.remove('sottolineato')
      menuitem.classList.add('sottolineato');//gli diamo la classe per essere sottolineato
    }

  } else if (900 <= top && top < 1600) {
    let menuitem = document.querySelector('.menuref[href="#blogunico"]')
    console.log('blogunico ' + menuitem)
    console.log('distanza scrollata blog ' + top)
    if (menuitem) {
      document.querySelector('.sottolineato').classList.remove('sottolineato')
      menuitem.classList.add('sottolineato');//gli diamo la classe per essere sottolineato
    }

  } else if (1600 < top && top <= 2700) {
    let menuitem = document.querySelector('.menuref[href="#menu-price"]')
    if (menuitem) {
      document.querySelector('.sottolineato').classList.remove('sottolineato')
      menuitem.classList.add('sottolineato');//gli diamo la classe per essere sottolineato
    }

  } else if (2700 < top && top <= 3400) {
    let menuitem = document.querySelector('.menuref[href="#newsletter"]')
    if (menuitem) {
      document.querySelector('.sottolineato').classList.remove('sottolineato')
      menuitem.classList.add('sottolineato');//gli diamo la classe per essere sottolineato
    }

  } else {
    let menuitem = document.querySelector('.menuref[href="#contact"]')
    if (menuitem) {
      document.querySelector('.sottolineato').classList.remove('sottolineato')
      menuitem.classList.add('sottolineato');//gli diamo la classe per essere sottolineato
    }
    }
  } else if (window.innerWidth < 992 && window.innerWidth >= 768){//==============TABLET======================
    let top = window.scrollY;
  console.log('distanza scrollata ' + top)
  if (top <= 350) {
    let menuitem = document.querySelector('.menuref[href="#"]')
    console.log('menu ' + menuitem)
    console.log('distanza scrollata menu  ' + top)
    if (menuitem) {
      document.querySelector('.sottolineato').classList.remove('sottolineato')
      menuitem.classList.add('sottolineato');//gli diamo la classe per essere sottolineato
    }

  } else if (350 < top && top <= 850) {
    let menuitem = document.querySelector('.menuref[href="#About_Us"]')
    console.log('about us ' + menuitem)
    console.log('distanza scrollata about ' + top)
    if (menuitem) {
      document.querySelector('.sottolineato').classList.remove('sottolineato')
      menuitem.classList.add('sottolineato');//gli diamo la classe per essere sottolineato
    }

  } else if (850 <= top && top < 2600) {
    let menuitem = document.querySelector('.menuref[href="#blogunico"]')
    console.log('blogunico ' + menuitem)
    console.log('distanza scrollata blog ' + top)
    if (menuitem) {
      document.querySelector('.sottolineato').classList.remove('sottolineato')
      menuitem.classList.add('sottolineato');//gli diamo la classe per essere sottolineato
    }

  } else if (2600 < top && top <= 4200) {
    let menuitem = document.querySelector('.menuref[href="#menu-price"]')
    if (menuitem) {
      document.querySelector('.sottolineato').classList.remove('sottolineato')
      menuitem.classList.add('sottolineato');//gli diamo la classe per essere sottolineato
    }

  } else if (4200 < top && top <= 5000) {
    let menuitem = document.querySelector('.menuref[href="#newsletter"]')
    if (menuitem) {
      document.querySelector('.sottolineato').classList.remove('sottolineato')
      menuitem.classList.add('sottolineato');//gli diamo la classe per essere sottolineato
    }

  } else {
    let menuitem = document.querySelector('.menuref[href="#contact"]')
    if (menuitem) {
      document.querySelector('.sottolineato').classList.remove('sottolineato')
      menuitem.classList.add('sottolineato');//gli diamo la classe per essere sottolineato
    }
    }
  } else if (window.innerWidth < 768){ //=============MOBILE=======================
    let top = window.scrollY;
  console.log('distanza scrollata ' + top)
  if (top <= 420) {
    let menuitem = document.querySelector('.menuref[href="#"]')
    console.log('menu ' + menuitem)
    console.log('distanza scrollata menu  ' + top)
    if (menuitem) {
      document.querySelector('.sottolineato').classList.remove('sottolineato')
      menuitem.classList.add('sottolineato');//gli diamo la classe per essere sottolineato
    }

  } else if (420 < top && top <= 1052) {
    let menuitem = document.querySelector('.menuref[href="#About_Us"]')
    console.log('about us ' + menuitem)
    console.log('distanza scrollata about ' + top)
    if (menuitem) {
      document.querySelector('.sottolineato').classList.remove('sottolineato')
      menuitem.classList.add('sottolineato');//gli diamo la classe per essere sottolineato
    }

  } else if (1052 <= top && top < 3684) {
    let menuitem = document.querySelector('.menuref[href="#blogunico"]')
    console.log('blogunico ' + menuitem)
    console.log('distanza scrollata blog ' + top)
    if (menuitem) {
      document.querySelector('.sottolineato').classList.remove('sottolineato')
      menuitem.classList.add('sottolineato');//gli diamo la classe per essere sottolineato
    }

  } else if (3684 < top && top <= 5578) {
    let menuitem = document.querySelector('.menuref[href="#menu-price"]')
    if (menuitem) {
      document.querySelector('.sottolineato').classList.remove('sottolineato')
      menuitem.classList.add('sottolineato');//gli diamo la classe per essere sottolineato
    }

  } else if (5578 < top && top <= 6315) {
    let menuitem = document.querySelector('.menuref[href="#newsletter"]')
    if (menuitem) {
      document.querySelector('.sottolineato').classList.remove('sottolineato')
      menuitem.classList.add('sottolineato');//gli diamo la classe per essere sottolineato
    }

  } else {
    let menuitem = document.querySelector('.menuref[href="#contact"]')
    if (menuitem) {
      document.querySelector('.sottolineato').classList.remove('sottolineato')
      menuitem.classList.add('sottolineato');//gli diamo la classe per essere sottolineato
    }
    }
  }
}




