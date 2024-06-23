// ------------------------
// Promises and Async/Await
// ------------------------
// Without Async
const fetchTodosSyncButton = document.getElementById("btn-todos-sync");

fetchTodosSyncButton.addEventListener("click", () => {
  fetchTodosSync();
});

function fetchTodosSync() {
  // Long-running synchronous operation
  const start = Date.now();
  while (Date.now() - start < 5000) {
    // Blocking loop for 5 seconds
  }

  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://jsonplaceholder.typicode.com/todos?_limit=5", false); // `false` makes the request synchronous
  xhr.send();

  if (xhr.status === 200) {
    const todos = JSON.parse(xhr.responseText);
    todos.forEach(todo => {
      let liTag = `   <li class="list pending" onclick="handleStatus(this)">
        <input type="checkbox" ${todo.completed ? "checked" : ""}>
        <span class="task">${todo.title}</span>
        <i class="fa-solid fa-trash"></i>
      </li>`;
      todoList.insertAdjacentHTML("beforeend", liTag);
    });
  } else {
    console.error("Failed to fetch todos:", xhr.statusText);
  }
}


// With async
const fetchTodosAsyncButton = document.getElementById("btn-todos-async");

fetchTodosAsyncButton.addEventListener("click", () => {
  fetchTodosAsync();
});

async function fetchTodosAsync() {
  // Long-running asynchronous operation
  await new Promise(resolve => setTimeout(resolve, 5000));

  const response = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=5");
  const todos = await response.json();
  todos.forEach(todo => {
    let liTag = `   <li class="list pending" onclick="handleStatus(this)">
      <input type="checkbox" ${todo.completed ? "checked" : ""}>
      <span class="task">${todo.title}</span>
      <i class="fa-solid fa-trash"></i>
    </li>`;
    todoList.insertAdjacentHTML("beforeend", liTag);
  });
}



// Initial setup code.
const inputField = document.querySelector(".input-field textarea")
const todoList = document.querySelector(".todoLists");
const pending_num = document.querySelector(".pending-number");
const clear_button = document.querySelector(".clear-button");


// console.log(inputField,
//   todoList,
//   pending_num,
//   clear_button
//   );
// 

inputField.addEventListener("keyup", (e) => {
  let inputVal = inputField.value.trim();
  console.log(inputVal);
  // if enter button is clicked and inputed value length is greater than 0
  if (e.key == "Enter" && inputVal.length > 0) {
    let liTag = `   <li class="list pending" onclick="handleStatus(this)">
      <input type="checkbox" name="" id="">
      <span class="task">${inputVal}</span>
      <i class="fa-solid fa-trash"></i>
    </li>`

    todoList.insertAdjacentHTML("beforeend", liTag);
    inputField.value = '';
  }

});

// checking and unchecking the checkbox while we click on the task
function handleStatus(e) {
  const checkbox = e.querySelector("input");
  // console.log(checkbox);

  checkbox.checked = checkbox.checked ? false : true;
  e.classList.toggle("pending");
  allTasks();
}


// We will call this function while adding, deleteing and checking-unchecking the task
function allTasks() {
  let tasks = document.querySelectorAll(".pending")
  pending_num.textContent = tasks.length === 0 ? ' no ' : tasks.length
}