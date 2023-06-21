// autirization
document.addEventListener('DOMContentLoaded', function () {
  var loginForm = document.querySelector('.welcome_form');

  loginForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission

    var loginInput = document.querySelector('input[name="login"]');
    var passwordInput = document.querySelector('input[name="password"]');

    var loginValue = loginInput.value.trim();
    var passwordValue = passwordInput.value.trim();

    if (loginValue === 'admin' && passwordValue === 'password') {
      alert('Успішна авторизація. Переход на іншу сторінку...');
      window.location.href = 'welcome.html'; // Замініть "ім'я_сторінки.html" на шлях до вашої сторінки
    } else {
      alert('Неправильний логін або пароль. Будь ласка, спробуйте знову.');
    }
  });
});

//welcome
