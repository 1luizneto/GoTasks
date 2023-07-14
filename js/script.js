const table = document.getElementById('table-body');
const modal = document.getElementById('modal');
const form = document.getElementById('form');
const inputDescriptioon = document.getElementById('description');
const inputDate = document.getElementById('date');
const loadingMessage = document.getElementById('loading-message');
const countTasks = document.getElementById('count-tasks');
const btnCreateTask = document.getElementById('btn-create-task');


function toggleModal() {
    modal.classList.toggle('modal-visible');
}

function clearFields() {
    inputDate.value = '';
    inputDescriptioon.value = '';
}


btnCreateTask.addEventListener('click', createTask);

function createTask(e) {
    e.preventDefault();

    if (!inputDescriptioon.value || !inputDate.value) {
        alert('Preencha todos os campos!');
        return;
    }

    const newTaks = {
        description: inputDescriptioon.value,
        date: new Date(inputDate.value).toLocaleDateString('pt-BR', {timeZone: 'UTC'}),
        id: Math.floor(Math.random() * 10000)
    }

    const allTasks = loadTasks();

    localStorage.setItem('@GoTasks', JSON.stringify([...allTasks, newTaks]));

    toggleModal();
    clearFields();
}

function loadTasks() {
    return JSON.parse(localStorage.getItem('@GoTasks')) || [];
}

function upadateCountTasks(){
    const allTasks = loadTasks();
    countTasks.innerHTML = allTasks.length;
}