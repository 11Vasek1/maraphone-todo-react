const tasks = {
    'high': [
        {
            id: 'high-0',
            name: 'Create this task',
            isDone: false
        }
    ],
    
    'low':  [
        {
            id: 'low-0',
            name: 'Take a break',
            isDone: true
        },
        {
            id: 'low-1',
            name: 'Learn Polish',
            isDone: false
        }
    ],
}

const storage = {
    getTasks
}

function getTasks(){
    return tasks
}

export default storage;



