const openBtn = document.querySelector('#open-btn');
const closedBtn = document.querySelector('#close-btn');
const sideNav = document.querySelector('nav');

openBtn.addEventListener('click', function() {
  sideNav.classList.add('openOut')
})
closedBtn.addEventListener('click', function() {
  sideNav.classList.remove('openOut')
})
