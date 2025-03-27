const newTaskEvent = document.getElementById('btn').addEventListener('click',NewTask)
const editEvent = document.getElementById('btn').addEventListener('click',editTask)
const deleteEvent = document.getElementById('btn').addEventListener('click',deleteTask)






// click event for edit btn
const NewTodo = document.querySelector('.newTodo')


NewTodo.addEventListener('click',e => {
    
    // for (let i = 0; i < NewTodo.childNodes.length; i++) {
    //     const array1 = NewTodo.childNodes[i]
    let array1 = NewTodo.getElementsByTagName('h1')
        for (let i = 0; i < array1.length; i++) {
                // const element = array1[i];
            console.log(array1[i].id)

            
    let promptTask = prompt('edit task:')

        if(e.target.id === array1[i].id)
            NewTodo.textContent = promptTask
        console.log(array1[i].id);
        
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

debugger