// javascript
let taskList = []
const inputEl = document.getElementById("input-el")
const createEl = document.getElementById("create-el")
//const deleteEl = document.getElementById("delete-el")
const ulEl = document.getElementById("ul-el")
const leadsFromLocalStorage = JSON.parse( localStorage.getItem("taskList") )


if (leadsFromLocalStorage) {
    taskList = leadsFromLocalStorage
    render(taskList)
}

function render(){
    let listItems = ""
    for (let i = 0; i< taskList.length; i++){
        listItems += `<li> ${taskList[i]} </li>`
    }
    ulEl.innerHTML = listItems
}


createEl.addEventListener("click", function(){   
    taskList.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("taskList", JSON.stringify(taskList) )
    render(taskList)
    
})

ulEl.addEventListener("click", function(e){
    if (e.target.tagName === "LI"){
        const itemText = e.target.textContent.trim()
        const index = taskList.indexOf(itemText)
      if (index > -1) {
            taskList.splice(index, 1)
            localStorage.setItem("taskList", JSON.stringify(taskList))  // Update localStorage after removal
        }
    }
   
    render()
    
})

