const input = document.getElementById("taskInput")
const list = document.getElementById("taskList")
const count = document.getElementById("count")

let tasks = JSON.parse(localStorage.getItem("tasks")) || []       // collects all the tasks and parse it to an array

function save() {
  localStorage.setItem("tasks", JSON.stringify(tasks))    // save function , using this  localStorage.setItem the object get stored in json
  render()                                                // calls render
}

function render() {
  list.innerHTML = ""
  tasks.forEach((t, i) => {                             // renders through the task array one by one
    const li = document.createElement("li")              // creates list 

    const cb = document.createElement("input")          // creates input
    cb.type = "checkbox"                                // give that input the checkbox type so it can be either true of f
    cb.checked = t.done                                 
    cb.onchange = () => { 
      t.done = !t.done                                  // by default there is no done symbol is it only generated when marked as done
      save()                                            // goes to the save function
    }

    const span = document.createElement("span")         // creates span element 
    span.textContent = t.text                           // loads that text in that span 
    if (t.done) span.className = "completed"            // if that cb is checked it is given as completed 

    const del = document.createElement("button")        // try to figure this out 
    del.textContent = "x"
    del.onclick = () => {
      tasks.splice(i, 1)                                 // del that specific part of the task array
      save()                                             //save that info 
    }

    li.append(cb, span, del)                      
    list.appendChild(li)
  })

  const completed = tasks.filter(t => t.done).length          // go through the whole arr to find completed elements
  count.textContent = `${tasks.length} total, ${completed} completed`       
}

document.getElementById("addBtn").onclick = () => {             // add button on click 
  if (!input.value) return                                  
  tasks.push({ text: input.value, done: false })                // insert the input value in task arr
  input.value = ""
  save()
}

document.getElementById("clearBtn").onclick = () => {
  tasks = tasks.filter(t => !t.done)
  save()
}

render()
