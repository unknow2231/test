const CODE_TASK1 = '3';

const formEl = document.querySelector('.task_01_form');

formEl.addEventListener('submit', e => {
  e.preventDefault();

  const inputEl = formEl.querySelector('input[name="code"]');
  const userInput = inputEl.value;

  if (userInput === CODE_TASK1) {
    alert('Cool');
  } else {
    alert('No cool!!');
  }
});
