const taskText = document.getElementById('taskInput');
const taskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

taskBtn.addEventListener('click', () => {
  if (taskText.value == "") {
    alert('Please enter a task');
  } else {
    let newElement = document.createElement('li');
    newElement.innerHTML = `<span class="task">${taskText.value}</span><button class="cancel-btn">X</button>`;
    taskList.appendChild(newElement);
    taskText.value = '';
  }
});

taskList.addEventListener('click', (event) => {
  if (event.target.classList.contains('cancel-btn')) {
    event.target.parentNode.remove();
  }
});
