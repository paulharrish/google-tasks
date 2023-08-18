let section = {
  elmntype: "div",
  clsname: "container-fluid main",
};
let container = {
  elmntype: "div",
  clsname: "container",
};

let headingdiv = {
  elmntype: "div",
  clsname: "container-fluid top",
};

let left = {
  elmntype: "div",
  clsname: "left",
};

let txt1 = {
  elmntype: "span",
  clsname: "txt1",
};

let tasks = {
  elmntype: "div",
  clsname: "tasks",
};
let txt2 = {
  elmntype: "span",
  clsname: "txt2",
};

let img1 = {
  elmntype: "i",
  id: "img1",
  colour: "#000000",
  clsname: "fa-sharp fa-solid fa-angle-down",
};

let right = {
  elmntype: "div",
  clsname: "right",
};

let img2 = {
  elmntype: "i",
  id: "img2",
  colour: "#000000",
  clsname: "fa-sharp fa-solid fa-xmark",
};

let bottom = {
  elmntype: "div",
  clsname: "bottom",
};
let addtask = {
  elmntype: "div",
  clsname: "addtask",
};

let img3 = {
  elmntype: "i",
  id: "img3",
  colour: "#0d0d0d",
  clsname: "fa-sharp fa-solid fa-bars-progress",
};

let txt3 = {
  elmntype: "span",
  clsname: "txt3",
  colour: "#1a73e8",
};

let menu = {
  elmntype: "div",
  clsname: "menu",
};

let img4 = {
  elmntype: "i",
  id: "img4",
  colour: "#0d0d0d",
  clsname: "fa-solid fa-ellipsis-vertical",
};

let img5 = {
  elmntype: "i",
  id: "taskimage",
  source: "task.png",
};

let elmnt1 = document.createElement(section.elmntype);
elmnt1.className = section.clsname;
document.body.appendChild(elmnt1);

let elmnt2 = document.createElement(container.elmntype);
elmnt2.className = container.clsname;
elmnt1.appendChild(elmnt2);

let elmnt3 = document.createElement(headingdiv.elmntype);
elmnt3.className = headingdiv.clsname;
elmnt2.appendChild(elmnt3);

let elmnt4 = document.createElement(left.elmntype);
elmnt4.className = left.clsname;
elmnt3.appendChild(elmnt4);

let elmnt5 = document.createElement(txt1.elmntype);
elmnt5.className = txt1.clsname;
elmnt5.innerText = "TASKS";
elmnt4.appendChild(elmnt5);

let elmnt6 = document.createElement(tasks.elmntype);
elmnt6.className = tasks.clsname;
elmnt4.appendChild(elmnt6);

let elmnt7 = document.createElement(txt2.elmntype);
elmnt7.className = txt2.clsname;
elmnt7.innerText = "My Tasks";
elmnt6.appendChild(elmnt7);

let elmnt8 = document.createElement(img1.elmntype);
elmnt8.id = img1.id;
elmnt8.className = img1.clsname;
elmnt8.style.color = img1.colour;
elmnt6.appendChild(elmnt8);

let elmnt9 = document.createElement(right.elmntype);
elmnt9.className = right.clsname;
elmnt3.appendChild(elmnt9);

let elmnt10 = document.createElement(img2.elmntype);
elmnt10.id = img2.id;
elmnt10.className = img2.clsname;
elmnt10.style.color = img2.colour;
elmnt9.appendChild(elmnt10);

let elmnt11 = document.createElement(bottom.elmntype);
elmnt11.className = bottom.clsname;
elmnt2.appendChild(elmnt11);

let elmnt12 = document.createElement(addtask.elmntype);
elmnt12.className = addtask.clsname;
elmnt11.appendChild(elmnt12);

let elmnt13 = document.createElement(img3.elmntype);
elmnt13.id = img3.id;
elmnt13.className = img3.clsname;
elmnt13.style.color = img3.colour;
elmnt12.appendChild(elmnt13);

let elmnt14 = document.createElement(txt3.elmntype);
elmnt14.className = txt3.clsname;
elmnt14.innerText = "Add a task";
elmnt12.appendChild(elmnt14);

let elmnt15 = document.createElement(menu.elmntype);
elmnt15.className = menu.clsname;
elmnt11.appendChild(elmnt15);

let elmnt16 = document.createElement(img4.elmntype);
elmnt16.id = img4.id;
elmnt16.className = img4.clsname;
elmnt16.style.color = img4.colour;
elmnt15.appendChild(elmnt16);

let elmnt17 = document.createElement(img5.elmntype);
elmnt17.id = img5.id;
elmnt17.src = "task.png"
elmnt11.appendChild(elmnt17);
