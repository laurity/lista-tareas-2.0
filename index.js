document.addEventListener('DOMContentLoaded', ()=>{
    const text = document.getElementById('write');
    const add = document.getElementById('add');
    const deleteAll = document.getElementById('delete');
    const task = document.getElementById('task');

    const newTask = (text) =>{
        const newTarea = document.createElement("li");
        newTarea.classList.add("task-item");
        newTarea.innerHTML=`<input type="checkbox" class="checkbox" id="checkbox"><label>${text}</label>`;
        task.appendChild(newTarea);
        

        

        deleteAll.addEventListener('click', () =>{  
            newTarea.remove();
        })

        const tachado = document.getElementById('checkbox');
        if (tachado === true){
            text.style.textDecoration
        }
    }

    add.addEventListener('keydown', (event) =>{
        if (event.key === 'enter'){
            event.preventDefault();
           add.click();
        }
        const textInto = text.value.trim();
        if(textInto !=''){
        newTask(textInto);
        text.value="";
    }
    })
})