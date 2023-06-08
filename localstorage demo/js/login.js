let email = document.getElementById('email');
let password = document.getElementById('password');
const loginForm = document.getElementById('login-form');

loginForm.addEventListener('submit', function(e){
    e.preventDefault();

    correctEmail = email.value.trim();
    correctPassword = password.value.trim();

    if (correctEmail === localStorage.getItem('email') && correctPassword === localStorage.getItem('password')) {
        window.location.href = 'member.html';
    }
});