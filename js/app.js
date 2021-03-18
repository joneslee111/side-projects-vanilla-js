
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

todoButton.addEventListener('click', addToDo)

function addToDo(event) {
    // Prevent form from submitting
    event.preventDefault();
    // To do div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    // Create a li element
    const newToDo = document.createElement('li');
    newToDo.innerText = 'test';
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

}
