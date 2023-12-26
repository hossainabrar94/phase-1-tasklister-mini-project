document.addEventListener("DOMContentLoaded", () => {
  // your code here
  document.addEventListener('submit', handleToDoList)
});

function handleToDoList(e){
  //prevent default form refreshes
  e.preventDefault();
  //append new ToDo items and add x button
  let newTask = document.querySelector('#new-task-description')
  let list = document.querySelector('#tasks')
  let ul = document.createElement('ul')
  let p = document.createElement('p')
  p.innerText = `${newTask.value} `
  ul.append(p)
  //add ability to edit task item
  p.addEventListener('dblclick', (e) =>{
    //console.log(e.target)
    let updatedText = prompt('Enter New Text')
    if(updatedText !== null)
    p.textContent = updatedText
  })
  //priority
  let priority = document.createElement('select')
  let options = ['Select Priority', 'Low', 'Medium', 'High']
  let optionElement
  options.forEach(element => {
    optionElement = document.createElement('option')
    optionElement.innerText = element
    priority.appendChild(optionElement)
  })
  ul.appendChild(priority)
  //set color of task item based on priority
  priority.addEventListener('change', changeColor)

  //add additional input field of user, duration and due date
  let userName = document.createElement('input')
  userName.type = 'text'
  userName.placeholder = 'Enter User'
  ul.appendChild(userName)
  let dueDate = document.createElement('input')
  let dueDateLabel = document.createElement('label')
  dueDate.type = 'date'
  dueDateLabel.innerText = 'Due Date'
  ul.appendChild(dueDateLabel)
  ul.appendChild(dueDate)
  let duration = document.createElement('input')
  let durationLabel = document.createElement('label')
  duration.type = 'time'
  durationLabel.innerText = 'Duration'
  ul.appendChild(durationLabel)
  ul.appendChild(duration)
  //add x button along with new item
  let btn = document.createElement('button')
  btn.id = 'btn'
  btn.innerText = 'x'
  ul.appendChild(btn)
  //handle the delete button to remove
  btn.addEventListener('click', deleteItem)
  //Finally append to list
  list.appendChild(ul)
  //reset form
  let form = document.querySelector('form')
  form.reset()
}

function deleteItem(e){
  e.target.parentNode.remove()
}

function changeColor(e){
  let item = e.target.parentNode.querySelector('p')
  if(e.target.value === 'Low'){
    item.style.color = 'green'
    item.className = '0'
  }else if(e.target.value === 'Medium'){
    item.style.color = 'yellow'
    item.className = '1'
  }else if(e.target.value === 'High'){
    item.style.color = 'red'
    item.className = '2'
  }else{
    item.style.color = 'black'
  }  
}

//Question: Line 3 activates when form gets submitted. This then calls the handleToDoList function. My question is, how is line 21 (which is nested within first addeventListener) getting activated within the first addEventListener from line 3? In other words, how is it seeing that the delete button has been 'clicked' if its nested within the 'submit' event listener? 