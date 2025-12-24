const input = document.getElementById("taskInput")
const list = document.getElementById("taskList")
const count = document.getElementById("count")

let tasks = JSON.parse(localStorage.getItem("tasks")) || []

function save() {
  localStorage.setItem("tasks", JSON.stringify(tasks))
  render()
}

function render() {
  list.innerHTML = ""
  tasks.forEach((t, i) => {
    const li = document.createElement("li")

    const cb = document.createElement("input")
    cb.type = "checkbox"
    cb.checked = t.done
    cb.onchange = () => {
      t.done = !t.done
      save()
    }

    const span = document.createElement("span")
    span.textContent = t.text
    if (t.done) span.className = "completed"

    const del = document.createElement("button")
    del.textContent = "x"
    del.onclick = () => {
      tasks.splice(i, 1)
      save()
    }

    li.append(cb, span, del)
    list.appendChild(li)
  })

  const completed = tasks.filter(t => t.done).length
  count.textContent = `${tasks.length} total, ${completed} completed`
}

document.getElementById("addBtn").onclick = () => {
  if (!input.value) return
  tasks.push({ text: input.value, done: false })
  input.value = ""
  save()
}

document.getElementById("clearBtn").onclick = () => {
  tasks = tasks.filter(t => !t.done)
  save()
}

render()
