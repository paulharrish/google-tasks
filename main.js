let obj = {
  type: "div",
  class: "main",
  class2: "container-fluid",
  child: [
    {
      type: "div",
      class: "container",
      child: [
        {
          type: "div",
          class: "top",
          class2: "container-fluid",
          child: [
            {
              type: "div",
              class: "left",
              child: [
                {
                  type: "span",
                  class: "txt1",
                  text: "TASKS",
                },
                {
                  type: "div",
                  class: "tasks",
                  child: [
                    {
                      type: "span",
                      class: "txt2",
                      text: "My Tasks",
                    },
                    {
                      type: "i",
                      class: "fa-sharp",
                      class2: "fa-solid",
                      class3: "fa-angle-down",
                      id: "img1",
                    },
                  ],
                },
              ],
            },
            {
              type: "div",
              class: "right",
              child: [
                {
                  type: "i",
                  class: "fa-sharp",
                  class2: "fa-solid",
                  class3: "fa-xmark",
                  id: "img2",
                },
              ],
            },
          ],
        },
        {
          type: "div",
          class: "bottom",
          child: [
            {
              type: "div",
              class: "addtask",
              id: "addtask",
              child: [
                {
                  type: "i",
                  class: "fa-sharp",
                  class2: "fa-solid",
                  class3: "fa-bars-progress",
                  id: "img3",
                },
                {
                  type: "span",
                  class: "txt3",
                  text: "Add a task",
                },
              ],
            },
            {
              type: "div",
              class: "menu",
              child: [
                {
                  type: "i",
                  class: "fa-solid",
                  class2: "fa-ellipsis-vertical",
                  id: "img4",
                },
              ],
            },
            {
              type: "div",
              class: "ti-div",
              id: "ti-div",
              child: [
                {
                  type: "input",
                  class: "inputbox",
                  id: "taskInput",
                  placeholder: "Enter task description",
                },
                {
                  type: "div",
                  class: "button",
                  id: "addbutton",
                  child: [
                    {
                      type: "i",
                      class: "fa-sharp",
                      class2: "fa-solid",
                      class3: "fa-check",
                    },
                  ],
                },
              ],
            },
            {
              type: "div",
              class: "content",
              child: [
                {
                  type: "img",
                  src: "task.png",
                  id: "taskimg",
                },
                {
                  type: "div",
                  class: "ttc",
                  id: "ttc",
                  child: [
                    {
                      type: "h2",
                      class: "hidden",
                      id: "tasksToBeCompletedHeading",
                      text: "Tasks to be completed:",
                    },
                    {
                      type: "ul",
                      id: "taskList",
                    },
                  ],
                },
                {
                  type: "span",
                  class: "hidden2",
                  id: "allcompleted",
                  text: "All Tasks Completed",
                },
                {
                  type: "span",
                  class: "hidden2",
                  id: "nicework",
                  text: "Nicework!",
                },
                {
                  type: "span",
                  class: "allcompleted",
                  id: "notask",
                  text: "Currently,There are no tasks to Do.",
                },
                {
                  type: "div",
                  class: "ct",
                  child: [
                    {
                      type: "h2",
                      class: "hidden",
                      id: "completedtaskheading",
                      text: "Completed Tasks:",
                    },
                    {
                      type: "ul",
                      id: "completedTaskList",
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

function create(Obj) {
  let ele = document.createElement(Obj.type);
  if (Obj.class) {
    ele.classList.add(Obj.class);
  }
  if (Obj.class2) {
    ele.classList.add(Obj.class2);
  }
  if (Obj.class3) {
    ele.classList.add(Obj.class3);
  }
  if (Obj.src) {
    ele.src = Obj.src;
  }
  if (Obj.text) {
    ele.innerText = Obj.text;
  }
  if (Obj.id) {
    ele.setAttribute("id", Obj.id);
  }
  if (Obj.placeholder) {
    ele.placeholder = Obj.placeholder;
  }
  if (Obj.child) {
    Obj.child.forEach((item) => {
      ele.appendChild(create(item));
    });
  }
  return ele;
}

let containermain = create(obj);
document.body.appendChild(containermain);
