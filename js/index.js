const table = document.getElementById('table-body');
const form = document.getElementById('form');
const loadingMessage = document.getElementById('loading-message');
const countTasks = document.getElementById('count-tasks');


function upadateCountTasks() {
    const allTasks = getTasks();
    countTasks.innerHTML = allTasks.length;
}

function fillTable() {
    const allTasks = getTasks();
    allTasks.forEach(addTask)

    if (allTasks.length === 0) {
        loadingMessage.innerHTML = "Você não tem nenhuma tarefa!";
    } else {
        loadingMessage.innerHTML = "";
    }

    upadateCountTasks();
}

function addTask(task){
    const tr = document.createElement('tr');
    tr.innerHTML = innerHtmlTasks(task);

    table.appendChild(tr);
}

function innerHtmlTasks(task) {
    return `
    <td>${task.description}</td>
    <td>${task.date}</td>
    <td>
        <a href="#" onclick="removeTask(${task.id})">
            <i class="fas fa-trash"></i>
        </a>
    </td>
    `;
}

function removeTask(id){
    const allTasks = getTasks();
    const tasksFiltered = allTasks.filter(task => task.id !== id);

    setTasks(tasksFiltered);
    reload();
}


function reload(){
    table.innerHTML = '';
    fillTable();
}

