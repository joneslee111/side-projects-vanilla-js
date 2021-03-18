
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filterOption = document.querySelector('.filter-todo');


todoButton.addEventListener('click', addToDo);
todoList.addEventListener('click', deleteCheck);
filterOption.addEventListener('change', filterToDo);


function addToDo(event) {
    // Prevent form from submitting
    event.preventDefault();
    // To do div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    // Create a li element
    const newToDo = document.createElement('li');
    newToDo.innerText = todoInput.value;
    newToDo.classList.add('todo-item');

    todoDiv.appendChild(newToDo); // puts newToDo in the todoDiv => div with an li node 
    //Check mark button
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-clipboard-check"></i>';
    completedButton.classList.add('complete-btn');
    todoDiv.appendChild(completedButton);
    // trash button
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash-alt"></i>';
    trashButton.classList.add('trash-btn');
    todoDiv.appendChild(trashButton); 
    // append to list
    todoList.appendChild(todoDiv);
    // Clear todo Input value
    todoInput.value = '';
}

function deleteCheck(e) {
    const item = e.target;
    // Delete todo
    if (item.classList[0] === 'trash-btn') {
        const todo = item.parentElement;
        // animation
        todo.classList.add('fall');
        todo.addEventListener('transtitioned', function() {
            todo.remove();
        });  
    }
    // check mark
    if (item.classList[0] === 'complete-btn') {
        const todo = item.parentElement;
        todo.classList.toggle('completed');
    }
}

function filterToDo(e) {
    const todos = todoList.childNodes;
    todos.forEach(function(todo) {
        switch (e.target.value) {
            case "all":
                todo.style.display = 'flex';
                break;
            case "completed":
                if (todo.classList.contains('completed')) {
                    todo.style.display = 'flex';
                } else {
                    todo.style.display = 'none';
                }
                break;
            case 'uncompleted':
                if (!todo.classList.contains('completed')) {
                    todo.style.display = 'flex';
                } else {
                    todo.style.display = 'none';
                    }
                break;
        }
    });
}
