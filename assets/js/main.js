const navToggle = document.getElementById('nav-toggle');
const navItem = document.querySelectorAll('.nav__item');

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
