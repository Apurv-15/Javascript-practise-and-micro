const inputBox = document.getElementById("inputtext");

const listContainer = document.getElementById("list1");
const prioritySelect = document.getElementById("priority");

function fun() {
  if (inputBox.value === "") {
    alert("Pls enter your task");
  } else {
    const priority = prioritySelect.value;
    let li = document.createElement("li");
    li.innerHTML = `${inputBox.value} (Priority: ${priority})`;

    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputBox.value = ""; //for clearing input text
}

listContainer.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      cook();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      cook();
    }
  },
  false
);

function cook() {
  localStorage.setItem("data", listContainer.innerHTML);
}

function fetch() {
  listContainer.innerHTML = localStorage.getItem("data");
}
fetch();
