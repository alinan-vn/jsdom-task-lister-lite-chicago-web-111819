let li = document.createElement('li')
let ulInput = document.getElementById('tasks')
let actualInput = document.getElementById('new-task-description').value


function addText (str) {
  li.innerHTML = str
  ulInput.appendChild(li)
  // ulInput.innerText = str

}


document.addEventListener("DOMContentLoaded", () => {
  addText("havilah is FLAK")
});




