//test
document.addEventListener('DOMContentLoaded', function () {
  const text =
    'Якщо ж в тебе є інтерес дізнатись, то тобі прийдеться пройти деякі випробування і витратити на це час. Згода? 🙃';
  let index = 0;
  const typingTextElement = document.getElementById('typing-text');
  const trueBtn = document.querySelector('.hero-btn.true');
  const falseBtn = document.querySelector('.hero-btn.false');

  function type() {
    typingTextElement.textContent += text[index];
    index++;

    if (index < text.length) {
      setTimeout(type, 50); // Швидкість печатання - затримка між символами
    } else {
      // Після завершення набору тексту, викликаємо анімацію кнопок
      trueBtn.classList.add('comeback');
      falseBtn.classList.add('comeback');
    }
  }

  type();
});

//welcome buttons
const trueBtn = document.querySelector('.hero-btn.true');
const falseBtn = document.querySelector('.hero-btn.false');

trueBtn.addEventListener('click', () => {
  window.location.href = './task-list.html';
});
falseBtn.addEventListener('click', () => {
  window.location.href = './false.html';
});
