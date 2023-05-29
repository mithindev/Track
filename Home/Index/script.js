// /* Custom Dragula JS */
// dragula([
//   document.getElementById("to-do"),
//   document.getElementById("doing"),
//   document.getElementById("done"),
//   document.getElementById("trash")
// ]);
// removeOnSpill: false
//   .on("drag", function(el) {
//     el.className.replace("ex-moved", "");
//   })
//   .on("drop", function(el) {
//     el.className += "ex-moved";
//   })
//   .on("over", function(el, container) {
//     container.className += "ex-over";
//   })
//   .on("out", function(el, container) {
//     container.className.replace("ex-over", "");
//   });

// /* Vanilla JS to add a new task */
// function addTask() {
//   /* Get task text from input */
//   var inputTask = document.getElementById("taskText").value;
//   /* Add task to the 'To Do' column */
//   document.getElementById("to-do").innerHTML +=
//     "<li class='task'><p>" + inputTask + "</p></li>";
//   /* Clear task text from input after adding task */
//   document.getElementById("taskText").value = "";
// }

// /* Vanilla JS to delete tasks in 'Trash' column */
// function emptyTrash() {
//   /* Clear tasks from 'Trash' column */
//   document.getElementById("trash").innerHTML = "";
// }


// Custom Dragula JS
dragula([
  document.getElementById("to-do"),
  document.getElementById("doing"),
  document.getElementById("done"),
  document.getElementById("trash")
]);

// Vanilla JS to add a new task
function addTask() {
  // Get task text from textarea
  var inputTask = document.getElementById("taskText").value.trim();
  
  if (inputTask !== "") {
    // Create a new task element
    var taskElement = document.createElement("li");
    taskElement.className = "task";
    taskElement.innerHTML = "<p>" + inputTask + "</p>";
    
    // Add the new task to the 'To Do' column
    document.getElementById("to-do").appendChild(taskElement);
    
    // Clear task text from textarea after adding task
    document.getElementById("taskText").value = "";
    
    // Save the tasks to local storage
    saveTasksToLocalStorage();
  }
}

// Vanilla JS to delete tasks in 'Trash' column
function emptyTrash() {
  // Clear tasks from 'Trash' column
  document.getElementById("trash").innerHTML = "";
  
  // Save the tasks to local storage
  saveTasksToLocalStorage();
}

// Function to save tasks to local storage
function saveTasksToLocalStorage() {
  var taskLists = {
    todo: document.getElementById("to-do").innerHTML,
    doing: document.getElementById("doing").innerHTML,
    done: document.getElementById("done").innerHTML,
    trash: document.getElementById("trash").innerHTML
  };
  
  localStorage.setItem("taskLists", JSON.stringify(taskLists));
}

// Function to load tasks from local storage
function loadTasksFromLocalStorage() {
  var taskLists = JSON.parse(localStorage.getItem("taskLists"));
  
  if (taskLists) {
    document.getElementById("to-do").innerHTML = taskLists.todo;
    document.getElementById("doing").innerHTML = taskLists.doing;
    document.getElementById("done").innerHTML = taskLists.done;
    document.getElementById("trash").innerHTML = taskLists.trash;
  }
}

// Load tasks from local storage when the page loads
window.addEventListener("DOMContentLoaded", loadTasksFromLocalStorage);