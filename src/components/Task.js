const Task = ({ task, onDelete, onToggle }) => {
    return (
        <div className={`task-image ${task.reminder ?
              'border-l-4 border-l-green-700 rounded-b' : ''}`}

             onDoubleClick={() => onToggle(task.id)}>

            <h3 className="text-lg flex justify-between">{task.text}

                <span className="task-icon"
                onClick={() => onDelete(task.id)}
                >x</span>

            </h3>
            <p className="task-reminder-text">{task.day}</p>
        </div>
    )
}

export default Task
