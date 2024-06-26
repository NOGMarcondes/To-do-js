// Seleção de elementos
const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");
const todoList = document.querySelector("#todo-list");
const editForm = document.querySelector("#edit-form");
const editInput = document.querySelector("#edit-input");
const cancelEditBtn = document.querySelector("#cancel-edit-btn");
let oldInputValue;

//Funçoes
const saveTodo = (text) =>{
    const todo = document.createElement('div')
    todo.classList.add('todo')

    const todoTitle = document.createElement("h3")
    todoTitle.innerText = text
    todo.appendChild(todoTitle)

    console.log(todo);

    const doneBtn = document.createElement('button')
    doneBtn.classList.add("finish-todo")
    doneBtn.innerHTML = '<i class="fa-solid fa-check"></i>'
    todo.appendChild(doneBtn)

    const editBtn = document.createElement('button')
    editBtn.classList.add("edit-todo")
    editBtn.innerHTML = '<i class="fa-solid fa-pen"></i>'
    todo.appendChild(editBtn)

    const deleteBtn = document.createElement('button')
    deleteBtn.classList.add("remove-todo")
    deleteBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>'
    todo.appendChild(deleteBtn)

    todoList.appendChild(todo)
    todoInput.value = ""
    todoInput.focus();
}

const toggleForms = () =>{
    editForm.classList.toggle('hide') //hide = mostrar
    todoForm.classList.toggle('hide')
    todoList.classList.toggle('hide')
}

const updateTodo = (text) => {
    const todos = document.querySelectorAll(".todo");
  
    todos.forEach((todo) => {
      let todoTitle = todo.querySelector("h3");
  
      if (todoTitle.innerText === oldInputValue) {
        todoTitle.innerText = text;
  
        // Utilizando dados da localStorage
        // updateTodoLocalStorage(oldInputValue, text);
      }
    });
  };
  


//Eventos
todoForm.addEventListener("submit", (e) => {
    e.preventDefault()

    const inputValue = todoInput.value
    if(inputValue){
         saveTodo(inputValue)
    }
} )


document.addEventListener("click", (e) =>{
    const targelEl = e.target // Evento que foi clicado
    const parentEl = targelEl.closest("div") //closet = procura o ancestral mais proximo
    let todoTitle;

    if(parentEl && parentEl.querySelector('h3'))
    {
        todoTitle = parentEl.querySelector("h3").innerText
    }
    if(targelEl.classList.contains("finish-todo") )
    parentEl.classList.toggle('done') //toggle = troca as clasas,
    
    if(targelEl.classList.contains('remove-todo'))
    {
        parentEl.remove(); //remove() = revome um elemento
    }
    
    if(targelEl.classList.contains('edit-todo'))
    {
       toggleForms()
       editInput.value = todoTitle
       oldInputValue = todoTitle
    }})

    editForm.addEventListener("submit", (e) => {
        e.preventDefault();
      
        const editInputValue = editInput.value;
      
        if (editInputValue) {
          updateTodo(editInputValue);
        }
      
        toggleForms();
      });


