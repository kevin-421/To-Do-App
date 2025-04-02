const newTaskEvent = document.getElementById('btn').addEventListener('click',NewTask)
const editEvent = document.getElementById('btn').addEventListener('click',editTask)
const deleteEvent = document.getElementById('btn').addEventListener('click',deleteTask)
// set local storage items to DOM
// const savedTasks = []
window.addEventListener('load',() => {
    const getTasks = localStorage.getItem('task')
        NewTodo.textContent = getTasks
})





// click event for edit btn
const NewTodo = document.querySelector('.newTodo')


NewTodo.addEventListener('click',e => {
    console.log(e.target.id);
    
    
    // for (let i = 0; i < NewTodo.childNodes.length; i++) {
    //     const array1 = NewTodo.childNodes[i]
    let array1 = NewTodo.getElementsByTagName('h1')
        for (let i = 0; i < array1.length; i++) {
                // const element = array1[i];
            console.log(array1[i].id)

    // prompt to edit task
    let promptTask = prompt('edit task:')

        if(e.target.id === e.target.id){

            NewTodo.textContent = promptTask;
            // localstorage setting items after editing task
            localStorage.setItem('task',promptTask)
            

        }
         else  alert('something is wrong tell dev to fix it!')
        
        
        // console.log(array1[i].id);
        
        // newText.value = ''

        
    }
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

    // localstorage setting items when new task is created
    localStorage.setItem(`${newText}`,newText)
    
    

    
    
    // new button for editing task
    const newButton = document.createElement('button')
    newButton.setAttribute('id',`${newText}`)
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

