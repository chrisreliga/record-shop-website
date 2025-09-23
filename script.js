const navMenu = document.getElementById('nav-menu-list');
const navBar = document.getElementById('nav-bar');

navMenu.addEventListener('click', (e) => {
  if (e.target.classList.contains('nav-menu-item')) {
    console.log('menu');
  }
});
