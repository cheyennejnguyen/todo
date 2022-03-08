const input = document.querySelector("input"),
btn = document.querySelector("button"),
todoList = document.querySelector(".todoList"),
clear = document.querySelector(".clear");

\\ ADD LIST ITEM 
const addTask = (e) => {
    e.preventDefault();
    const newLi = document.createElement("li");
    const delBtn = document.createElement("button");

    delBtn.innerHTML = 'i class="fas fa-trash-alt"></i>';

    if (input.value !== "") {
        newLi.textContent = input.value;
        
    }



}