"use strict";
const btn = document.getElementById("botn");
const input = document.getElementById("todoInput");
const form = document.querySelector("form");
const list = document.getElementById("todoList");
// btn.addEventListener("click", () => {
//     alert(input.value)
//     input.value;
// })
form?.addEventListener("submit", handleSubmit);
const createTodo = (todo) => {
    const newLI = document.createElement("li");
    const checkBox = document.createElement("input");
    const timeRex = document.createElement("small");
    checkBox.type = "checkbox";
    newLI.append(todo.name);
    newLI.append(checkBox);
    list?.append(newLI);
    // timeRex.append(todo.timeCreated);
};
const todos = readTodos();
todos.forEach(createTodo);
// const createTodo = (todo: Todos) => {
//     const newTodoList = input.value;
//     const newLI = document.createElement("li");
//     const checkBox = document.createElement("input")
//     checkBox.type = "checkbox";
//     newLI.append(newTodoList);
//     newLI.append(checkBox);
//     list?.append(newLI);
// }
function readTodos() {
    const todoJSON = localStorage.getItem("todos");
    if (todoJSON === null)
        return [];
    return JSON.parse(todoJSON);
}
;
function handleSubmit(e) {
    e.preventDefault();
    const newTodo = {
        name: input.value,
        completed: false,
        timeCreated: new Date(),
    };
    createTodo(newTodo);
    todos.push(newTodo);
    localStorage.setItem("todos", JSON.stringify(todos));
    input.value = "";
}
// TYPE ASSERTIONS
// let mystery: unknown = " hey what's pappin";
// const numchar = (mystery as string).length
// console.dir(numchar);
