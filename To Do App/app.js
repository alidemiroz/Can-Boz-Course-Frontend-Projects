const addForm = document.querySelector(".add");
const list = document.querySelector(".todos");
const search = document.querySelector(".search input");

const addTodo = (todo) => {
  const html = `
    <li class="list-group-item d-flex justify-content-between align-items-center">
        <span>${todo}</span>
        <i class="fa-solid fa-trash delete"></i>
    </li>`;
  list.innerHTML += html;
};

addForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const todo = addForm.add.value.trim();
  if (todo.length) {
    addTodo(todo);
    addForm.reset();
  }
});

list.addEventListener("click", (e) => {
    if (e.target.classList.contains("delete")) {
        e.target.parentElement.remove();
    };
});

const filterTodos = searchTerm =>{
    Array.from(list.children)
    .filter(todo => !todo.textContent.toLowerCase().includes(searchTerm))
    .forEach(todo => todo.classList.add("filtered"));

    Array.from(list.children)
    .filter(todo => todo.textContent.toLowerCase().includes(searchTerm))
    .forEach(todo => todo.classList.remove("filtered"));
}

search.addEventListener("keyup", () => {
    const searchTerm = search.value.trim().toLowerCase();
    filterTodos(searchTerm);
});