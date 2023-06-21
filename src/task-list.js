const taskLinkeItem2 = document.querySelector('.task-link-2');
const taskLinkeItem3 = document.querySelector('.task-link-3');
const taskLinkeItem4 = document.querySelector('.task-link-4');

const task1Completed = localStorage.getItem('task1Completed');
const task2Completed = localStorage.getItem('task2Completed');
const task3Completed = localStorage.getItem('task3Completed');

if (task1Completed === 'true') {
  taskLinkeItem2.classList.remove('locked');
}
if (task2Completed === 'true') {
  taskLinkeItem3.classList.remove('locked');
}
if (task3Completed === 'true') {
  taskLinkeItem4.classList.remove('locked');
}
