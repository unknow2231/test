import"./modulepreload-polyfill-ec808ebb.js";/* empty css               */document.addEventListener("DOMContentLoaded",function(){var e=document.querySelector(".welcome_form");e.addEventListener("submit",function(t){t.preventDefault();var n=document.querySelector('input[name="login"]'),o=document.querySelector('input[name="password"]'),r=n.value.trim(),a=o.value.trim();r==="admin"&&a==="password"?(alert("Успішна авторизація. Переход на іншу сторінку..."),window.location.href="welcome.html"):alert("Неправильний логін або пароль. Будь ласка, спробуйте знову.")})});