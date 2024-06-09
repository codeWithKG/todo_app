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
function allTasks(){
  let tasks = document.querySelectorAll(".pending")
  pending_num.textContent = tasks.length === 0 ? ' no ': tasks.length 
}