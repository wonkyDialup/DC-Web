const sendTodo = (e) => {
    e.preventDefault();
    console.log("To do is sent")
};

const button = document.querySelector(".submit");
button.addEventListener("click", (e) => {
    sendTodo(e)
})