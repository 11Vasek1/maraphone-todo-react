import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import storage from './storage'
import Todo from './Todo'

const tasks = storage.getTasks();

ReactDOM.render(
	<React.StrictMode>
		<Todo tasks={tasks}/>
	</React.StrictMode>,
	document.getElementById('root')	
)
