document.getElementById('btn').addEventListener('onclick',runTodo())

function runTodo() {
    // const button = document.getElementsByClassName('todo-btn')
    // const newText = document.createElement('h1')
    // newText.textContent
    // const input = document.createElement('input')
    // input.setAttribute('type','text')
    // input.setAttribute('class','newTask')
const newText = document.getElementById('btn').value
    console.dir(newText);
}
