const newTaskEvent = document.getElementById('btn').addEventListener('click',NewTask)
const deleteEvent = document.getElementById('btn').addEventListener('click',deleteTask)


const NewTodo = document.querySelector('.newTodo')

function NewTask() {
    // value from input
    const newText = document.getElementById('inputText').value
    
    // new h1 element for new task
    const NewElement = document.createElement('h1')
    NewElement.setAttribute('id',`${newText}`)
    // text content from input to h1
    NewElement.textContent = newText
    // appending to container
    NewTodo.append(NewElement)
    
        
    // new button for editing task
    const newButton = document.createElement('button')
    newButton.setAttribute('id','editBtn')
    newButton.innerHTML = 'edit'
    // styling edit btn
    newButton.style.backgroundColor = 'green'
    // append to container
    NewTodo.append(newButton)
    
    
    

    
}


const editEvent = document.querySelector('#editBtn').addEventListener('click',editTask)

function editTask() {
    
    NewTodo.firstChild.textContent = 'lol'
    
    
}

function deleteTask() {
    // new button for deleting task 
    const deleteButton = document.createElement('button')
    deleteButton.innerHTML = 'delete'
    // styling delete btn
        deleteButton.style.backgroundColor = 'red'
        // append to container
    NewTodo.append(deleteButton)
}