const inputBox = document.getElementById("inputtext");
const prioritySelect = document.getElementById("priority");

function addDeleteButton(li) {
  // Create a delete button for the task
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "\u00d7";
  deleteButton.className = "delete-button"; // Add a class for styling
  li.appendChild(deleteButton);

  deleteButton.addEventListener("click", function () {
    li.remove();
    cook();
  });
}

function fun() {
  const inputText = inputBox.value;
  const priority = prioritySelect.value;
  if (inputText.trim() === "") {
    alert("Please enter your task");
  } else {
    // Create a new list item for the task
    const li = document.createElement("li");
    li.textContent = `${inputText} (Priority: ${priority})`;

    // Add a delete button to the list item
    addDeleteButton(li);

    // Append the task to the corresponding priority fieldset
    let taskContainer;
    if (priority === "high") {
      taskContainer = document.getElementById("high-priority-tasks");
    } else if (priority === "medium") {
      taskContainer = document.getElementById("medium-priority-tasks");
    } else if (priority === "low") {
      taskContainer = document.getElementById("low-priority-tasks");
    }

    taskContainer.appendChild(li);

    // Clear the input text
    inputBox.value = "";

    // Save the updated task list to local storage
    cook();
  }
}

// Event listener for marking tasks as checked
document.getElementById("list1").addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      cook();
    }
  },
  false
);

function cook() {
  const highPriorityTasks = document.getElementById("high-priority-tasks").innerHTML;
  const mediumPriorityTasks = document.getElementById("medium-priority-tasks").innerHTML;
  const lowPriorityTasks = document.getElementById("low-priority-tasks").innerHTML;

  const taskData = {
    high: highPriorityTasks,
    medium: mediumPriorityTasks,
    low: lowPriorityTasks,
  };

  localStorage.setItem("data", JSON.stringify(taskData));
}

function fetch() {
  const taskData = JSON.parse(localStorage.getItem("data")) || {};
  document.getElementById("high-priority-tasks").innerHTML = taskData.high || "";
  document.getElementById("medium-priority-tasks").innerHTML = taskData.medium || "";
  document.getElementById("low-priority-tasks").innerHTML = taskData.low || "";
}

// Call the fetch function to display tasks from local storage when the page loads
fetch();
