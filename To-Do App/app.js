document.addEventListener('DOMContentLoaded', loadTasks);

function loadTasks() {
    const taskList = document.getElementById('taskList');
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    taskList.innerHTML = '';
    
    tasks.forEach(task => {
        addTaskToDOM(task);
    });
}

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        const task = { text: taskText, done: false };

        const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks.push(task);

        localStorage.setItem('tasks', JSON.stringify(tasks));

        addTaskToDOM(task);
        taskInput.value = '';
    }
}

function addTaskToDOM(task) {
    const taskList = document.getElementById('taskList');
    const li = document.createElement('li');
    li.innerHTML = `
        <span>${task.text}</span>
        <button onclick="removeTask('${task.text}')">Remove</button>
    `;
    
    if (task.done) {
        li.classList.add('done');
    }

    li.addEventListener('click', () => {
        task.done = !task.done;
        const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        localStorage.setItem('tasks', JSON.stringify(tasks));
        loadTasks();
    });

    taskList.appendChild(li);
}

function removeTask(taskText) {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const filteredTasks = tasks.filter(task => task.text !== taskText);
    localStorage.setItem('tasks', JSON.stringify(filteredTasks));
    loadTasks();
}
