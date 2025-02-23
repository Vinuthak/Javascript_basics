const todoList = [];

function addList(){
  const inputElement = document.querySelector('.js-name-input');
  const todoName = inputElement.value
  console.log(`My List is ${todoName}`);
  todoList.push(todoName);
  console.log(todoList);

  inputElement.value = '';
}