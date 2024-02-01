const  list =document.querySelector(".task-list");
const form = document.querySelector("#task-form");
const tasklist=document.querySelector(".list-group");
const taskInput=document.querySelector("#tasksadd")
const clear=document.querySelector('.clr');
const filter =document.querySelector('#tasksfilter')
form.addEventListener("submit",AddItem);
tasklist.addEventListener("click",RemoveItem)
clear.addEventListener("click",RemoveAll)
filter.addEventListener('keyup',GetFilter)
function AddItem(e){
    if(taskInput.value ==""){
        alert("Add A task");
    }
    else{
        const li=document.createElement('li');
        li.appendChild(document.createTextNode(taskInput.value))
        const link=document.createElement('a');
        link.className="delete-item";
        link.innerHTML='<i class="fa fa-remove"></i>';
        li.appendChild(link);
        tasklist.appendChild(li);
        taskInput.value = "";


    }
e.preventDefault();
}
function RemoveItem(e){
    if(e.target.parentElement.classList.contains('delete-item')){
            e.target.parentElement.parentElement.remove();
    }
}

function RemoveAll(e){
    while(tasklist.firstChild){
        tasklist.removeChild(tasklist.firstChild)
    }
}
function GetFilter(e) {
    const text = e.target.value.toLowerCase();
    document.querySelectorAll('.list-group li').forEach(function (task) {
        const item = task.textContent.toLowerCase();
        const link = task.querySelector('.delete-item');

        if (item.indexOf(text) !== -1) {
            task.style.display = 'flex';
            task.style.justifyContent = 'space-between';
            task.style.alignItems = 'center';
            task.style.borderBottom = '1px solid #67676775';
            task.style.padding = '10px';

            // Adjust the spacing between task text and delete icon
            link.style.marginLeft = '10px';
        } else {
            task.style.display = 'none';
        }
    });
}
