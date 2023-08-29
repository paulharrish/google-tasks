let obj = {
  elmntype: "div",
  clsname: "main container-fluid",
  elmntchild: [
    {
      elmntype: "div",
      clsname: "container",
      elmntchild: [
        {
          elmntype: "div",
          clsname: "top container-fluid",
          elmntchild: [
            {
              elmntype: "div",
              clsname: "left",
              elmntchild: [
                {
                  elmntype: "span",
                  clsname: "txt1",
                  elmnttext: "TASKS",
                },
                {
                  elmntype: "div",
                  clsname: "tasks",
                  elmntchild: [
                    {
                      elmntype: "span",
                      clsname: "txt2",
                      elmnttext: "My Tasks",
                    },
                  ],
                },
              ],
            },
            {
              elmntype: "div",
              clsname: "right",
              elmntchild: [
                {
                  elmntype: "i",
                  clsname: "fa-sharp fa-solid fa-xmark",
                  idname: "img2",
                },
              ],
            },
          ],
        },
        {
          elmntype: "div",
          clsname: "bottom",
          elmntchild: [
            {
              elmntype: "div",
              clsname: "addtask",
              idname: "addtask",
              elmntchild: [
                {
                  elmntype: "i",
                  clsname: "fa-sharp fa-solid fa-bars-progress",
                  idname: "img3",
                },
                {
                  elmntype: "span",
                  clsname: "txt3",
                  elmnttext: "Add a task",
                },
              ],
            },
            {
              elmntype: "div",
              clsname: "menu",
              idname: "menu",
              elmntchild: [
                {
                  elmntype: "i",
                  clsname: "fa-solid fa-ellipsis-vertical",
                  idname: "img4",
                },
              ],
            },
            {
              elmntype: "div",
              clsname: "popup_hidden",
              idname: "popup",
              elmntchild: [
                {
                  elmntype: "div",
                  clsname: "elmnt1",
                  idname: "elmnt1",
                  elmntchild: [
                    {
                      elmntype: "span",
                      clsname: "opn1",
                      elmnttext: "Clear All",
                      idname: "opn1",
                    },
                  ],
                },
                {
                  elmntype: "div",
                  clsname: "elmnt2",
                  idname: "elmnt2",
                  elmntchild: [
                    {
                      elmntype: "span",
                      clsname: "opn2",
                      elmnttext: "Show completed Tasks",
                      idname: "opn2",
                    },
                  ],
                },
              ],
            },
            {
              elmntype: "div",
              clsname: "ti-div",
              idname: "ti-div",
              elmntchild: [
                {
                  elmntype: "input",
                  clsname: "inputbox",
                  idname: "taskInput",
                  placeholder: "Enter task description",
                },
                {
                  elmntype: "div",
                  clsname: "button",
                  idname: "addbutton",
                  elmntchild: [
                    {
                      elmntype: "i",
                      clsname: "fa-sharp fa-solid fa-check",
                    },
                  ],
                },
              ],
            },
            {
              elmntype: "div",
              clsname: "content",
              elmntchild: [
                {
                  elmntype: "img",
                  src: "task.png",
                  idname: "taskimg",
                },
                {
                  elmntype: "div",
                  clsname: "ttc",
                  idname: "ttc",
                  elmntchild: [
                    {
                      elmntype: "h2",
                      clsname: "hidden",
                      idname: "tasksToBeCompletedHeading",
                      elmnttext: "Tasks to be completed:",
                    },
                    {
                      elmntype: "ul",
                      idname: "taskList",
                    },
                  ],
                },
                {
                  elmntype: "span",
                  clsname: "hidden2",
                  idname: "allcompleted",
                  elmnttext: "All Tasks Completed",
                },
                {
                  elmntype: "span",
                  clsname: "hidden2",
                  idname: "nicework",
                  elmnttext: "Nicework!",
                },
                {
                  elmntype: "span",
                  clsname: "allcompleted",
                  idname: "notask",
                  elmnttext: "Currently,There are no tasks to Do.",
                },
                {
                  elmntype: "div",
                  clsname: "ct",
                  elmntchild: [
                    {
                      elmntype: "h2",
                      clsname: "hidden",
                      idname: "completedtaskheading",
                      elmnttext: "Completed Tasks:",
                    },
                    {
                      elmntype: "ul",
                      idname: "completedTaskList",
                    },
                  ],
                },
                {
                  elmntype: "span",
                  clsname: "enter_description",
                  idname: "enter_description",
                  elmnttext: "Please enter task description!",
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
  let ele = document.createElement(Obj.elmntype);
  if (Obj.clsname) {
    ele.className = Obj.clsname;
  }
  if (Obj.src) {
    ele.src = Obj.src;
  }
  if (Obj.elmnttext) {
    ele.innerText = Obj.elmnttext;
  }
  if (Obj.idname) {
    ele.setAttribute("id", Obj.idname);
  }
  if (Obj.placeholder) {
    ele.placeholder = Obj.placeholder;
  }
  if (Obj.elmntchild) {
    Obj.elmntchild.forEach((item) => {
      ele.appendChild(create(item));
    });
  }
  return ele;
}

let containermain = create(obj);
document.body.appendChild(containermain);
