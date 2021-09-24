const addForm = document.querySelector('#form_add');
const todoList = document.querySelector('#todo_list');
const addInput = document.querySelector('#add')
const searchInput = document.querySelector('#search')

function deleteShit(e){
  e.parentElement.remove();
}
function editable(e){
  e.contentEditable = "true";
}
addForm.addEventListener('submit', function(e){

  e.preventDefault();
  const todoValue = e.target.add.value.trim();
  const li = document.createElement('li');
        li.className = 'todo_text';
  const p = document.createElement('p');
        p.className = 'todo_parag';
        p.addEventListener('click',editable(this));
        p.appendChild(document.createTextNode(todoValue));
        li.appendChild(p);
        li.innerHTML += '<i onclick="deleteShit(this)" class="fas fa-trash-alt"></i>';
        todoList.appendChild(li);
        addInput.value = "";
});



const filterTodos = (inpVal) => {
  Array.from(todoList.children)
  .filter(todoRes => !todoRes.textContent.toLowerCase().includes(inpVal))
  .forEach(todoRes => todoRes.classList.add('filtered'))

  Array.from(todoList.children)
  .filter(todoRes => todoRes.textContent.includes(inpVal))
  .forEach(todoRes => todoRes.classList.remove('filtered'))
}

searchInput.addEventListener('keyup', () => {
  const inpVal = searchInput.value.trim().toLowerCase();
  filterTodos(inpVal)
});






