let li = document.createElement('li')
let ulInput = document.getElementById('tasks')
let actualInput = document.getElementById('new-task-description').value


function addText (str) {
  li.innerHTML = str
  ulInput.appendChild(li)
  // ulInput.innerText = str

}


document.addEventListener("DOMContentLoaded", () => {
  document.getElementById('create-task-form').addEventListener("submit", function(event) {
    event.preventDefault();
  });

  addText("havilah is FLAK")
});





// document.getElementById('create-task-form').addEventListener("submit", function(event) {
//   event.preventDefault();
// }, false)
