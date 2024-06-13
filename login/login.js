document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    document.querySelector('.loader').style.display = 'inline';

    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    const storedEmail = localStorage.getItem('userEmail');
    const storedPassword = localStorage.getItem('userPassword');

    setTimeout(function() {
        if (email === storedEmail && password === storedPassword) {
            window.location.href = 'pages/page1.html';
        } else {
            document.getElementById('message').textContent = 'Invalid email or password.';
            document.querySelector('.loader').style.display = 'none';
        }
    }, 1000);
});

document.querySelector('.toggle-password').addEventListener('click', function () {
    const passwordInput = document.getElementById('password');
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);
});
