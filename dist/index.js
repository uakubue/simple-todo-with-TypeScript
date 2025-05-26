"use strict";
console.log("I want to say Hello my Neighbours");
"HELLO".replaceAll("L", "ike");
const btn = document.getElementById("botn");
const input = document.getElementById("todoInput");
const form = document.querySelector("form");
const list = document.getElementById("todoList");
// btn.addEventListener("click", () => {
//     alert(input.value)
//     input.value;
// })
form?.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log("Form Submitted");
    const newTodoList = input.value;
    const newLI = document.createElement("li");
    const checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    newLI.append(newTodoList);
    newLI.append(checkBox);
    list?.append(newLI);
    input.value = "";
});
// TYPE ASSERTIONS
// let mystery: unknown = " hey what's pappin";
// const numchar = (mystery as string).length
// console.dir(numchar);
