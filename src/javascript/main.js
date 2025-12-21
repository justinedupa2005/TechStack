const accountIcon = document.getElementById('account-icon');
const hamburgerIcon = document.getElementById('hamburger-icon');
const menu = document.getElementById('menu');

accountIcon.addEventListener('click', () => {
  window.location.href = "../html/sign-up.html";
});


hamburgerIcon.addEventListener('click', () => {
  menu.classList.toggle('active');
});