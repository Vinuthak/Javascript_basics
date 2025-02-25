const todoList = ['make dinner', 'wash dishes', 'watch news'];
 renderTodoList();
function renderTodoList(){
  let todoListHTML = '';
  for(i = 0;i < todoList.length;i++){
    const todo = todoList[i];
    const html = ` <p>${todo}</p> `
    todoListHTML += html; 
  }
  document.querySelector('.js-todo-list').innerHTML = todoListHTML;
  console.log(todoListHTML);
}

function addList(){
  const inputElement = document.querySelector('.js-name-input');
  const todoName = inputElement.value
  //console.log(`My List is ${todoName}`);
  todoList.push(todoName);
  console.log(todoList);

  inputElement.value = '';
  renderTodoList();
}
  