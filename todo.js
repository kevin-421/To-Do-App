const newTaskEvent = document.getElementById('btn').addEventListener('click',NewTask)
const editEvent = document.getElementById('btn').addEventListener('click',editTask)
const deleteEvent = document.getElementById('btn').addEventListener('click',deleteTask)



const NewTodo = document.querySelector('.newTodo')
// need to keep working on this for loop
for (let i = 0; i < NewTodo.length; i++) {
    const element = NewTodo[i];
    console.log(element);   
}
NewTodo.addEventListener('click',e => {

    let promptTask = prompt('edit task:')

    if(e.target.id === 'editBtn')
        NewTodo.firstChild.textContent = promptTask
        newText.value = ''

        console.log(promptTask)
    
        
})

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




function editTask() {
    
    // NewTodo.firstChild.textContent = 'lol'
    
    
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
