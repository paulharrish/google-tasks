let tskbox = document.getElementById("addtask");
let inpbox = document.getElementById("ti-div");
const taskList = document.getElementById("taskList");
const tasksToBeCompletedHeading = document.getElementById(
  "tasksToBeCompletedHeading"
);
let completedtaskheading = document.getElementById("completedtaskheading");
let ttc = document.getElementById("ttc");
let taskInput = document.getElementById("taskInput");

function addTask() {
  let description = taskInput.value;
  if (description == "") {
    alert("Please enter the task description");
    document.getElementById("notask").className = "allcompleted";
  } else {
    tasksToBeCompletedHeading.classList.remove("hidden");
    tasksToBeCompletedHeading.classList.add("visible");
    completedtaskheading.classList.remove("hidden");
    completedtaskheading.classList.add("visible");
    console.log(description);
    let item = document.createElement("li");
    item.className = "list-class";
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    let taskDescription = document.createElement("span");
    taskDescription.innerText = description;
    item.appendChild(checkbox);
    item.append(taskDescription);
    taskList.appendChild(item);
    console.log(taskList.childNodes.length);
    taskInput.value = "";
    const check = item.querySelector("input[type='checkbox']");
    check.addEventListener("change", (e) => {
      if (e.target.checked) {
        moveToCompleted(item);
      }
    });
  }
}

tskbox.addEventListener("click", (e) => {
  e.preventDefault();
  myfunc();
  document.getElementById("notask").className = "hidden2";
  document.getElementById("allcompleted").className = "hidden2";
  document.getElementById("nicework").className = "hidden2";
});

function myfunc() {
  tskbox.style.opacity = "0";
  inpbox.style.visibility = "visible";
}

let addbutton = document.getElementById("addbutton");

addbutton.addEventListener("click", () => {
  func2();
  addTask();
});

function func2() {
  tskbox.style.opacity = "1";
  inpbox.style.visibility = "hidden";
}

taskInput.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    addbutton.click();
  }
});

function moveToCompleted(item) {
  taskList.removeChild(item);
  console.log(taskList.childNodes.length);
  let clonedTaskItem = item.cloneNode(true);
  let checkbox2 = clonedTaskItem.querySelector("input[type='checkbox']");
  checkbox2.disabled = true;
  completedTaskList.appendChild(clonedTaskItem);
  clonedTaskItem.className = "clone-item";
  if (document.getElementById("taskList").childNodes.length === 0) {
    tasksToBeCompletedHeading.classList.add("hidden");
    completedtaskheading.classList.add("hidden");
    $("#completedTaskList").empty();
    document.getElementById("allcompleted").className = "allcompleted";
    document.getElementById("nicework").className = "nicework";
  }
}
const menubtn = document.getElementById("menu");
const menudiv = document.getElementById("popup");
menubtn.addEventListener("click", () => {
  popup_down();
});

function popup_down() {
  menudiv.className = "popup";
}

document.addEventListener("click", (event) => {
  if (event.target !== menubtn && !menudiv.contains(event.target)) {
    menudiv.classList.remove("popup");
    menudiv.classList.add("popup_hidden");
  }
});
