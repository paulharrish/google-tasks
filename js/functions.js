const tskbox = document.getElementById("addtask");
const inpbox = document.getElementById("ti-div");
const taskList = document.getElementById("taskList");
const tasksToBeCompletedHeading = document.getElementById(
  "tasksToBeCompletedHeading"
);
const completedtaskheading = document.getElementById("completedtaskheading");
const ttc = document.getElementById("ttc");
const taskInput = document.getElementById("taskInput");
const addbutton = document.getElementById("addbutton");
const menubtn = document.getElementById("menu");
const menudiv = document.getElementById("popup");
const menuicon = document.getElementById("img4");
const closeall = document.getElementById("elmnt1");
const show_completed_tasks = document.getElementById("elmnt2");

function addTask() {
  const description = taskInput.value;
  if (description == "") {
    document.getElementById("enter_description").style.visibility = "visible";
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
  show_taskinputbox();
  document.getElementById("notask").className = "hidden2";
  document.getElementById("allcompleted").className = "hidden2";
  document.getElementById("nicework").className = "hidden2";
});

function show_taskinputbox() {
  tskbox.style.opacity = "0";
  inpbox.style.visibility = "visible";
  completedTaskList.style.visibility = "hidden";
  completedtaskheading.classList.add("hidden");
  completedtaskheading.classList.remove("visible");
  document.getElementById("enter_description").style.visibility = "hidden";
}

addbutton.addEventListener("click", () => {
  close_taskinputbox();
  addTask();
});

function close_taskinputbox() {
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
    completedTaskList.style.visibility = "hidden";
    document.getElementById("allcompleted").className = "allcompleted";
    document.getElementById("nicework").className = "nicework";
  }
}

menubtn.addEventListener("click", () => {
  popup_down();
});
menuicon.addEventListener("click", () => {
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

closeall.addEventListener("click", () => {
  tasksToBeCompletedHeading.classList.add("hidden");
  completedtaskheading.classList.add("hidden");
  $("#taskList").empty();
  $("#completedTaskList").empty();
  document.getElementById("notask").className = "allcompleted";
  menudiv.className = "popup_hidden";
});

show_completed_tasks.addEventListener("click", () => {
  completedTaskList.style.visibility = "visible";
  completedtaskheading.classList.remove("hidden");
  completedtaskheading.classList.add("visible");
  document.getElementById("allcompleted").className = "hidden2";
  document.getElementById("nicework").className = "hidden2";
  menudiv.className = "popup_hidden";
  document.getElementById("notask").className = "hidden";
  document.getElementById("enter_description").style.visibility = "hidden";
});
