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
    const {name,dueDate} = todoObject;
   
    const html = ` <p>
      ${todoObject.name} ${todoObject.dueDate} 
      <button onclick="
        todoList.splice(${i},1)
        renderTodoList();
      ">Delete</button></p> `
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
    name,
    dueDate
  });
 

  nameInput.value = '';
  renderTodoList();
}
  