import './TodoList.css'

import Task from "./Task";

function TodoList(props){
    let tasks = props.tasks;
    const changeTasks = props.onChange;

    const onDelete = (targetTask)=>{
        const newTasks = tasks.filter( task => task.id != targetTask.id)
        changeTasks(newTasks)
    }

    const onCheck = (targetTask) => {
        const newTasks = tasks.map( task => task )

        newTasks.forEach( (task) => {
            if (task.id === targetTask.id) {
                task.isDone = !task.isDone;
            }
        })
        
        changeTasks(newTasks)
    }



    return (
        <div className="todoList">
            {tasks.map( task => (
                <Task 
                    key={task.id} 
                    task={task} 
                    onDelete={onDelete} 
                    onCheck={onCheck}/>
            ))}
        </div>
    )
}

export default TodoList