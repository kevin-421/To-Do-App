const newTaskEvent = document.getElementById('btn').addEventListener('click',NewTask)
const editEvent = document.getElementById('btn').addEventListener('click',editTask)
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
        // editing

        // appending to container
        NewTodo.append(NewElement)
        console.log(NewElement.HTMLCollection);
        
}

function editTask() {
    // new button for editing task
    const newButton = document.createElement('button')
        newButton.innerHTML = 'edit'
        // styling edit btn
        newButton.style.backgroundColor = 'green'
        // append to container
        NewTodo.append(newButton)

        

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

