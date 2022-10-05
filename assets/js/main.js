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
  console.log('ss');
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
