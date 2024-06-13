document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();



    document.querySelector('.loader').style.display = 'inline';

    setTimeout(function() {

        const newEmail = document.getElementById('newEmail').value.trim();
        const newPassword = document.getElementById('newPassword').value.trim();


        if (newEmail && newPassword) {
            localStorage.setItem('userEmail', newEmail);
            localStorage.setItem('userPassword', newPassword);

            window.location.href = '../pages/page1.html';
        } else {
            document.getElementById('signupMessage').textContent = 'Please fill out all fields.';
        }
    }, 2000);
});
