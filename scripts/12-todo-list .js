const todoList = [{ 
  name: 'make dinner',
  dueDate: '2025-02-26'
}, {
  name:'wash dishes', 
  dueDate: '2025-02-27'}];

 renderTodoList();
function renderTodoList(){
  let todoListHTML = '';
  todoList.forEach((todoObject,index) => {
    const {name,dueDate} = todoObject;
   
    const html = ` 
    <div>${name}</div>
    <div>${dueDate}</div>
    <button 
       class="delete-todo-css js-delete-todo-button">Delete</button>
    `
    todoListHTML += html; 
  })
  
  document.querySelector('.js-todo-list').innerHTML = todoListHTML;
 
  document.querySelectorAll('.js-delete-todo-button')
    .forEach((deleteButton,index) => {
      deleteButton.addEventListener('click',() => { todoList.splice(index,1)
      renderTodoList();})
    })
}
document.querySelector('.js-add-todo-button').addEventListener('click',() => {addList()});

function addList(){
  const nameInput = document.querySelector('.js-name-input');
  const name = nameInput.value;
  const dueDateInput = document.querySelector('.js-due-date-input');
  const dueDate = dueDateInput.value;
  //console.log(`My List is ${todoName}`);
  todoList.push({
    //name:name
    //dueDate:dueDate
    name,
    dueDate
  });
 

  nameInput.value = '';
  renderTodoList();
}
  