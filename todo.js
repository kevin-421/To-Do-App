const clickEvent = document.getElementById('btn').addEventListener('click',NewTask)



function NewTask() {
    // value from input
    const newText = document.getElementById('inputText').value
    // div element for new task
    const NewTodo = document.getElementsByClassName('newTodo')
    // new h1 element for new task
    const NewElement = document.createElement('h1')
        NewElement.setAttribute('id','1')
        NewElement.textContent = 'hi'
        NewElement.appendChild(NewElement)
        document.getElementsByClassName('newTodo').appendChild(NewElement)
        
    
}

