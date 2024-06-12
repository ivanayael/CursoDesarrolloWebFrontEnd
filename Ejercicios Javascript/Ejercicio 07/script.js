// script.js
document.getElementById('add-task').addEventListener('click', addTask);

function addTask() {
    const taskInput = document.getElementById('new-task');
    const taskText = taskInput.value.trim();
    
    if (taskText === '') {
        return;
    }
    
    const taskList = document.getElementById('task-list');
    const newTask = document.createElement('li');
    const taskSpan = document.createElement('span');
    taskSpan.textContent = taskText;
    taskSpan.addEventListener('click', toggleTask);
    
    const editButton = document.createElement('button');
    editButton.textContent = 'Editar';
    editButton.addEventListener('click', editTask);
    
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Borrar';
    deleteButton.addEventListener('click', deleteTask);
    
    newTask.appendChild(taskSpan);
    newTask.appendChild(editButton);
    newTask.appendChild(deleteButton);
    
    taskList.appendChild(newTask);
    
    taskInput.value = '';
}

function toggleTask(event) {
    const taskItem = event.target.parentElement;
    taskItem.classList.toggle('completed');
}

function editTask(event) {
    const taskItem = event.target.parentElement;
    const taskSpan = taskItem.querySelector('span');
    const newTaskText = prompt('Editar tarea:', taskSpan.textContent);
    
    if (newTaskText !== null && newTaskText.trim() !== '') {
        taskSpan.textContent = newTaskText.trim();
    }
}

function deleteTask(event) {
    const taskItem = event.target.parentElement;
    taskItem.remove();
}
