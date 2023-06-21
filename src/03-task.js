const CODE_TASK1 = '3';

const formEl = document.querySelector('.task_01_form');
const closeButtonModal = document.querySelector('.modal-button');

formEl.addEventListener('submit', e => {
  e.preventDefault();

  const inputEl = formEl.querySelector('input[name="code"]');
  const userInput = inputEl.value;

  if (userInput === CODE_TASK1) {
    document.body.classList.add('show-modal');

    localStorage.setItem('task3Completed', true);
  } else {
    alert('Не правильний код ❌');
  }
});

closeButtonModal.addEventListener('click', () => {
  document.body.classList.remove('show-modal');
});
