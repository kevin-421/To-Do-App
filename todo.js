const clickEvent = document.getElementById('btn').addEventListener('click',NewTask)



function NewTask() {
    // value from input
    const newText = document.getElementById('inputText').value
    // div element for new task
    const NewTodo = document.querySelector('.newTodo')
    // new h1 element for new task
    const NewElement = document.createElement('h1')
        NewElement.setAttribute('id','1')
        // text content from input to h1
        NewElement.textContent = newText
        // appending to container
        NewTodo.append(NewElement)        
    
}

