const CODE = '8873';

const text =
  'Ти отримала число 29 54 709 поділи його на 333 \n там і буде відповідь, якщо не здогадалсь, введи в поле його';
let index = 0;
const typingTextElement = document.getElementById('typing-text');

const inputForm = document.querySelector('.last-task-form');

const closeButtonModal = document.querySelector('.modal-button');

function type() {
  typingTextElement.textContent += text[index];
  index++;

  if (index < text.length) {
    setTimeout(type, 50); // Швидкість печатання - затримка між символами
  } else {
    // Після завершення набору тексту, викликаємо анімацію кнопок
    inputForm.classList.add('active');
  }
}

type();

inputForm.addEventListener('submit', e => {
  e.preventDefault();

  const inputValue = e.target.elements.query.value;

  if (!inputValue) {
    return;
  }

  if (inputValue === CODE) {
    document.body.classList.add('show-modal');
    localStorage.setItem('modalOpen', true);
  } else {
    alert('❌ Не вірний код!');
  }

  inputForm.reset();
});

closeButtonModal.addEventListener('click', () => {
  document.body.classList.remove('show-modal');
  localStorage.removeItem('modalOpen');
});
