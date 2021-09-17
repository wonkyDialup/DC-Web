const submitButton = document.querySelector(".submit");
const updateButton = document.querySelector(".updateButton");
const url = "http://localhost:3012/get_task";

const readtoDos = async () => {
  
  const taskList = document.querySelector(".todos");
  const taskData = await fetch(url, {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const json = await taskData.json();

  for (const task of json) {
    const taskName = task.taskName;
    const urgency = task.urgency;
    const assignee = task.assignee;
    const taskDetails = document.createElement("div");
    const todoName = document.createElement("p");
    todoName.className('taskID');
    const priority = document.createElement("p");
    priority.className('urgencyName');
    const assigned = document.createElement("p");
    assigned.className('assignedBy');
    todoName.innerHTML = taskName;
    priority.innerHTML = urgency;
    assigned.innerHTML = assignee;
    taskDetails.append(todoName, priority, assigned);
    taskList.append(taskDetails);
  }
  console.log(json);
};

const createTask = async () => {
  const url = "http://localhost:3012/create_task";
  const task = document.querySelector(".taskName").value;
  const urgency = document.querySelector(".urgency").value;
  const name = document.querySelector(".assignee").value;

  const taskData = {
    task,
    urgency,
    name,
  };

  const createTask = await fetch(url, {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(taskData),
  });
};

// const updateTask = async () => {
  
//   const taskID = document.querySelector(".taskID").id
//   const updateURL = `http://localhost:3012/update_task${taskID}`;
//   const updatedTask = document.querySelector(".updateTask").value
//   const urgencyUpdate = document.querySelector(".urgencyUpdate").value;
//   const nameUpdate = document.querySelector(".assigneeNew").value;
  

//   const updateData = {
//     task: updatedTask,
//     urgency: urgencyUpdate,
//     name : nameUpdate,
//   };

//   const updateTask = await fetch(updateURL, {
//     method: "POST",
//     mode: "cors",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(updateData),
//   });

// };

submitButton.addEventListener("click", () => {
  createTask();
});

// updateButton.addEventListener("click", () => {
//   updateTask();
// });