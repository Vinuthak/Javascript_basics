const todoList = [{ 
  name: 'make dinner',
  dueDate: '2025-02-26'
}, {
  name:'wash dishes', 
  dueDate: '2025-02-27'}];

 renderTodoList();
function renderTodoList(){
  let todoListHTML = '';
  for(i = 0;i < todoList.length;i++){
    const todoObject = todoList[i];
    //const name = todoObject.name;
    //const dueDate = todoObject.dueDate
    const {name,dueDate} = todoObject;
   
    const html = ` 
    <div>${name}</div>
    <div>${dueDate}</div>
    <button onclick="
        todoList.splice(${i},1)
        renderTodoList();
      " class="delete-todo-css">Delete</button>
    `
    todoListHTML += html; 
  }
  document.querySelector('.js-todo-list').innerHTML = todoListHTML;
 
}

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
  