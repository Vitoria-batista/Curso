function addTask() {
    const input = document.getElementById('todo-input');
    const taskText = input.value.trim();

    if (taskText === '') {
        alert('Por favor, insira uma tarefa!');
        return;
    }

    const ul = document.getElementById('todo-list');
    const li = document.createElement('li');
    li.innerHTML = `${taskText} <button onclick="removeTask(this)">Remover</button>`;
    ul.appendChild(li);

    input.value = '';  // Limpa o campo de input
}

function removeTask(button) {
    const li = button.parentElement;
    li.remove();
}