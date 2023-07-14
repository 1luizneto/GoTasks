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
        <a href="#" onclick="">
            <i class="fas fa-trash"></i>
        </a>
    </td>
    `;
}


