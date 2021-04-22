const button = document.getElementById("liveToastBtn");
let todos=[]
let listItems = document.getElementsByTagName("li");
const list = document.querySelector("ul");

for(let i =0;i<listItems.length;i++){
  todos.push(listItems[i].innerText)
    let span = document.createElement("span")
    let x = document.createTextNode("x");
    span.className="close";
    span.appendChild(x)
    listItems[i].appendChild(span)
}
let closeButton=document.getElementsByClassName("close");
for(let i=0;i<closeButton.length;i++){
    closeButton[i].onclick=function(){
        let div=this.parentElement;
        div.style.display="none"
    }
}

button.addEventListener("click", newElement);
function newElement() {
  
  let inputValue = document.getElementById("task").value;
  let newLi = document.createElement("li");
  newLi.innerText = inputValue
    
  if(inputValue === ""  || inputValue == 0){
    $(".error").toast("show");
  }else{
    document.getElementById("list").appendChild(newLi);
    todos.push(inputValue)
    $(".success").toast("show");
    localStorage.setItem("todos", JSON.stringify(todos))
  }
document.getElementById("task").value = "";

    let span = document.createElement("span")
    let x = document.createTextNode("x");
    span.className="close";
    span.appendChild(x);
    newLi.appendChild(span)

    for (i = 0; i < closeButton.length; i++) {
        closeButton[i].onclick = function () {
          var div = this.parentElement;
          div.style.display = "none";
        };
    }
  
}
list.addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
  }
});

function eventListeners(){
  document.addEventListener("DOMContentLoaded",loadAllTodosToUI); 
}
eventListeners()

function loadAllTodosToUI(){
  let todos = getTodosFromStorage();
  console.log(todos)
  todos.forEach(todo=>{
    let a = document.createElement("p")
    a.innerHTML=todo
    let span = document.createElement("span")
    let x = document.createTextNode("X");
    span.className="newClose"
     span.appendChild(x);
    a.appendChild(span)
    document.getElementById("list").appendChild(a)
  }
  )
}
function getTodosFromStorage(){
  let todos;
  if(localStorage.getItem("todos") === null){
      todos = []
  }else {
      todos = JSON.parse(localStorage.getItem("todos"))
  }
 return todos;

}