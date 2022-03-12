import './todo.css'
import './main'

import TodoPriority from './components/TodoPriority'

function Todo(props) {
    return (
        <div className="todo">
            <TodoPriority priority="high" tasks={props.tasks['high']} placeholder="Добавить важных дел"  />
            <TodoPriority priority="low" tasks={props.tasks['low']} placeholder="Добавить дел"  />
        </div>
    )
}

export default Todo
