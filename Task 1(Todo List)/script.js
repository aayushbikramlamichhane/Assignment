const todoList = document.getElementById('todoList');
const addBtn = document.querySelector('.addBtn');
const filterButtons = document.querySelectorAll('.filterBtn');

// loading todos
function loadTodos() {
    const storedTodos = localStorage.getItem('todos');
    return storedTodos ? JSON.parse(storedTodos) : [];
}

let todos = loadTodos();

// Function to display todos
function displayTodos(filter = 'all') {
    const filteredTodos = todos.filter((todo) => filter === 'all' || todo.status === filter);

    todoList.innerHTML = filteredTodos.map((todo, index) => {
        let statusBtn = '';
        if (todo.status === 'pending') {
            statusBtn = `<button class="completeBtn" onclick="updateStatus(${index})">Mark as Complete</button>`;
        } else {
            statusBtn = `<span>Completed</span>`;
        }
    
        return `
            <li class="todoItem ${todo.status === 'completed' ? 'completed' : ''}">
                <div>
                    <strong>${todo.name}</strong><br>
                    <small>${todo.description}</small>
                </div>
                <div>
                    ${statusBtn}
                    <button onclick="editTodo(${index})" ${todo.status === 'completed' ? 'disabled' : ''}>Edit</button>
                    <button onclick="deleteTodo(${index})">Delete</button>
                </div>
            </li>
        `;
    }).join("");
}



// function to update status
function updateStatus(index) {
    todos[index].status = 'completed';
    localStorage.setItem('todos', JSON.stringify(todos));
    displayTodos();
}

// function to add todo
function addTodo() {
    const todoName = document.getElementById('todoName').value;
    const todoDesc = document.getElementById('todoDesc').value;

    if (todoName.trim() === '' || todoDesc.trim() === '') {
        alert("Please fill out required fields");
        return;
    }
    todos.push({ name: todoName, description: todoDesc, status: 'pending' });
    localStorage.setItem('todos', JSON.stringify(todos));
    displayTodos();
    document.getElementById('todoName').value = '';
    document.getElementById('todoDesc').value = '';
}

// function to edit todos
function editTodo(index) {
    const todo = todos[index];
    const todoItem = document.querySelectorAll('.todoItem')[index];
    todoItem.innerHTML = `
        <div>
            <input type="text" id="editName${index}" value="${todo.name}" />
            <input type="text" id="editDescription${index}" value="${todo.description}" />
        </div>
        <div>
            <button onclick="saveEdit(${index})">Save</button>
            <button onclick="displayTodos()">Cancel</button>
        </div>
    `;
}

// function to save todos
function saveEdit(index) {
    const newName = document.getElementById(`editName${index}`).value;
    const newDescription = document.getElementById(`editDescription${index}`).value;

    if (newName.trim() && newDescription.trim()) {
        todos[index].name = newName;
        todos[index].description = newDescription;
        localStorage.setItem('todos', JSON.stringify(todos));
        displayTodos(); 
    } else {
        alert('Fields cannot be empty!');
    }
}

// function to delete todos
function deleteTodo(index) {
    todos.splice(index, 1);
    localStorage.setItem('todos', JSON.stringify(todos));
    displayTodos();
}

// Function to filter todos and highlight active button
function filterTodos(filter) {
    // Remove active class from all filter buttons
    filterButtons.forEach(btn => {
        btn.classList.remove('active');
    });
    // Add active class to clicked button
    const filterBtn = document.querySelector(`.filterBtn[value="${filter}"]`);
    filterBtn.classList.add('active');
    // Display filtered todos
    displayTodos(filter);
}
// Initial display with 'All' filter active
filterTodos('all');