import { useState } from 'react'
import '../components/TodoPriority.css'
import TaskInput from './TaskInput'
import TodoList from './TodoList'

function createTask(name, index, priority){
    return {
        id: `${priority}-${index}`,
        name: name,
        isDone: false
    }
}

function TodoPriority(props){
    let [tasks, setTasks] = useState(props.tasks)
    let [index, setIndex] = useState(props.tasks.length)

    const onAdd = (taskName) => {
        const newTask = createTask( taskName, index, props.priority)
        setIndex(++index);
        setTasks( tasks.concat(newTask) )
    }

    const onChange = tasks => {
        setTasks(tasks)
    }

    return (
        <div className='todo-priority'>
            <p className='todo-priority__title'>{props.priority}</p>
            <TaskInput onAdd = { onAdd } placeholder={props.placeholder}/>
            <TodoList tasks={tasks} onChange={ onChange }/>
        </div>
    )
}

export default TodoPriority
