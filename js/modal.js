const inputDescriptioon = document.getElementById('description');
const inputDate = document.getElementById('date');
const modal = document.getElementById('modal');
const alertElement = document.getElementById('alert');
const btnCreateTask = document.getElementById('btn-create-task');

function createTask(e) {
    e.preventDefault();

    if (!inputDescriptioon.value || !inputDate.value) {
        alertElement.style.display = 'block';
        closeAlert();
        return;
    }

    const newTaks = {
        description: inputDescriptioon.value,
        date: new Date(inputDate.value).toLocaleDateString('pt-BR', {timeZone: 'UTC'}),
        id: Math.floor(Math.random() * 10000)
    }

    const allTasks = getTasks();

    setTasks([...allTasks, newTaks]);

    reload();
    toggleModal();
    clearFields();
}

function toggleModal() {
    modal.classList.toggle('modal-visible');
}

function clearFields() {
    inputDate.value = '';
    inputDescriptioon.value = '';
}

function closeAlert(){
    setTimeout(() => {
        alertElement.style.display = 'none'
    }, 3000)
}

btnCreateTask.addEventListener('click', createTask);