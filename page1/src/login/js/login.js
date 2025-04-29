
const loginButton = document.getElementById('loginButton');
const loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', function(event) {
  event.preventDefault(); 


  window.location.href = "../../src/home/home.html"; 
});
