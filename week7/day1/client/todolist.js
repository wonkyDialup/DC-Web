const sendTodo = (e) => {
    // e.preventDefault();
    const todo = document.querySelector(".todo-name").value;
    console.log(todo);
    console.log("To do is sent")
};

const button = document.querySelector(".submit");
button.addEventListener("click", (e) => {
    sendTodo(e)
})