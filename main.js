document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let hasErrors = false;

    document.getElementById('firstNameError').innerText = '';
    document.getElementById('lastNameError').innerText = '';
    document.getElementById('emailError').innerText = '';
    document.getElementById('passwordError').innerText = '';
    document.getElementById('successMessage').innerText = '';

    const firstName = document.getElementById('firstName').value;
    if (firstName.trim() === '') {
        document.getElementById('firstNameError').innerText = 'Imię jest wymagane.';
        hasErrors = true;
    }

    const lastName = document.getElementById('lastName').value;
    if (lastName.trim() === '') {
        document.getElementById('lastNameError').innerText = 'Nazwisko jest wymagane.';
        hasErrors = true;
    }

    const email = document.getElementById('email').value;
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (email.trim() === '') {
        document.getElementById('emailError').innerText = 'Email jest wymagany.';
        hasErrors = true;
    } else if (!emailPattern.test(email)) {
        document.getElementById('emailError').innerText = 'Nieprawidłowy format email.';
        hasErrors = true;
    }

    const password = document.getElementById('password').value;
    const passwordPattern = /^(?=.*[a-zA-Z])(?=.*\d).{8,}$/;
    if (password.trim() === '') {
        document.getElementById('passwordError').innerText = 'Hasło jest wymagane.';
        hasErrors = true;
    } else if (!passwordPattern.test(password)) {
        document.getElementById('passwordError').innerText = 'Hasło musi mieć co najmniej 8 znaków, zawierać cyfry i litery.';
        hasErrors = true;
    }

    if (!hasErrors) {
        document.getElementById('successMessage').innerText = 'Rejestracja zakończona sukcesem!';
    }
});