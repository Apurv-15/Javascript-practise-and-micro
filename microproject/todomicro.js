const inputBox = document.getElementById("inputtext");

const listContainer = document.getElementById("list1");

function fun() {
  if (inputBox.value === "") {
    alert("Pls enter your task");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;

    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputBox.value = ""; //for clearing input text
}

// listContainer.addEventListener("click",function(e)){

//   if(e.target.tagname==="li")
//   {
//       e.target.classList.toggle="checked";
//   }
// };
