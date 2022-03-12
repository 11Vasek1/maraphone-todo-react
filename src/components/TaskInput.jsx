import './TaskInput.css'

function TaskInput(props){
    const onSubmit = (event)=>{
        event.preventDefault();
        const name = event.target[0].value;
        props.onAdd(name)
    }
    return(
        <form className="task-input" onSubmit={ onSubmit }>
            <input type="text" className='task-input__input' placeholder={props.placeholder} />
            <button className='task-input__button' type='submit'>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line y1="-0.5" x2="18.0096" y2="-0.5" transform="matrix(0.999988 -0.00481873 0.0748716 0.997193 1 10)" stroke="#998899"></line>
                    <line y1="-0.5" x2="18.0401" y2="-0.5" transform="matrix(-0.0192905 -0.999814 0.998699 0.0509976 10.5404 18.8444)" stroke="#998899"></line>
                </svg>
            </button>
        </form>
    )
}

export default TaskInput;