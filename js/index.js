const table = document.getElementById('table-body');
const form = document.getElementById('form');
const loadingMessage = document.getElementById('loading-message');
const countTasks = document.getElementById('count-tasks');

function loadTasks() {
    return getTasks() || [];
}

function upadateCountTasks(){
    const allTasks = loadTasks();
    countTasks.innerHTML = allTasks.length;
}


