const inputText = document.getElementById("inputtext");

const list = document.getElementById("list1");

function fun() {
  if (inputText.value === "") {
    alert("Pls enter your task");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputText.value;

    list.appendChild(li);
    inputText.value = ""; //for clearing input text after adding
  }
}