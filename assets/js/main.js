const navToggle = document.getElementById('nav-toggle');
const navItem = document.querySelectorAll('.nav__item');
const contactKakao = document.getElementById('contact-kakao');
const contactPhone = document.getElementById('contact-phone');

// 모바일 버전 nav 토글
navToggle.addEventListener('click', () => {
  const nav = document.getElementById('nav');

  nav.classList.toggle('show-nav');
});

// 메뉴 클릭시 토글 닫기
function closeToggle() {
  nav.classList.remove('show-nav');
}
navItem.forEach((item) => item.addEventListener('click', closeToggle));

// 카카오톡 메세지 표시 및 삭제
contactKakao.addEventListener('mouseover', () => {
  contactKakao.nextSibling.nextSibling.classList.add('show-kakao');
});
contactKakao.addEventListener('mouseout', () => {
  setTimeout(() => {
    contactKakao.nextSibling.nextSibling.classList.remove('show-kakao');
  }, 2000);
});

// 휴대폰번호 메세지 표시
contactPhone.addEventListener('mouseover', () => {
  contactPhone.lastChild.classList.add('show-phone');
});
contactPhone.addEventListener('mouseout', () => {
  contactPhone.lastChild.classList.remove('show-phone');
});

// Scroll Reveal
// const sr = ScrollReveal({
//   distance: '60px',
//   duration: 2000,
//   // reset: true,
// });

// sr.reveal(`header, .header__anchors, .header__title, .nav__toggle`, {
//   origin: 'top',
//   // interval: 100,
// });

// function scrollActive(){

// }

// window.addEventListener('scroll', scrollActive)

// ScrollReveal().reveal('header');
// ScrollReveal().reveal('.home', { delay: 500 });
// ScrollReveal().reveal('.about', { delay: 500 });
// ScrollReveal().reveal('.skills', { delay: 500 });
// ScrollReveal().reveal('.projects', { delay: 500 });
// ScrollReveal().reveal('.contact', { delay: 500 });

//
// const sections = document.querySelectorAll('section[id]');

// function scrollActive() {
//   const scrollY = window.pageYOffset;

//   sections.forEach((current) => {
//     const sectionHeight = current.offsetHeight;
//     const sectionTop = current.offsetTop - 50;
//     sectionId = current.getAttribute('id');

//     if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
//       document
//         .querySelector('.nav__menu a[href*=' + sectionId + ']')
//         .classList.add('active');
//     } else {
//       document
//         .querySelector('.nav__menu a[href*=' + sectionId + ']')
//         .classList.remove('active');
//     }
//   });
// }
// window.addEventListener('scroll', scrollActive);

/*===== SCROLL REVEAL ANIMATION =====*/
// const sr = ScrollReveal({
//   origin: 'top',
//   distance: '60px',
//   duration: 2000,
//   delay: 200,
//   //     reset: true
// });

// sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text', {});
// sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img', {
//   delay: 400,
// });
// sr.reveal('.home__social-icon', { interval: 200 });
// sr.reveal('.skills__data, .work__img, .contact__input', { interval: 200 });
